import React from 'react';
import { Link } from 'react-router-dom';

const Card2 = ({subTitle}) => {
    return (
        <div className="bg-[url('https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/10255/production/_124733166_hi075972066.jpg')] bg-no-repeat w-full h-full relative before:absolute before:h-full before:w-full before:bg-gradient-to-t before:from-[#111] before:to-[transparent] ">
        <div className="absolute bottom-[5%] left-[4%]">
        <h2 className={`text-white text-[22px]`}> Russian forces withdraw far from Kharkiv – mayor </h2>
        <div className="text-[#c1c1c1] border-l-[3px] border-[#c1c1c1] border-solid text-[15px] leading-[15px] pl-[7px] mt-[15px] uppercase">Europe</div>
        </div>
        <Link to="/" className="absolute top-0 left-0 w-full h-full"></Link>
      </div>
    );
};

export default Card2;