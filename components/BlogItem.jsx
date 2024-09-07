import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const BlogItem = ({ title, description, category, image }) => {
  return (
    <div className="max-w-[330px] sm:max-w-[300px] bg-white border border-black transition-all duration-[.3s] ease-linear hover:shadow-[-7px_7px_0px_#000]">
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="border-b border-black"
      />
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 font-medium tracking-tight text-gray-900 text-lg">
          {title}
        </h5>
        <p className="mb-3 tracking-tight text-sm text-gray-700">
          {description}
        </p>
        <div className="inline-flex items-center py-2 font-semibold text-center ">
          Read More <Image width={12} className="ml-2" src={assets.arrow} />
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
