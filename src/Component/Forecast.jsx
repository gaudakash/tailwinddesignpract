import React from "react";
import sun from "../assets/sun.png";
const Forecast = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">hrs forcast</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-between ">
          <p className="font-light text-sm ">04:38Pm</p>
          <img src={sun} className="w-12 my-1" alt="" />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-between ">
          <p className="font-light text-sm ">04:38Pm</p>
          <img src={sun} className="w-12 my-1" alt="" />
          <p className="font-medium">22</p>
        </div>
        <div className="flex flex-col items-center justify-between ">
          <p className="font-light text-sm ">04:38Pm</p>
          <img src={sun} className="w-12 my-1" alt="" />
          <p className="font-medium">22</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-between ">
          <p className="font-light text-sm ">04:38Pm</p>
          <img src={sun} className="w-12 my-1" alt="" />
          <p className="font-medium">22</p>
        </div>{" "}
        <div className="flex flex-col items-center justify-between ">
          <p className="font-light text-sm ">04:38Pm</p>
          <img src={sun} className="w-12 my-1" alt="" />
          <p className="font-medium">22</p>
        </div>
      </div>
    </>
  );
};

export default Forecast;
