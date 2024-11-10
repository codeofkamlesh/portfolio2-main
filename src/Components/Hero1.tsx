import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from 'next/image';
const Hero1 = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row justify-between">
      <div className="py-12 px-8 md:py-20 md:px-16 lg:py-28 lg:px-32">
        <h1 className="text-green-400 font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">
          Get More Done with
        </h1>
        <h1 className="text-green-400 font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">
          Whitepace
        </h1>
        <p className="text-white mt-4 md:mt-5">
          Project Managment software that  enabale Your Teams to collaborate, plan,<br />
          analyze mad manage everyday tasks
        </p>
        <button className="bg-[#d72307] flex items-center justify-center py-2 px-4 rounded-lg mt-6">
          Try Writepace Free <FaArrowRight className="ml-2" />
        </button>
      </div>
      <div className="py-8 px-8 md:py-16 md:px-20 lg:py-20 lg:px-28">
        <div
          className="w-[800px] md:w-[250px] lg:w-[400px] bg-cover"
          style={{
            backgroundImage: "url('/pic2.jpg')",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Hero1;
