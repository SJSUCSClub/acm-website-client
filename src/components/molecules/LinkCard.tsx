import React from "react";
import { Link } from "@tanstack/react-router";

interface ILinkCardProps {
  path: string;
  pathName: string;
}

const LinkCard = ({ path, pathName }: ILinkCardProps) => {
  return (
    <Link
      to={path}
      style={{ textDecoration: "none", color: "#196096" }}
      className="text-sm font-semibold"
    >
      <div
        className={`px-4 py-2 no-underline hover:bg-[#eabc4e] transition duration-200 rounded-md`}
      >
        {pathName}
      </div>
    </Link>
  );
};

export default LinkCard;
