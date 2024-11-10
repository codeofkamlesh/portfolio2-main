import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Hero3 = () => {
  return (
    <div className="bg-white flex flex-col lg:flex-row justify-around">
      <div className="py-8 px-8 md:py-16 md:px-20 lg:py-20 lg:px-28">
        <img
          src="img1.png"
          alt=""
          className="w-[800px] md:w-[250px] lg:w-[400px]"
        />
      </div>

      <div className="py-12 px-8 md:py-20 md:px-16 lg:py-28 lg:px-32">
        <h1 className="text-green-400 font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">
          Work 
        </h1>
        <h1 className="text-green-400 font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">
          Together
        </h1>
        <p className="text-black mt-4 md:mt-5">
          With White Space, share your notes With Your colleagues on them.
          You can also publish a note to the internet and share the URL with Others.
        </p>
        <button className="bg-green-400 flex items-center justify-center py-2 px-4 rounded-lg mt-6">
          Let's Go<FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Hero3;
