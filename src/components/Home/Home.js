import React from "react";
import Navbar from "../Navbar/Navbar";
import Card from "../Card/Card";
import Card2 from "../Card/Card2";
import NewsBox from "../NewsBox/NewsBox";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import Card3 from "../Card/Card3";
import NewsBox2 from "../NewsBox/NewsBox2";
import EditorsPick from "../Editor/EditorsPick";
import Footer from "../Footer/Footer";

const Home = () => {
  const subTitle = ` Kharkiv's mayor tells the BBC that people are now gradually coming back
    to the key Ukrainian city.`;
  return (
    <div className="home">
      <Navbar />

      <div className="container w-11/12 mx-auto flex items-center justify-between">
        <h2 className="text-[30px] font-bold">Welcome to BBC.com</h2>
        <h4 className="text-zinc-500 font-bold">Saturday, 14 May</h4>
      </div>
      <div className="container w-11/12 mx-auto h-[356.5px] grid grid-cols-2 gap-4">
        <div className="h-full">
          <Card heading={"32px"} subTitle={subTitle} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            {" "}
            <Card2 />
          </div>
          <div>
            {" "}
            <Card2 />
          </div>
          <div>
            {" "}
            <Card2 />
          </div>
          <div>
            {" "}
            <Card2 />
          </div>
        </div>
      </div>
      <div className="mt-6 w-11/12 mx-auto container grid grid-cols-[70%_30%] gap-4">
        <div>
          <NewsBox />
          <NewsBox />
          <NewsBox />
        </div>
        <div className="w-full h-full text-center pt-[50px] bg-[#F8F8F8]">
          <img
            className="m-auto"
            src="https://tpc.googlesyndication.com/simgad/11914853444884598749"
            alt=""
          />
        </div>
      </div>
      <div className="bg-[url('https://ychef.files.bbci.co.uk/1200x675/p08h02kk.jpg')] w-100%  bg-no-repeat bg-cover my-6 relative z-10 after:z-[-1] after:absolute after:h-full after:w-full after:bg-[#1116] after:top-0 after:left-0 py-10 ">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-[40px] text-white uppercase font-semibold ">
                Reel
              </h1>
              <h4 className="text-white leading-none mt-{15px} text-[20px]">
                The most amazing videos from the BBC
              </h4>
            </div>
            <Link
              to="/"
              className="rounded-[50px] text-white text-2xl border border-solid border-white w-[177px] flex justify-between items-center px-4 "
            >
              {" "}
              Visit Reel <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-3 gap-4 mt-4 ">
          <Card3 />
          <Card3 />
          <Card3 />
        </div>
      </div>
      <div className="mt-6 w-11/12 mx-auto container">
        <NewsBox2 />
      </div>
      <div className="mt-6 bg-[#F6F6F6]">
        <EditorsPick />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
