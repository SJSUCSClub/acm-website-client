import React from "react";
interface ILinkToButtonProps {
  url: string;
  text: string;
}

const LinkToButton = ({ url, text }: ILinkToButtonProps) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full shadow-md transition duration-200`}
      >
        {text}
      </a>
    </div>
  );
};

export default LinkToButton;
