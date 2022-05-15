import React from "react";
import { Link } from "react-router-dom";

const DropDown = () => {
  return (
    <div className="bg-black">
      <div className="container flex h-[40px] w-11/12 m-auto">
        <div className="navbar-menu">
          <ul className="h-full flex justify-center items-center">
            <li className="text-white h-full">
              <Link
                to="/"
                className=" flex  px-8 hover:border-b-white h-full text-[#a4a4a4] text-[14px]"
              >
                Home
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
