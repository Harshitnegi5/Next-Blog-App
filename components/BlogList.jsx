import { blog_data } from "@/assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const Bloglist = () => {
  const [Menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            Menu === "All" && "bg-black text-white py-1 px-4 rounded-sm "
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            Menu === "Technology" && "bg-black text-white py-1 px-4 rounded-sm "
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            Menu === "Startup" && "bg-black text-white py-1 px-4 rounded-sm "
          }
        >
          Startup
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            Menu === "Lifestyle" && "bg-black text-white py-1 px-4 rounded-sm "
          }
        >
          Lifestyle
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-10 gap-y-10 mb-16 xl:mb-24 p-5 ">
        {blog_data
          .filter(item=> Menu === "All" ? true : item.category === Menu)
          .map((item, idx) => (
            <BlogItem
              key={idx}
              image={item.image}
              title={item.title}
              description={item.description}
              category={item.category}
            />
          ))}
      </div>
    </div>
  );
};

export default Bloglist;
