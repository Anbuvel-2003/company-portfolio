import React from "react";
import img1 from "../assets/Client-img-1.png";
import img2 from "../assets/Client-img-2.png";
import img3 from "../assets/Client-img-3.png";
import img4 from "../assets/Client-img-4.png";
import img5 from "../assets/Client-img-5.png";
import img6 from "../assets/Client-img-6.png";
import img7 from "../assets/Portfolio-img1.jpg";
import img8 from "../assets/Portfolio-img2.jpg";
import img9 from "../assets/Portfolio-img3.jpg";
import img10 from "../assets/Portfolio-img4.jpg";

function Client_section() {
  return (
    <>
      <div className="flex">
        <div className="lg:w-1/10"></div>
        <div className="lg:w-full grid md:grid-cols-3 sm:grid-cols-2 gap-2 items-center justify-center sm:!pl-10 p-6">
          {[img10, img8, img9].map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`client-${idx}`}
              className="w-[700px] h-[600px] object-cover sm:object-fill"
            />
          ))}
        </div>
      </div>
      <div className="w-full lg:h-[450px] bg-white lg:flex md:grid">
        <div className="lg:w-1/2 bg-white h-full content-center !gap-2 grid lg:justify-center md:!pl-20 sm:!pl-15 !pl-20 ">
          <h4 className="text-[#949494] text-1xl uppercase">partners</h4>
          <h4 className="text-black text-5xl font-sans font-semibold ">
            Trusted and <br /> Supported by <br /> Many
          </h4>
          <h4>
            Ut enim ad minim veniam, quis nostrud exercitation <br />{" "}
            ullamconisi ut aliquip ex
          </h4>
          <div className=" border w-[130px] h-[40px] justify-items-center content-center hover:bg-blue-500">
            <h2 className="uppercase text-black text-[16px] font-sans hover:text-white">
              View More
            </h2>
          </div>
        </div>
        <div className="lg:w-1/3 grid md:grid-cols-3 sm:grid-cols-2 gap-2 items-center justify-center sm:!pl-10 p-6">
          {[img1, img2, img3, img4, img5, img6].map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`client-${idx}`}
              className="w-[250px] h-[190px] object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Client_section;
