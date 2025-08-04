import React, {useState} from "react";  
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/userContext";

const UserSignup = () => { 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const {user, setUser} = React.useContext(UserDataContext);
  console.log(user)

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: { 
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
      };

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if( response.status === 201 ) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem("user", data.token);
        navigate("/home");
      }


    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
}

  return (
    <div className="p-10 flex flex-col justify-between h-screen items-center bg-gray-100">
      <div className="w-[420px]">
        <img src={logo} className="w-36 ml-[-18px] mb-2" alt="" />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-6">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg mb-5"
              required
            />

            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg mb-5"
              required
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Enter your email"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5"
            required
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5"
            required
          />

          <button className="bg-[#111] text-white font-semibold mt-5 rounded px-3 py-3 border w-full text-lg">
            Create Account
          </button>
        </form>

        <p className="text-left mt-4">
          Already have an account?{" "}
          <Link to={"/login"} className="text-blue-500">
            Login here
          </Link>
        </p>
      </div>

      <div className="w-[420px] ">
        <p className="text-[13px] leading-tight">By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Scootrip and its affiliates to the number provided</p>
      </div>
    </div>
  );
};

export default UserSignup;
