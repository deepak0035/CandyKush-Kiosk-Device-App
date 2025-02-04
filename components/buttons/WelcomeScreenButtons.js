import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { CiGlobe } from "react-icons/ci";

const BottomButtons = ({ onBuyClick, onSelectLanguagesClick }) => {
  return (
    <div className="grid grid-cols-6 h-full items-center justify-center py-2 px-2 gap-2">
      <div className="col-span-4 flex items-center justify-center">
          <Link href={'/products'} className="flex flex-col justify-center items-center px-4 py-1 line-clamp-3 rounded-lg bg-gradient-to-r from-carpetMoss to-carpetMoss via-green-500 text-white text-center h-24 w-72 md:h-24 md:w-96 font-semibold">
            <span className="text-lg">Click here to </span>
            <span className="text-2xl">BUY NOW!</span>
          </Link>
      </div>

      <div className="col-span-2 flex items-center justify-center ">
          <Link href={'/languages'} className="flex flex-col justify-center items-center px-4 py-1 border-solid border-2 border-carpetMoss line-clamp-3 rounded-lg text-carpetMoss text-center h-24 w-72 md:h-24 md:w-96 font-semibold">
            Select Languages
            <span className="mt-1">
              <CiGlobe className=" text-4xl md:text-3xl" />
            </span>
          </Link>
      </div>
    </div>
  );
};

BottomButtons.propTypes = {
  onBuyClick: PropTypes.func,
  onSelectLanguagesClick: PropTypes.func,
};

export default BottomButtons;
