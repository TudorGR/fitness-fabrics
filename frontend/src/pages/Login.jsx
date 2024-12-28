import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(backendUrl + "/api/user/signup", { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + "/api/user/login", { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center w-[70%] sm:w-[55%] md:w-[400px] m-auto my-24 gap-4">
      <div className="flex w-full justify-between ">
        <p className={`transition-all duration-150 ${currentState !== "Login" ? "border-b-black text-black" : "border-b-gray-300 text-gray-300"} border border-white py-2 flex-1 text-center font-semibold cursor-pointer`} onClick={() => setCurrentState("Sign Up")}>
          Sign Up
        </p>
        <p className={`transition-all duration-150 ${currentState === "Login" ? "border-b-black text-black" : "border-b-gray-300 text-gray-300"} border border-white   py-2 flex-1 text-center font-semibold cursor-pointer`} onClick={() => setCurrentState("Login")}>
          Sign In
        </p>
      </div>
      <div className="inline-flex items-center gap-2 mb-2 ">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-slate-300" />
      </div>
      {currentState === "Sign Up" ? <input onChange={(e) => setName(e.target.value)} value={name} type="text" className=" font-medium w-full px-3 py-2 border border-black rounded-sm" placeholder="Name" required /> : ""}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className=" font-medium w-full px-3 py-2 border border-black rounded-sm" placeholder="Email" required />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className=" font-medium w-full px-3 py-2 border border-black rounded-sm" placeholder="Password" required />
      {currentState === "Sign Up" && (
        <div className="flex items-start gap-2">
          <input type="checkbox" />
          <label htmlFor="newsletter" className="text-xs">
            I would like to receive newsletters from FITNESS FABRICS about current trends, offers and vouchers in accordance with the Privacy Policy.
          </label>
        </div>
      )}
      {currentState === "Login" ? (
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer text-gray-300">Forgot your password?</p>
        </div>
      ) : null}
      <button className="rounded-sm bg-black text-white py-3 px-10">{currentState === "Login" ? "Sign In" : "Sign Up"}</button>
      <ToastContainer />
    </form>
  );
};

export default Login;
