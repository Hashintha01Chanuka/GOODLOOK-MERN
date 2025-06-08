import React from "react";
import Title from "../component/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../component/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"About"} text2={"Us"} />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            We are the number one clothing shop in Kurunegala, offering a unique
            selection of the latest fashion trends and high-quality apparel for
            men, women, and youth. With a commitment to both style and comfort,
            we bring you fashion that fits every occasion — from casual wear to
            formal elegance.
          </p>

          <p>
            At <span className="font-bold">GOODLOOK</span>, we believe style
            should be accessible, comfortable, and affordable. Whether you're
            shopping in-store or online, we ensure a seamless experience with
            trendy collections, top-tier customer service, and reliable
            delivery. Our wide range of products is carefully curated to reflect
            modern tastes while honoring timeless classics.
          </p>

          <p>
            We work directly with trusted manufacturers and suppliers across
            India, Bangladesh, and Abu Dhabi to source premium fabrics and
            ensure quality in every stitch. Our passion is not just selling
            clothes — it's helping you express your confidence and identity
            through fashion.
          </p>

          <p>
            Join thousands of satisfied customers who trust GOODLOOK for
            quality, affordability, and style. From everyday essentials to
            standout pieces, we’ve got everything you need to upgrade your
            wardrobe with confidence.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"Why"} text2={"Choose us"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Clothes</b>
          <p className="text-gray-600">
            Our clothing collections feature premium quality fabrics imported
            from India, Bangladesh, and Abu Dhabi — combining global fashion
            with exceptional craftsmanship.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Service</b>
          <p className="text-gray-600">
            Whether you're visiting our store or shopping online, our friendly
            staff ensures you receive the best customer service — personalized,
            professional, and efficient.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            We thoroughly inspect every product before it reaches you, ensuring
            top quality, durability, and satisfaction. Your trust is our top
            priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
