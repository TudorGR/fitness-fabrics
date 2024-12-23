import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[40%] m-auto mt-14 gap-4">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-slate-300" />
      </div>
      {currentState === "Sign Up" ? <input type="text" className="w-full px-3 py-2 border border-gray-800" placeholder="Name" required /> : ""}
      <input type="email" className="w-full px-3 py-2 border border-gray-800" placeholder="Email" required />
      <input type="password" className="w-full px-3 py-2 border border-gray-800" placeholder="Password" required />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        {currentState === "Login" ? (
          <p className="cursor-pointer" onClick={() => setCurrentState("Sign Up")}>
            Create Account
          </p>
        ) : (
          <p className="cursor-pointer" onClick={() => setCurrentState("Login")}>
            Login
          </p>
        )}
      </div>
      <button className="bg-black text-white py-3 px-10">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
    </form>
  );
};

export default Login;
