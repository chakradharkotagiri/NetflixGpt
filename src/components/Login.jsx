import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg" />
      </div>

      <form className=" w-3/12 p-12 rounded-lg absolute bg-black/80  mx-auto right-0 left-0 my-36 text-white">
        <h1 className=" font-bold p-4  text-3xl my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
          {!isSignIn && <input
          type="text"
          placeholder="Full Name  "
          className="outline-none w-full rounded-lg placeholder-white caret-white   bg-gray-700  p-4 my-6 m-4"
        />}
        <input
          type="text"
          placeholder="Email  "
          className="outline-none w-full rounded-lg placeholder-white caret-white   bg-gray-700  p-4 my-6 m-4"
        />
        <input
          type="text"
          placeholder="Password"
          className="outline-none rounded-lg  placeholder-white caret-white bg-gray-700 w-full my-5 p-4 m-4"
        />
        <button className="p-4 rounded-lg m-4 cursor-pointer w-full bg-red-700">
        {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-4 m-4 cursor-pointer" onClick={toggleSignIn}>
            
          {isSignIn?"New to Netflix ? Sign up now":"Already a user Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
