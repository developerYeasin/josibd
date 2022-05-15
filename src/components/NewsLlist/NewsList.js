import React from "react";
import { Link } from "react-router-dom";

const NewsList = () => {
  return (
    <div className="w-full">
      <div className="w-full uppercase py-2 px-2 bg-[#E91802]">
        <h4 className="text-white text-lg font-semibold">
          LATEST BUSINESS NEWS
        </h4>
      </div>
      <ul>
        <li className="bg-gray-800 odd:bg-gray-900">
          <Link to="/" className="flex items-center group py-6 px-8">
            <span className="rounded-full flex justify-center items-center italic h-11 w-11  bg-[#E91802] text-white font-semibold text-4 ">
              1
            </span>
            <h4 className="text-xl text-[#d3d3d3] group-hover:text-white transition ease-in-out duration-300 w-[80%] ml-auto ">
              Russia to suspend electricity supply to Finland
            </h4>
          </Link>
        </li>
        <li className="bg-gray-800 odd:bg-gray-900">
          <Link to="/" className="flex items-center group py-6 px-8">
            <span className="rounded-full flex justify-center items-center italic h-11 w-11  bg-[#E91802] text-white font-semibold text-4 ">
              2
            </span>
            <h4 className="text-xl text-[#d3d3d3] group-hover:text-white transition ease-in-out duration-300 w-[80%] ml-auto ">
              Russia to suspend electricity supply to Finland
            </h4>
          </Link>
        </li>
        <li className="bg-gray-800 odd:bg-gray-900">
          <Link to="/" className="flex items-center group py-6 px-8">
            <span className="rounded-full flex justify-center items-center italic h-11 w-11  bg-[#E91802] text-white font-semibold text-4 ">
              3
            </span>
            <h4 className="text-xl text-[#d3d3d3] group-hover:text-white transition ease-in-out duration-300 w-[80%] ml-auto ">
              Russia to suspend electricity supply to Finland
            </h4>
          </Link>
        </li>
        <li className="bg-gray-800 odd:bg-gray-900">
          <Link to="/" className="flex items-center group py-6 px-8">
            <span className="rounded-full flex justify-center items-center italic h-11 w-11  bg-[#E91802] text-white font-semibold text-4 ">
              4
            </span>
            <h4 className="text-xl text-[#d3d3d3] group-hover:text-white transition ease-in-out duration-300 w-[80%] ml-auto ">
              Russia to suspend electricity supply to Finland
            </h4>
          </Link>
        </li>
        <li className="bg-gray-800 odd:bg-gray-900">
          <Link to="/" className="flex items-center group py-6 px-8">
            <span className="rounded-full flex justify-center items-center italic h-11 w-11  bg-[#E91802] text-white font-semibold text-4 ">
              5
            </span>
            <h4 className="text-xl text-[#d3d3d3] group-hover:text-white transition ease-in-out duration-300 w-[80%] ml-auto ">
              Russia to suspend electricity supply to Finland
            </h4>
          </Link>
        </li>
        <li className="bg-gray-800 odd:bg-gray-900">
          <Link to="/" className="flex items-center group py-6 px-8">
            <span className="rounded-full flex justify-center items-center italic h-11 w-11  bg-[#E91802] text-white font-semibold text-4 ">
              6
            </span>
            <h4 className="text-xl text-[#b3b3b3] group-hover:text-white transition ease-in-out duration-300 w-[80%] ml-auto ">
              Russia to suspend electricity supply to Finland
            </h4>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsList;
