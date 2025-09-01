import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    

    const dispatch = useDispatch();

  const name = useRef(null)
  const email = useRef(null);
  const password = useRef(null);

  const emailVal = email.current?.value;
  const passwordVal = password.current?.value;

  const handleButtonClick = () => {
    const message = checkValidData(emailVal, passwordVal);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      //Signup form logic
      createUserWithEmailAndPassword(auth, emailVal, passwordVal)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user; 
          updateProfile(auth.currentUser, {
            displayName:name.current.value , photoURL: USER_AVATAR
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;

            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));


          }).catch((error) => {
            setErrorMessage(error.message)
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(auth, emailVal, passwordVal)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg" />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" w-3/12 p-12 rounded-lg absolute bg-black/80  mx-auto right-0 left-0 my-36 text-white"
      >
        <h1 className=" font-bold p-4  text-3xl my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name  "
            className="outline-none w-full rounded-lg placeholder-white caret-white   bg-gray-700  p-4 my-6 m-4"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email  "
          className="outline-none w-full rounded-lg placeholder-white caret-white   bg-gray-700  p-4 my-6 m-4"
        />
        <input
          ref={password}
          type="text"
          placeholder="Password"
          className="outline-none rounded-lg  placeholder-white caret-white bg-gray-700 w-full my-5 p-4 m-4"
        />
        <p className="text-red-700 font-bold px-6">{errorMessage}</p>
        <button
          className="p-4 rounded-lg m-4 cursor-pointer w-full bg-red-700"
          onClick={() => {
            handleButtonClick();
          }}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 m-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix ? Sign up now"
            : "Already a user Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
