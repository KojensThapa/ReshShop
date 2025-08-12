import React from "react";
import homeImg from "../../assets/homeImg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={homeImg}
        className="w-full h-[250px] sm:h-[350px] md:w-full md:h-[500px] lg:h-[600px] pr-2 pl-2 object-cover"
        alt="Resh-shop"
      />
      {/* Content in the home page */}
      {/* inset-0 className help to absolute in like a cover page */}
      <div className="absolute inset-0 bg-opacity-5 flex justify-center items-center bg-black">
        <div className="p-6 text-white text-center">
          <h1 className="font-bold text-4xl md:text-6xl uppercase mb-4">
            Vacation <br /> Ready
          </h1>
          <p className="text-gray-700 tracking-tighter text-sm md:text-lg mb-6">
            Explore our stylish-outfit's with fast world wide shipping
          </p>
          <Link 
          to="#" 
          className="bg-white rounded-sm text-black font-bold px-8 py-3 hover:bg-custom-red hover:text-white"
          >Shop Now </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
