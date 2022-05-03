import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-black flex">
      <div className="container flex h-[40px] w-11/12 m-auto">
        <div className="navbar-brand flex justify-center items-center">
          <Link to="/">
            <img
              src="https://static.files.bbci.co.uk/orbit/2ebfb76b1a3c92fec738040dc1b5fbd2/img/blq-orbit-blocks_white.svg"
              alt="BBC"
            />
          </Link>
        </div>
        <div className="user-login text-white border-x border-solid border-[#5a5a5a] flex justify-start items-center ml-5 h-full border-b-4 border-b-black hover:border-b-sky-600 min-w-[10.93em] cursor-pointer ">
          <div className="bg-[url('https://static.files.bbci.co.uk/account/id-cta/565/style/img/idcta-icon-sprite.svg')] h-[22px] w-[22px] bg-no-repeat bg-[length:22px] bg-[left_top_-81px] "></div>
          <p className="ml-3 text-[#a4a4a4] text-[14px]">Sign In</p>
        </div>
        <div className="navbar-menu">
          <ul className="h-full flex justify-center items-center">
            <li className="text-white h-full">
              <Link
                to="/"
                className="border-r border-solid flex justify-center items-center border-[#5a5a5a] px-8 border-b-4 border-b-black hover:border-b-white h-full text-[#a4a4a4] text-[14px]"
              >
                Home
              </Link>
            </li>
            <li className="text-white h-full">
              <Link
                to="/"
                className="border-r border-solid flex justify-center items-center border-[#5a5a5a] px-8 border-b-4 border-b-black hover:border-b-red-700 h-full text-[#a4a4a4] text-[14px]"
              >
                News
              </Link>
            </li>
            <li className="text-white h-full">
              <Link
                to="/"
                className="border-r border-solid flex justify-center items-center border-[#5a5a5a] px-8 border-b-4 border-b-black hover:border-b-yellow-700 h-full text-[#a4a4a4] text-[14px]"
              >
                Sport
              </Link>
            </li>
            <li className="text-white h-full">
              <Link
                to="/"
                className="border-r border-solid flex justify-center items-center border-[#5a5a5a] px-8 border-b-4 border-b-black hover:border-b-sky-700 h-full text-[#a4a4a4] text-[14px]"
              >
                Reel
              </Link>
            </li>
            <li className="text-white h-full">
              <Link
                to="/"
                className="border-r border-solid flex justify-center items-center border-[#5a5a5a] px-8 border-b-4 border-b-black hover:border-b-green-700 h-full text-[#a4a4a4] text-[14px]"
              >
                Travel
              </Link>
            </li>
            <li className="text-white h-full">
              <Link
                to="/"
                className="border-r border-solid flex justify-center items-center border-[#5a5a5a] px-8 border-b-4 border-b-black hover:border-b-sky-900 h-full text-[#a4a4a4] text-[14px]"
              >
                Future
              </Link>
            </li>
            <li className="text-white h-full">
              <Link
                to="/"
                className="border-r border-solid flex justify-center items-center border-[#5a5a5a] px-8 border-b-4 border-b-black hover:border-b-green-700 h-full text-[#a4a4a4] text-[14px]"
              >
                Culture
              </Link>
            </li>
            <li className="text-white h-full">
              <Link
                to="/"
                className="border-r border-solid flex justify-center items-center border-[#5a5a5a] px-8 border-b-4 border-b-black hover:border-b-white h-full text-[#a4a4a4] text-[14px]"
              >
                More
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
