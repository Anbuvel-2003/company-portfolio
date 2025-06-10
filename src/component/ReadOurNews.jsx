import React, { useState } from "react";
import cardImage from "../assets/image.png";
import cardImage1 from "../assets/image1.png";

// const features = [
//   { title: "Fast And Easy", link: "/portfolio-item/phones" },
//   { title: "Safe Online Service", link: "/portfolio-item/design" },
//   { title: "Modern Look", link: "/portfolio-item/gadgets" },
//   { title: "Reliable Usage", link: "/portfolio-item/headtech" },
// ];

const ReadNews = () => {
  const [activeImage, setActiveImage] = useState(cardImage);

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
        <div className="flex flex-col">
          <span className="uppercase tracking-widest text-sm text-gray-500 mb-3">
            How It Works
          </span>

          {/* Title with dot */}
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight relative text-black mb-6">
            Network <br />
            Infrastructure <br />
            <span className="relative inline-block">Design</span>
          </h2>

          {/* Gradient Link List */}
          <ul className="flex flex-col gap-6 !mt-10 border-gray-700 pl-6">
            {[
              "Fast And Easy",
              "Safe Online Service",
              "Modern Look",
              "Reliable Usage",
            ].map((text, i) => (
              <li
                key={i}
                className="text-xl font-semibold relative group"
                onMouseEnter={() =>
                  setActiveImage(i % 2 === 0 ? cardImage : cardImage1)
                }
                onMouseLeave={() => setActiveImage(cardImage)}
              >
                <span className="absolute left-0 top-0 h-0 w-0.5 bg-black group-hover:h-full transition-all duration-400"></span>
                <span className="!ml-8 text-transparent bg-clip-text text-3xl bg-gradient-to-r from-purple-500 to-sky-400 hover:from-indigo-500 hover:to-cyan-400 transition-all duration-300 cursor-pointer">
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
