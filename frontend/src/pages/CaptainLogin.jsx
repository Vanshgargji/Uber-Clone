import React, { useState, useContext } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { _captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captain = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data);
      localStorage.setItem("token", data.token);
      navigate("/captain-home"); 
    }

    setEmail("");
    setPassword("");
  };

 return (
    <div className="p-10 flex flex-col justify-between h-screen items-center bg-gray-100">
      <div className="w-[420px]">
        <img src={logo} className="w-36 ml-[-18px] mb-8" alt="" />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5"
            required
          />

          <h3 className="text-lg f</div>ont-medium mb-2">Enter Password</h3>
          
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5"
            required
          />

          <button className="bg-[#111] text-white font-semibold mt-5 rounded px-3 py-3 border w-full text-lg">
            Login
          </button>
        </form>

        <p className="text-left mt-4">
          Join the fleet?{" "}
          <Link to={"/captain-signup"} className="text-blue-500">
            Register as a Captain
          </Link>
        </p>
      </div>

      <div className="w-[420px]">
        <Link 
        to={"/login"}
        className="bg-[#e99520] flex justify-center text-white font-semibold mt-5 rounded px-3 py-3 border w-full text-lg">
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;
