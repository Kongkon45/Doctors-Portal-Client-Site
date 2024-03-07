import React from "react";

const Blog_Details = ({ blog }) => {
  return (
    <div className="border rounded-lg shadow-xl p-10">
      <div className="flex items-center gap-5">
        <div>
          <img className="w-12 h-12" src={blog.image} alt="" />
        </div>
        <div>
          <h5 className="text-md text-black font-bold mb-2">{blog.name}</h5>
          <p className="text-xs text-gray-400 font-semibold">{blog.date}</p>
        </div>
      </div>
        <h4 className="mt-4 text-xl font-semibold ">{blog.title}</h4>
        <p className="text-gray-400 text-sm mt-4">{blog.desc}</p>
    </div>
  );
};

export default Blog_Details;
