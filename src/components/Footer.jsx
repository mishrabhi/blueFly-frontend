import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 md:px-20 py-8 border-b border-gray-700">
        <h3 className="text-xl font-semibold text-center md:text-left">
          Sign up for our Newsletter
        </h3>
        <p className="text-center md:text-left text-gray-400 mt-2">
          Get exclusive discounts and the latest product updates.
        </p>
        <div className="mt-4 flex flex-col md:flex-row items-center md:items-start">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full md:w-1/3 px-4 py-2 text-black rounded-md outline-none"
          />
          <button className="mt-2 md:mt-0 md:ml-2 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-500">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-4 md:px-20 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
        {/* Column 1 */}
        <div>
          <h4 className="font-semibold text-lg">Customer Service</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Returns & Exchanges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Shipping Info
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-semibold text-lg">Company</h4>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-semibold text-lg">Follow Us</h4>
          <div className="mt-3 flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-semibold text-lg">Need Help?</h4>
          <p className="mt-3 text-gray-400">Call us: +1 800 123 4567</p>
          <p className="mt-1 text-gray-400">Email: support@ecommerce.com</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-800 py-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} E-Commerce. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
