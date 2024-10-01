import React from "react";

const TestimonialCard = ({ text, name, job }: any) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-6 pt-20 pb-20">
      <h2 className="italic text-1xl font-small mb-2">{text}</h2>
      <p className="text-gray-400 pt-5 font-bold">{name}</p>
      <p className="italic text-gray-500">{job}</p>
    </div>
  );
};

export default TestimonialCard;
