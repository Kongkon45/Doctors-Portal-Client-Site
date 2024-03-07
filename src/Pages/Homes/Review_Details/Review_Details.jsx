import React from "react";

const Review_Details = ({ review }) => {
  return (
    <div>
      <div className="border shadow-lg py-10 px-8 rounded-lg">
        <p className="text-justify">{review.desc}</p>
        <div className="flex justify-start items-center gap-8 mt-6">
          <div>
            <img className="w-12 h-12 ml-4" src={review.image} alt="" />
          </div>
          <div>
            <h3 className="text-[#1DC9C3] font-bold text-md">{review.name}</h3>
            <h5 className="text-[#3a4256] opacity-50 text-sm">{review.title}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review_Details;
