import React, { useState } from "react";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="flex flex-col justify-center items-center"
      >
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                            h-1 w-9 rounded-sm ${
                              isOpen
                                ? "rotate-45 translate-y-2"
                                : "-translate-y-0.5"
                            }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                            h-1 w-9 rounded-sm my-1 ${
                              isOpen ? "opacity-0" : "opacity-100"
                            }`}
        ></span>
        <span
          className={`bg-black block transition-all duration-300 ease-out 
                            h-1 w-9 rounded-sm ${
                              isOpen
                                ? "-rotate-45 -translate-y-2"
                                : "translate-y-0.5"
                            }`}
        ></span>
      </button>
      <div>About Us Events</div>
    </div>
  );
};
export default MobileMenu;
