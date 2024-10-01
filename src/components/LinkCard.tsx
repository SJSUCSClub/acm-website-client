import React from "react";
import Link from "react-router-dom";

const LinkCard = ({ path, pathName }: any) => {
  return (
    <a
      href={path}
      style={{ textDecoration: "none", color: "#196096" }}
      className="text-sm font-semibold"
    >
      <div
        className={`px-4 py-2 no-underline hover:bg-[#eabc4e] transition duration-200 rounded-md`}
      >
        {pathName}
      </div>
    </a>
  );
};

export default LinkCard;
