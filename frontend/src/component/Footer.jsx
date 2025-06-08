import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <div className="text-3xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            GOODLOOK
          </div>
          <p className="w-full md:w-2/3 text-gray-600">
            We are the best sellers in clothes across the island with convenient
            delivery facilities — your trusted clothing partner. Our wide
            collection features the latest trends, premium quality, and
            affordable styles for every occasion. From casual wear to party
            outfits, we’ve got something for everyone. Experience seamless
            shopping, fast delivery, and excellent customer service with us.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">Get in Touch</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>0764769658</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ goodlook.com - All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
