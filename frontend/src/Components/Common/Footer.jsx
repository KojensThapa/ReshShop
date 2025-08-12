import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaMeta } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";
import { RiTwitterXFill } from "react-icons/ri";
import { TbFilePhone } from "react-icons/tb";

const Footer = () => {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
        {/* first Div */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">News Letter</h3>
          <p className="text-gray-500 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            magni vel.
          </p>
          <p className="text-sm text-gray-600 font-medium">
            Sign up and get 10% off your first order.
          </p>

          {/* Newletter form */}
          <form className="flex mt-2">
            <input
              type="email"
              className="p-3 w-full text-sm border-t border-l border-b rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-500 transition-all"
              placeholder="Enter your email"
              required
            />
            <button className="bg-black text-white py-3 px-6 rounded-r-md hover:bg-custom-red hover:text-black transition-all">
              Subscribe
            </button>
          </form>
        </div>

        {/* Shop Links */}
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Mens top's Wear
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Women's top's Wear
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Mens bottom Wear
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Women's bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="">
          <h3 className="text-lg text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Contant Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="hover:text-gray-500 transition-colors hover:underline"
              >
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4"> Follow Us</h3>
          <div className="flex space-x-6 mb-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <FaMeta className="w-5 h-5 " />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <FaInstagram className="w-5 h-5 " />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXFill className="w-5 h-5 " />
            </a>
          </div>
          <div>
            <p className="text-gray-500 mb-2">Call Us</p>
            <p>
              <FiPhoneCall className="inline-block mr-2" />
              <span>+977-9829166643</span>
            </p>
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="container mx-auto mt-12 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-sm text-center tracking-tighter text-gray-500">@2025, All Right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
