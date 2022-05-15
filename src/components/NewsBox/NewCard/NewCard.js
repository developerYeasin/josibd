import React from "react";
import { Link } from "react-router-dom";

const NewCard = () => {
  return (
    <div className=" w-full relative bg-white">
      <div>
        <img
          className=" w-full"
          src="https://ichef.bbc.co.uk/wwhp/304/cpsprodpb/171F1/production/_124750749_liverpoolwinnerswebsite.jpg"
          alt=""
        />
      </div>
      <h2 className={`text-[#212121] text-5 leading-none my-3`}>
        UN condemns killing of Al Jazeera reporter
      </h2>
      <p className="text-gray-600 text-4">
        Shireen Abu Aqla was shot dead in disputed circumstances in the occupied
        West Bank.{" "}
      </p>
      <div className="text-gray-600 border-l-[3px] border-[#e00f0f] border-solid text-[15px] leading-[15px] pl-[7px] mt-[15px] uppercase">
        Middle East
      </div>
      <Link to="/" className="absolute top-0 left-0 w-full h-full"></Link>
    </div>
  );
};

export default NewCard;
