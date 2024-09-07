import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28 ">
      <div className="flex justify-between items-center ">
        <Image src={assets.logo}alt="logo" className="w-[70px] h-[70px] sm:w-auto" />
        <button className="flex justify-center items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black transition-all duration-[.3s] ease-in hover:shadow-[-7px_7px_0px_#000]">
          Get Started <Image src={assets.arrow} alt="arrow" />
        </button>
      </div>
      <div className=" text-center my-8">
        <h1 className="text-3xl sm:text-5xl font-semibold ">Latest Blogs</h1>
        <p className="mt-8 max-w-[740px] m-auto  text-sm font-medium sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ab
          vitae qui corrupti facere aperiam similique molestias aspernatur quasi
          dolor.
        </p>
        <form
          className="flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000]"
          action=""
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="pl-4 outline-none"
          />
          <button
            type="submit"
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
