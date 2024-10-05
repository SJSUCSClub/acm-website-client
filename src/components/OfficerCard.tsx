import React from "react";
import LinkedIn from "/about/yellowLinkedIn.png";

interface IOfficerCardProps {
  photo: string;
  name: string;
  position: string;
  linkedin: string;
}

const OfficerCard = ({ photo, name, position, linkedin }: IOfficerCardProps) => {
  return (
    <div className="transition duration-100 ease-in-out hover:shadow-2xl justify-center items-center w-[19rem] h-[rem] border-[2px] gap-2px py-2 text-[16px] sm:text-sm rounded-xl shadow-lg mb-10">
      <img
        src={photo}
        alt="Officers"
        width={700}
        height={1440}
        className="object-cover items-center justify-center h-60 w-60 m-7 rounded-2xl drop-shadow-lg"
      />
      {position && (
        <h1 className="font-semibold gap-2 px-7 ">
          <span className="text-xs text-neutral">{position}</span>{" "}
        </h1>
      )}
      <h1 className="font-bold text-lg px-7">{name}</h1>

      <div className="flex justify-start items-center w-full px-7 py-5">
        <a
          className="flex items-center no-underline"
          href={linkedin}
          target="_blank"
        >
          <img src={LinkedIn} width={16} height={16} />
          <div className="text-sm font-semibold px-2">
            <span className="text-primary">LinkedIn</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default OfficerCard;
