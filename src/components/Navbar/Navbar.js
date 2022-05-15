import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineSearch, MdOutlineArrowDropDown } from "react-icons/md";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import DropDown from "./DropDown";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <div className="navbar bg-black border-solid border-[#5a5a5a] border-b py-3">
        <div className="container flex h-[40px] w-11/12 m-auto justify-center sm:justify-start">
          <div className="navbar-brand flex justify-center items-center">
            <Link to="/">
              <img
                src="https://static.files.bbci.co.uk/orbit/2ebfb76b1a3c92fec738040dc1b5fbd2/img/blq-orbit-blocks_white.svg"
                alt="BBC"
              />
            </Link>
          </div>
          <div className="ml-5  flex justify-center items-center ">

            <div className="user-login text-white border-solid ml-5 flex justify-start items-center  h-full border-b-4 border-b-black hover:border-b-sky-600 lg:w-[10.93em] sm:w-[5.93em] w-auto cursor-pointer ">

              <div className="bg-[url('https://static.files.bbci.co.uk/account/id-cta/565/style/img/idcta-icon-sprite.svg')] h-[22px] w-[22px] bg-no-repeat bg-[length:22px] bg-[left_top_-81px] "></div>

              <p className="ml-3 text-white text-[14px] sm:block hidden">Sign In</p>
            </div>

          </div>

          <div className="navbar-menu">
            <ul className="h-full flex justify-center items-center">
              <li className="text-white h-full sm:hidden block ">
                <Link
                  to="/"
                  className=" border-solid flex justify-center items-center px-5 border-b-4 border-b-black hover:border-b-white h-full text-white text-[26px]"
                >
                 <AiOutlineMenuUnfold/>
                </Link>
              </li>
              <li className="text-white h-full sm:block hidden">
                <Link
                  to="/"
                  className=" border-solid flex justify-center items-center px-5 border-b-4 border-b-black hover:border-b-white h-full text-white text-[14px]"
                >
                  Home
                </Link>
              </li>
              <li className="text-white h-full sm:block hidden">
                <Link
                  to="/"
                  className="flex justify-center items-center px-5 border-b-4 border-b-black hover:border-b-red-700 h-full text-white text-[14px]"
                >
                  News
                </Link>
              </li>
              <li className="text-white h-full md:block hidden">
                <Link
                  to="/"
                  className=" flex justify-center items-center px-5 border-b-4 border-b-black hover:border-b-yellow-700 h-full text-white text-[14px]"
                >
                  Sport
                </Link>
              </li>
              <li className="text-white h-full md:block hidden">
                <Link
                  to="/"
                  className="flex justify-center items-center px-5 border-b-4 border-b-black hover:border-b-sky-700 h-full text-white text-[14px]"
                >
                  Reel
                </Link>
              </li>
              <li className="text-white h-full md:block hidden">
                <Link
                  to="/"
                  className="flex justify-center items-center px-5 border-b-4 border-b-black hover:border-b-green-700 h-full text-white text-[14px]"
                >
                  Travel
                </Link>
              </li>
              <li className="text-white h-full lg:block hidden">
                <Link
                  to="/"
                  className="flex justify-center items-center px-5 border-b-4 border-b-black hover:border-b-sky-900 h-full text-white text-[14px]"
                >
                  Future
                </Link>
              </li>
              <li className="text-white h-full lg:block hidden">
                <Link
                  to="/"
                  className=" flex justify-center items-center px-5 border-b-4 border-b-black hover:border-b-green-700 h-full text-white text-[14px]"
                >
                  Culture
                </Link>
              </li>
              <li className="text-white h-full sm:block hidden">
                <a
                  onClick={() => setDropDown(!dropDown)}
                  className="flex cursor-pointer justify-center items-center  px-5 border-b-4 border-b-black hover:border-b-white h-full text-white text-[14px]"
                >
                  More
                  <span className="text-[18px] text-[#fff]">
                    <MdOutlineArrowDropDown />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <Link
            to="/"
            className=" px-2 border-b-4 border-b-black hover:border-b-white h-full text-white text-[14px] flex items-center justify-center"
          >
            <span className="text-[21px] text-white">
              <MdOutlineSearch />
            </span>
            <p className="sm:block hidden">search josibd</p>
          </Link>
        </div>
      </div>
      {dropDown && <DropDown />}
    </>
  );
};

export default Navbar;
