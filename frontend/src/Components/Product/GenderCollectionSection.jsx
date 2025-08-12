import React from "react";
import girlIMg from "../../assets/girlImg.jpg";
import menIMg from "../../assets/menImg.avif";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col md:flex-row gap-10">
        {/* Women section */}
        <div className="relative flex-1">
          <img
            src={girlIMg}
            alt="Men's collection"
            className="w-full h-[400px] md:h-[600px]"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-80 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
        {/* Mens collection */}
        <div className="relative flex-1">
          <img
            src={menIMg}
            alt="girl collection"
            className="w-full h-[400px] md:h-[600px]"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-80 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Men Collection
            </h2>
            <Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenderCollectionSection;
