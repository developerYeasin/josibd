import React from "react";
import { Link } from "react-router-dom";
import NewCard from "./NewCard/NewCard";

const NewsBox = () => {
  return (
    <div>
      <div>
        <h4 className="text-gray-700 hover:text-black border-l-[3px] border-[#eb0909] border-solid text-[25px] leading-[20px] pl-[7px] mt-[15px] font-bold">
          <Link className="text-gray-700 hover:text-black no-underline transition duration-300 ease-in-out" to="/">
            News
          </Link>
        </h4>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-[15px]">
          <NewCard />
          <NewCard />
          <NewCard />
      </div>
    </div>
  );
};

export default NewsBox;
