import React from "react";
import { CiTempHigh } from "react-icons/ci";
import sun from "../assets/sun.png";
import { IoSunny } from "react-icons/io5";
import { TbSunset2 } from "react-icons/tb";
const TemparatureAndDetails = () => {
  return (
    <>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p className="">cloudy or weather</p>
      </div>

      <div className="flex flex-row justify-between items-center text-white py-3">
        <img src={sun} alt="" className="w-20" />
        <p className="text-5xl">34</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh className="mr-1" size={18} />
            real Fell
            <span className="font-medium ml-1">28°c</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh className="mr-1" size={18} />
            real Fell
            <span className=" font-medium ml-1">28°c</span>
          </div>

          <div className="flex font-light text-sm items-center justify-center">
            <CiTempHigh className="mr-1" size={18} />
            real Fell
            <span className="ml-1 font-medium">28°c</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center text-sm space-x-2 text-white py-3">
        <IoSunny size={20} />
        <p className="font-light">
          Rise:<span className="font-small ml-1">06:45Am</span>
        </p>
        <p className="font-light">|</p>
        <TbSunset2 size={20} />
        <p className="font-light">
          Rise:<span className="font-small ml-1">06:45Am</span>
        </p>
        <p className="font-light">|</p>
        <IoSunny size={20} />
        <p className="font-light">
          Rise:<span className="font-small ml-1">06:45Am</span>
        </p>
        <p className="font-light">|</p>
        <IoSunny size={20} />
        <p className="font-light">
          Rise:<span className="font-small ml-1">06:45Am</span>
        </p>
      </div>
    </>
  );
};

export default TemparatureAndDetails;
