import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-around items-center flex-col  py-5  sm:gap-0 sm:flex-row  bg-black">
      <Image src={assets.logo_light} width={120} />
      <p className="text-sm text-white">
        All right reserved. copyright @blogger
      </p>
      <div className="flex">
        <Image src={assets.twitter_icon} alt="" width={40} />
        <Image src={assets.twitter_icon} alt="" width={40} />
        <Image src={assets.twitter_icon} alt="" width={40} />
      </div>
    </div>
  );
};

export default Footer;
