import React from "react";
import { FaSearchLocation } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Inputs = () => {
  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search city name here...."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <FaSearchLocation
          className="text-white cursor-pointer hover:scale-125 transition ease-out"
          size={25}
        />
        <FaLocationCrosshairs
          className="text-white cursor-pointer hover:scale-125 transition ease-out"
          size={25}
        />
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light">
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="imperial" className="text-xl text-white font-light">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
