import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/");

        // User is signed out
        // ...
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen bg-gradient-to-b z-10 from-black flex justify-between ">
      <img className="w-64  m-4" alt="logo" src={LOGO} />
      {user && (
        <div className="flex items-center ">
          {showGptSearch && <select
            className="text-white p-2 bg-gray-900 rounded-lg outline-none"
            onChange={handleLanguageChange}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {" "}
                {lang.name}{" "}
              </option>
            ))}
          </select>}
          <button
            onClick={handleGptSearchClick}
            className="py-2 px-4 bg-red-600 rounded-lg text-white  cursor-pointer mx-4"
          >
            {showGptSearch?"Home Page":"GPT Search"}
          </button>
          <button
            className="p-4 m-4 text-white cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <img className="w-16 h-16 m-8" alt="userLogo" src={USER_AVATAR} />
        </div>
      )}
    </div>
  );
};

export default Header;
