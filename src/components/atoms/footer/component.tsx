import React from "react";
import Logo from "../../../Logo.png";

export const Footer: React.FC = () => (
  <footer className="flex flex-col md:flex-row gap-y-4 justify-between items-center bg-white text-gray-400 text-center bottom-0 max-w-full place-content-center p-5">
    <img src={Logo} alt="Logo" width={100} className="sm:h-auto" />

    <div className="text-center place-content-center max-w-[50%]">
      <p className="text-center text-sm">
        ROOM MQH 227, SAN JOSE STATE UNIVERSITY 1 WASHINGTON SQ, SAN JOSE, CA
        95192
      </p>
      <p className="text-center pt-2 text-sm">ACM-CS AT SJSU &#169; 2024</p>
    </div>

    <div className="flex gap-x-4">
      <a href="https://discord.gg/4cXE636ax4" target="blank">
        <img
          width={33}
          height={33}
          src="/icons/discord.svg"
          alt="discord image"
        />
      </a>
      <a href="https://www.instagram.com/sjsuacm/" target="blank">
        <img
          width={33}
          height={33}
          src="/icons/Instagram.svg"
          alt="instagram image"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/sjsu-computer-science-club/about/"
        target="blank"
      >
        <img
          width={33}
          height={33}
          src="/icons/logo2.svg"
          alt="linkedin image"
        />
      </a>
    </div>
  </footer>
);
