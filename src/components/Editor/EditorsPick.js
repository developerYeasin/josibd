import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import NewsBox3 from "../NewsBox/NewsBox3";
import NewsList from "../NewsLlist/NewsList";

const EditorsPick = () => {
  return (
    <div className="w-11/12 mx-auto container">
      <div>
        <h4 className="text-gray-700 hover:text-black border-l-[3px] border-[#eb0909] border-solid text-[25px] leading-[20px] pl-[7px] mt-[15px] font-bold">
          <Link
            className="text-gray-700 hover:text-black no-underline transition duration-300 ease-in-out"
            to="/"
          >
            News
          </Link>
        </h4>
      </div>
      <div className="grid grid-cols-[68%_32%] gap-4 mt-5">
        <div>
          <div className="h-[400px]">
            <Card />
          </div>
          <NewsBox3 />
          <NewsBox3 />
          <NewsBox3 />
        </div>
        <div className="w-full ">
          <NewsList/>
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
