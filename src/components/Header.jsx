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
    <div className="absolute w-screen bg-gradient-to-b z-10 from-black flex justify-between flex-col md:flex-row ">
      <img
        className="md:w-64 md:h-24 mx-auto w-44 h-16  md:mx-0 md:m-4 "
        alt="logo"
        src={LOGO}
      />
      {user && (
        <div className="flex  items-center  md:h-28 h-16 ">
          {showGptSearch && (
            <select
              className="text-white p-2 md:mx-8 mx-4 bg-gray-900  rounded-lg outline-none"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {" "}
                  {lang.name}{" "}
                </option>
              ))}
            </select>
          )}
          <div className="flex items-center mx-auto">
            <button
              onClick={handleGptSearchClick}
              className="py-2 px-4 bg-red-600  rounded-lg md:w-32 w-36 text-sm md:text-md ml-[10%] md:h-10 h-9  text-white  cursor-pointer md:mx-4"
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <button
              className="p-4 m-4 text-white md:ml-0 md:text-lg text-sm w-30 md:w-max  ml-[10%] cursor-pointer"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
          <img
            className="w-16 h-16 m-8 md:inline-block hidden"
            alt="userLogo"
            src={USER_AVATAR}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
