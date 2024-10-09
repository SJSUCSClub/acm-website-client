import React from "react";
import { Btn } from "../../atoms/btn/component";
import GoogleLogo from "/icons/google-color.svg";

export const GoogleSignUpBtn: React.FC = () => {
  return (
    <div className="flex justify-center mt-4">
      <Btn
        variant="ghost"
        className="w-full md:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 "
      >
        <img src={GoogleLogo} alt="google logo" className="w-6 h-6" />
        Sign up with Google
      </Btn>
    </div>
  );
};
