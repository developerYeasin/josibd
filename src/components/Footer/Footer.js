import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const data = [
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
    "home",
  ];
  const dataNew = [
    "Terms of Use",
    "Terms of Use",
    "Terms of Use",
    "Terms of Use",
    "Terms of Use",
    "Privacy Policy",
    "Accessibility Help",
    "Get Personalised Newsletters",
    "Advertise with us",
    "AdChoices / Do Not Sell My Info",
  ];
  return (
    <div className="bg-[#4c4c4c] pt-11 pb-5 ">
      <div className="container w-11/12 mx-auto">
        <h4 className="text-white text-2xl font-semibold ">Explore the BBC</h4>
      </div>
      <div className="container mx-auto ">
        <ul className="list-none flex flex-wrap mt-5 truncate ">
          {data.map((d) => (
            <li className="w-[16.6%] inline-block mt-[-5px] ">
              <Link
                to="/"
                className="capitalize text-[14px] text-white no-underline hover:underline border-r border-solid border-[#949494] inline-block leading-none w-full pt-3 pl-[23px] "
              >
                {d}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="container w-11/12 mx-auto mt-7 border-t border-[#949494] border-solid ">
        <ul className="list-none ">
          {dataNew.map((dn) => (
            <li className="mr-5 inline-block mt-4">
              <Link
                to="/"
                className="text-[14px] text-white no-underline hover:underline leading-none "
              >
                {dn}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-white">
          Copyright © 2022 BBC. The BBC is not responsible for the content of
          external sites.{" "}
          <Link to="/" className="no-underline hover:underline text-white">
            Read about our approach to external linking
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Footer;
