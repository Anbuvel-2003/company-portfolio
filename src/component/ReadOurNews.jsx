import React, { useState } from "react";
import cardImage from "../assets/image.png";
import cardImage1 from "../assets/image1.png";
import card1 from "../assets/home1.jpg";
import card2 from "../assets/home2.jpg";
import card3 from "../assets/home3.jpg";
import card4 from "../assets/home4.jpg";

// const features = [
//   { title: "Fast And Easy", link: "/portfolio-item/phones" },
//   { title: "Safe Online Service", link: "/portfolio-item/design" },
//   { title: "Modern Look", link: "/portfolio-item/gadgets" },
//   { title: "Reliable Usage", link: "/portfolio-item/headtech" },
// ];

const ReadNews = () => {
  const [activeImage, setActiveImage] = useState(card1);

  return (
    <section className=" min-h-screen w-full flex items-center justify-center bg-white px-6 py-24 overflow-hidden font-sans">
      <div className=" lg:w-[65vw] w-[75vw] grid grid-cols-1 lg:grid-cols-2 gap-40 items-center">
        {/* Left Side - Image */}
        <div className="">
          <img
            src={activeImage}
            alt="Card and Phone"
            className="shadow-xl w-full lg:h-[80vh] object-cover transition-all duration-300"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="flex flex-col sm:place-self-center lg:pb-0 md:pb-0 !pb-10">
          <span className="uppercase tracking-widest text-sm text-gray-500 mb-3">
            How It Works
          </span>

          {/* Title with dot */}
          <h2 className="text-4xl sm:text-5xl font-syne leading-tight relative text-black mb-6">
            Network <br />
            Infrastructure <br />
            <span className="relative inline-block">Design</span>
          </h2>

          {/* Gradient Link List */}
          <ul className="flex flex-col gap-6 lg:!mt-10 md:!mt-10 border-gray-700 pl-6">
            {[
              "Strategy-First Approach",
              "Discovery & Ideation",
              "Tech-Driven Execution",
              "Agile Development Process",
              "Future-Ready Design",
            ].map((text, i) => (
              <li
                key={i}
                className="text-xl font-semibold relative group"
                onMouseEnter={() =>
                  setActiveImage(i == 0 ? card1  : i==1 ? card2 : i==2 ? card3 : i==3 ? card4 : cardImage1)
                }
                // onMouseLeave={() => setActiveImage(cardImage)}
              >
                {console.log("qqqq", i)}
                <span className="absolute  left-0 top-0 h-0 w-0.5 bg-black group-hover:h-full transition-all duration-400"></span>
                <span className="!ml-8 text-transparent bg-clip-text lg:text-3xl md:text-3xl text-[14px] bg-gradient-to-r from-purple-500 to-sky-400 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 cursor-pointer">
                  {text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
    // <section>

    // </section>
  );
};

export default ReadNews;
