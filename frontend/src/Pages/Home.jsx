import React from "react";
import Hero from "../Components/Layout/Hero";
import GenderCollectionSection from "../Components/Product/genderCollectionSection";
import NewArrivalSection from "../Components/Product/NewArrivalSection";
import ProductDetails from "../Components/Product/ProductDetails";
import ProductGrid from "../Components/Product/ProductGrid";

const placeholderProducts = [
  {
  _id: 1, 
  name: "Product 1", 
  price: 100,
  images: [{url:"https://picsum.photos/500/500?random=3"}]
},
{
  _id: 2, 
  name: "Product 2", 
  price: 200,
  images: [{url:"https://picsum.photos/500/500?random=4"}]
},
{
  _id: 3, 
  name: "Product 3", 
  price: 100,
  images: [{url:"https://picsum.photos/500/500?random=5"}]
},
{
  _id: 4, 
  name: "Product 4", 
  price: 800,
  images: [{url:"https://picsum.photos/500/500?random=6"}]
},
{
  _id: 5, 
  name: "Product 5", 
  price: 100,
  images: [{url:"https://picsum.photos/500/500?random=7"}]
},
{
  _id: 6, 
  name: "Product 6", 
  price: 200,
  images: [{url:"https://picsum.photos/500/500?random=8"}]
},
{
  _id: 7, 
  name: "Product 7", 
  price: 100,
  images: [{url:"https://picsum.photos/500/500?random=9"}]
},
{
  _id: 8, 
  name: "Product 8", 
  price: 800,
  images: [{url:"https://picsum.photos/500/500?random=10"}]
}
]

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivalSection />
      {/* Best seller section */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      {/* Top wear women section ok */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center">Top Wears for Women</h2>
        <ProductGrid products={placeholderProducts} />
      </div>
    </div>
  );
};

export default Home;
