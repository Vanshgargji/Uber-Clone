import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className='h-screen flex w-full flex-col bg-cover bg-center bg-[url("https://media.istockphoto.com/id/2168516574/photo/traffic-light-isolated-in-the-sky.jpg?s=612x612&w=0&k=20&c=n73o8Od0EzaVsQINBGn9i5inYgntWaRrO-uI-hNdeKU=")] justify-between'>
        <img src={logo} className="w-30" alt="" />
        <div className="bg-white py-4 px-4 pb-5">
          <h2 className="text-2xl font-bold">Get Started With Scootrip</h2>
          <Link
            to="/login"
            className="relative w-full bg-black text-white py-3 rounded-2xl mt-2 flex items-center justify-center"
          >
            <span className="absolute right-4 size-7">→</span>
            <span className="text-center w-full font-bold">Continue</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
