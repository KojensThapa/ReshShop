import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Product/genderCollectionSection";
import NewArrivalSection from "../Components/Product/NewArrivalSection";
import ProductDetails from "../Components/Product/ProductDetails";

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivalSection />
      {/* Best seller section */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
    </div>
  );
};

export default Home;
