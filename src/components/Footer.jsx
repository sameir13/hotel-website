import Link from "next/link";
import React from "react";

const Footer = () => {
  const footerlinks = {
    linkSecOne: [
      {
        label: "About us",
        link: "/about-us",
      },
      {
        label: "Menu",
        link: "/menu",
      },
      {
        label: "Contact us",
        link: "/contact",
      },
      {
        label: "Opening-Hours",
        link: "/opening-hours",
      },
    ],
  };

  return (
    <>
      <div>
        <footer className=" grid grid-cols-1 md:grid-cols-3 gap-8 p-[30px] bg-[#492F2F] text-white ">
          <div className="">
            <h2 className="  text-lg  md:text-2xl font-extrabold mb-4">
              Supreme Home
            </h2>
            <p className=" w-full  md:max-w-[300px]">
              Let us help you yield your true The Tasty House. To configure and
              discover Supreme House strategy get in touch!
            </p>
          </div>
          <div className="">
            <span className="  text-lg  md:text-xl font-bold mb-2 block md:text-center">
              Explore
            </span>
            <div className=" flex flex-col gap-1 md:items-center ">
              {footerlinks.linkSecOne?.map((v, i) => (
                <Link href={v.link} key={i}>
                  {v.label}
                </Link>
              ))}
            </div>
          </div>
          <div className=" flex flex-col md:items-center ">
            <h2 className="  text-lg  md:text-xl font-bold mb-2 block md:text-center">
              Find us
            </h2>
            <span>Fast Food Restaurent</span>
            <span>Brandford Margarete Street</span>
            <span>01416111708</span>
            <span>Supreme Home</span>
            <Link href={"mailto:info@educal.com"} className=" text-gray-400">
              clearbuisnessbyadrian@gmail.com
            </Link>
          </div>
        </footer>
        <div className=" bg-black flex items-center justify-center px-[15px] py-3">
          <span className="text-white text-sm text-center">
            Copyright © 2024 Supreme Restaurent - All Rights Reserved.
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
