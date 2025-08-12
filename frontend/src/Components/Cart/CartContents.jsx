import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
const CartContents = () => {
  const cartProduct = [
    {
      productId: 1,
      name: "T-shirt",
      size: "xl",
      color: "Red",
      quantity: 1,
      price: 2000,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 1,
      name: "Jeans",
      size: "xl",
      color: "white",
      quantity: 1,
      price: 2500,
      
      image: "https://picsum.photos/200?random=2",
    },
  ];
  return (
    <div>
      {cartProduct.map((product, index) => (
        <div
          key={index}
          className="py-4 border-b flex items-start justify-between"
        >
          {/* image section */}
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 mr-4 object-cover rounded"
            />
            {/* Description section */}
            <div className="">
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                Size: {product.size} | Color: {product.color}
              </p>
              {/* button section */}
              <div className="flex items-center mt-2">
                <button className="border rounded px-2 py-1 text-xl font-medium">-</button>
                <span className="mx-4">{product.quantity}</span>
                <button className="border rounded px-2 py-1 text-xl font-medium">+</button>
              </div>
            </div>
          </div>

          {/* price section */}
          <div className="">
            <p >NPr{product.price.toLocaleString()}</p>
            <button>
              <RiDeleteBin5Fill className="w-6 h-6 mt-2 text-red-600"/>
            </button>
          </div>

        </div>
      ))}
    </div>
  );
};

export default CartContents;
