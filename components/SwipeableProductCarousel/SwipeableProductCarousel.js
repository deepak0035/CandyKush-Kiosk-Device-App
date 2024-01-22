import React, { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  FaChevronDown,
  FaChevronUp,
  FaChevronLeft,
  FaChevronCircleRight,
  FaChevronRight,
} from "react-icons/fa";

const CustomPrevArrow = ({ currentSlide, slideCount, onClick }) => (
  
  <div
    className={` py-6 relative cursor-pointer ${
      currentSlide === 0 ? "invisible" : ""
    }`}
    onClick={() => onClick()}
  >
    <FaChevronUp className="absolute text-4xl opacity-30 inset-0 mx-auto my-auto" />
  </div>
);

const CustomNextArrow = ({ currentSlide, slideCount, onClick }) => (
  <div
    className={` relative py-6 cursor-pointer ${
      currentSlide === slideCount - 1 ? "invisible" : ""
    }`}
    onClick={() => onClick()}
  >
    <FaChevronDown className="absolute text-4xl opacity-30 inset-0 mx-auto my-auto" />
  </div>
);

const SwipeableProductCarousel = () => {
  const images = [
    "/images/ProductPage/simpleSat.png",
    "/images/ProductPage/simpleInd.png",
    "/images/ProductPage/simpleHyd.png",
    // Add more image paths as needed
  ];

  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    fade: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <div className=" rounded-xl  mx-4 bg-yellow-300 bg-opacity-90">
      <h2 className="text-center py-2 px-4 font-bold text-3xl rounded-t-xl bg-white text-carpetMoss">
        TYPES
      </h2>
      <div className="">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div
              key={index}
              className="relative items-center slide-item h-full"
            >

              <div className="slide-content flex items-center justify-center h-full mx-2">
                <Image
                  src={image}
                  width={150}
                  height={150}
                  className="object-cover my-2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SwipeableProductCarousel;
