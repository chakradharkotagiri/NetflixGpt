import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/cb72daa5-bd8d-408b-b949-1eaef000c377/web/IN-en-20250825-TRIFECTA-perspective_a3209894-0b01-4ddb-b57e-f32165e20a3f_medium.jpg" />
      </div>

      <form className=" w-3/12 p-12 absolute bg-black/80  mx-auto right-0 left-0 my-36 text-white">
        <h1 className=" font-bold text-3xl my-4">Sign In</h1>
        <input
          type="text"
          placeholder="Email  "
          className="outline-none w-full placeholder-white caret-black   bg-gray-700  p-4 my-6 m-4"
        />
        <input
          type="text"
          placeholder="Password"
          className="outline-none placeholder-white caret-black bg-gray-700 w-full my-5 p-4 m-4"
        />
        <button className="p-4 m-4 cursor-pointer w-full bg-red-700">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
