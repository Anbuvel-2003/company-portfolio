import React from "react";
import img1 from "../assets/Rev-slider-img-3.png";
import img2 from "../assets/Rev-slider-img-2.png";

function Intro() {
  const main = [
    {
      t1: "modern technologies",
      p1: "new generation of",
      p2: "technology and",
      p3: "design",
      url: img2,
    },
    {
      t1: "cutting edge creation",
      p1: "Software & tech",
      p2: "Development for the",
      p3: "Future",
      url: img1,
    },
  ];
  return (
    <section className="inset-3 bg-gradient-to-tr  via-white to-blue-100 w-full h-full">
      <div className="relative">
        <div className=" lg:absolute w-1/2 lg:h-[70vh] md:h-[70vh] h-[45vh] place-self-center content-center lg:top-70 lg:left-70 bg-transparent z-1">
          <div className="!gap-10">
            <h5 className="lg:text-[14px]  uppercase text-[#a4a5a6]">
              modern technologies
            </h5>
            <h2 className="lg:text-8xl md:text-6xl sm:text-4xl capitalize text-black font-semibold">
              new generation of
            </h2>
            <h2 className="lg:text-8xl md:text-6xl sm:text-4xl capitalize text-black font-semibold">
              technology and
            </h2>
            <h2 className="lg:text-8xl md:text-6xl sm:text-4xl capitalize text-black font-semibold">
              design
            </h2>
            <div className="flex !gap-5 !mt-10">
              {/* <div className="w-[180px] h-[45px] bg-red-100 text-center place-content-center group cursor-pointer
              bg-gradient-to-r from-purple-500 to-sky-400  hover:bg-white
              ">
                <span className="uppercase text-[13px] font-light  group-hover:text-black text-white transition-colors duration-200">
                  {" "}
                  apply now
                </span>
              </div> */}
              <div className="w-[180px] h-[45px] text-center place-content-center group cursor-pointer relative overflow-hidden hover:bg-white hover:border-1 hover:!border-gradient-to-r hover:from-purple-500 hover:to-sky-400">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-sky-400 z-0 transition-all duration-300 group-hover:opacity-0"></div>
                <div className="absolute inset-0  opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
                <span className="uppercase text-[14px] text-white relative z-10 group-hover:text-black transition-colors duration-300">
                  Apply Now
                </span>
              </div>
              <div className="w-[180px] h-[45px] text-center place-content-center group cursor-pointer relative overflow-hidden hover:bg-gradient-to-r hover:from-purple-500 hover:to-sky-400">
                <div className="absolute inset-0 border-1 border-gradient-to-r from-purple-500 to-sky-400 z-0 transition-all duration-300 group-hover:opacity-0"></div>
                <div className="absolute inset-0  opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
                <span className="uppercase text-[14px] text-black relative z-10 group-hover:text-white transition-colors duration-300">
                  view more
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 lg:absolute right-40 top-20 place-self-center  ">
          <img src={img2} alt={`client-`} className="" />
        </div>
      </div>
    </section>
  );
}

export default Intro;
