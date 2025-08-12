import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2"
import { RxCross2 } from "react-icons/rx";
import SearchBar from "./SearchBar";
import CardDrawer from "../Layout/CardDrawer";

const Navbar = () => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false)

  const toggleCardDrawer = () => {
    setDrawerOpen(!drawerOpen);
  }

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  }

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left-logo section */}
        <div className="">
            <Link to="/" className="text-2xl  font-bold">
                Resh-Shop
            </Link>
        </div>

        {/* Center Navigation Link */}
        <div className="hidden md:flex space-x-6">
            <Link to='#' className="text-gray-700 hover:text-black hover:underline text-sm font-medium uppercase">Men</Link>
            <Link to='#' className="text-gray-700 hover:text-black hover:underline text-sm font-medium uppercase">Women</Link>
            <Link to='#' className="text-gray-700 hover:text-black hover:underline text-sm font-medium uppercase">Top Wear</Link>
            <Link to='#' className="text-gray-700 hover:text-black hover:underline text-sm font-medium uppercase">Buttom Wear</Link>
        </div>

        {/* right-side section */}
        <div className="flex items-center space-x-4">
            <Link to="/profile" className="hover:text-black">
                <HiOutlineUser className="h-6 w-6 text-gray-700" />
            </Link>

            <button onClick={toggleCardDrawer} className="relative hover:text-black">
               <MdOutlineShoppingCart className='text-gray-700 h-6 w-6' />
               <span className="absolute -top-3 bg-custom-red text-white text-xs rounded-full px-2 py-0.5">4</span>
            </button>

            {/* Search section do later */}
            <div className="overflow-hidden">
                <SearchBar />
            </div>
            {/* For mobile responsive ok */}
            <button onClick={toggleNavDrawer} className="md:hidden">
                <HiBars3 className="w-6 h-6 text-gray-700"/>
            </button>
        </div>
      </nav>
      <CardDrawer drawerOpen={drawerOpen} toggleCardDrawer={toggleCardDrawer} />

      {/* mobile navigation */}
      <div className={`fixed p-4 top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full  bg-white shadow-lg 
        transform transition-transform duration-300 z-50 
        ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-end">
          <button onClick={toggleNavDrawer}><RxCross2 className="w-6 h-6 text-gray-600"/></button>
        </div>

        <div>
          <h3 className="mb-4">Menu</h3>
          <nav className="space-y-4">
            <Link 
            to="#" 
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-black hover:underline">Men</Link>
            <Link 
            to="#" 
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-black hover:underline">Women</Link>
            <Link 
            to="#" 
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-black hover:underline">Top-Wear</Link>
            <Link 
            to="#" 
            onClick={toggleNavDrawer}
            className="block text-gray-600 hover:text-black hover:underline">Bottom-Wear</Link>
          </nav>

        </div>

      </div>
    </>
  ); 
};

export default Navbar;
