import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import { useNavigate } from "react-router-dom";
import axios from 'axios' ; 

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const { _captain, setCaptain } = React.useContext(CaptainDataContext);

  const Navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
       fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        plate: vehiclePlate,
        color: vehicleColor,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);
    
    if(response.status === 201) {
      const data = response.data;
      setCaptain(data);
      localStorage.setItem("token", data.token);
      Navigate("/captain-home");

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehiclePlate("");
    setVehicleColor("");
    setVehicleCapacity("");
    setVehicleType("");
  };
  };

  return (
    <div className="p-10 flex flex-col justify-between h-screen items-center bg-gray-100">
      <div className="w-[420px]">
        <img src={logo} className="w-36 ml-[-18px] mb-2" alt="" />

        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">
            What's our Captain's name
          </h3>
          <div className="flex gap-6">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg mb-3"
              required
            />

            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="bg-[#eeeeee] rounded px-3 py-3 border w-1/2 text-lg mb-3"
              required
            />
          </div>

          <h3 className="text-lg font-medium mb-2">
            What's our Captain's email
          </h3>
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

          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>
          <select
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5"
            required
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="moto">Moto</option>
          </select>

          <input
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            type="text"
            placeholder="Vehicle Plate Number"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5"
            required
          />

          <div  className="flex gap-6">
            <input
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            type="text"
            placeholder="Vehicle Color"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5"
            required
          />

          <input
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            type="number"
            placeholder="Vehicle Capacity"
            className="bg-[#eeeeee] rounded px-3 py-3 border w-full text-lg mb-5"
            required
          />

          </div>

          <button className="bg-[#111] text-white font-semibold mt-4 rounded px-3 py-3 border w-full text-lg">
            Create Account
          </button>
        </form>

        <p className="text-left mt-4">
          Already have an account?{" "}
          <Link to={"/captain-login"} className="text-blue-500">
            Login here
          </Link>
        </p>
      </div>

      <div className="w-[420px] ">
        <p className="text-[13px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp or SMS messages,
          including by automated means, from Scootrip and its affiliates to the
          number provided
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
