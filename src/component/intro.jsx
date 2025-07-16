import React, { useEffect, useState } from "react";
import img1 from "../assets/Rev-slider-img-3.png";
import img2 from "../assets/Rev-slider-img-2.png";
// import img12 from "../assets/intro1.png";
import img12 from "../assets/intro2.png";
// import img12 from "../assets/intro1.png";
import img23 from "../assets/intro3.png";
import background from "../assets/bannerbackgroundimage.png";
import banner1 from "../assets/Appbanner.png";
import banner2 from "../assets/Webbanner.png";
import banner3 from "../assets/saasbanner.png";

function Intro() {
  const [animateKey, setAnimateKey] = useState(0);
  const main = [
    {
      t1: "Web technology",
      p1: "New generation of ",
      p2: "technology and",
      p3: "conceptualization design.",
      url: banner2,
      p: "New generation of immense technology and conceptualization design",
    },
    {
      t1: "App development",
      p1: "End to End development",
      p2: "with  design and",
      p3: " technical solutions",
      url: banner1,
      p: "End-to-end app development with design and growth solutions",
    },
    {
      t1: "SaaS Made Simple",
      p1: "Scalable SaaS solutions",
      p2: "tailored for modern",
      p3: " businesses",
      url: banner3,
      p: "Scalable SaaS solutions tailored for modern businesses",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [data, setData] = useState(main[currentIndex]);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % main.length);
       setAnimateKey((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    setData(main[currentIndex]);
    const timeout = setTimeout(() => setIsAnimating(false), 600); // match animation duration
    return () => clearTimeout(timeout);
  }, [currentIndex]);
  useEffect(() => {
    setData(main[currentIndex]);
     setAnimateKey((prev) => prev + 1);
  }, [currentIndex]);
  const handlePrev = () => {
    console.log("checking value");
    setCurrentIndex((prevIndex) => (prevIndex - 1 + main.length) % main.length);
    setAnimateKey((prev) => prev + 1);
    setIsAnimating(true);
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % main.length);
    setAnimateKey((prev) => prev + 1);
    setIsAnimating(true);
  };
  return (
    <section className="inset-3 min-h-screen w-full h-full">
      {/* <div className="relative">
        <div className=" lg:absolute w-[70vw] lg:h-[70vh] md:h-[50vh] h-[35vh] place-self-center content-center lg:top-50 lg:left-70 bg-transparent z-1">
          <div className="!gap-20" data-aos="fade-up" data-aos-delay="500">
            <h5 className="lg:text-[14px]  uppercase text-[#a4a5a6]">
              {data?.t1}
            </h5>
            <h2 className="lg:text-7xl md:text-4xl sm:text-4xl capitalize text-black font-syne tracking-wider">
              {data?.p1}
            </h2>
            <h2 className="lg:text-7xl md:text-4xl sm:text-4xl capitalize text-black font-syne tracking-wider">
              {data?.p2}
            </h2>
            <h2 className="lg:text-7xl md:text-4xl sm:text-4xl capitalize text-black font-syne tracking-wider">
              {data?.p3}
            </h2> */}
      {/* <h2 className="lg:text-7xl md:text-4xl sm:text-4xl capitalize text-black font-syne">
              {data?.p}
            </h2> */}
      {/* <div className="flex !gap-5 !mt-10"> */}
      {/* <div className="w-[180px] h-[45px] bg-red-100 text-center place-content-center group cursor-pointer
              bg-gradient-to-r from-purple-500 to-sky-400  hover:bg-white
              ">
                <span className="uppercase text-[13px] font-light  group-hover:text-black text-white transition-colors duration-200">
                  {" "}
                  apply now
                </span>
              </div> */}
      {/* <div
                className="w-[180px] h-[45px] text-center place-content-center group cursor-pointer relative overflow-hidden hover:bg-white hover:border-1 hover:!border-gradient-to-r hover:from-purple-500 hover:to-sky-400"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-sky-400 z-0 transition-all duration-300 group-hover:opacity-0"></div>
                <div className="absolute inset-0  opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
                <span className="uppercase text-[14px] text-white relative z-10 group-hover:text-black transition-colors duration-300">
                  Apply Now
                </span>
              </div>
              <div
                className="w-[180px] h-[45px] text-center place-content-center group cursor-pointer relative overflow-hidden hover:bg-gradient-to-r hover:from-purple-500 hover:to-sky-400"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="absolute inset-0 border-1 border-gradient-to-r from-purple-500 to-sky-400 z-0 transition-all duration-300 group-hover:opacity-0"></div>
                <div className="absolute inset-0  opacity-0 group-hover:!opacity-100 transition-opacity duration-300"></div>
                <span className="uppercase text-[14px] text-black relative z-10 group-hover:text-white transition-colors duration-300">
                  view more
                </span>
              </div> */}
      {/* </div> */}
      {/* </div>
        </div>
        <div
          className="w-1/2 lg:absolute right-20 top-30 place-self-center"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <div className="lg:w-[50vw] lg:h-[70vh]">
            <img src={data?.url} alt={`client-`} />
          </div>
          <div className="flex lg:!gap-30 md:!gap-20 sm:!gap-10 !gap-5 place-self-end">
            <div className="cursor-pointer" onClick={handlePrev}>
              <h3 className="text-black text-[14px]">PREV</h3>
            </div>
            <div className="cursor-pointer" onClick={handleNext}>
              <h3 className="text-black text-[14px] ">NEXT</h3>
            </div>
          </div>
        </div>
      </div> */}
      <div className="w-full h-full relative">
        <div className="absolute w-[90vw] lg:flex md:flex h-full lg:left-40 md:left-20  ">
          <div
            className={`lg:w-1/2 md:w-full w-full place-content-end h-[85%] lg:place-items-end md:place-items-end place-items-center`}
          >
            {" "}
            <div>
              <h5 className="lg:text-[14px]  uppercase text-[#a4a5a6]">
                {data?.t1}
              </h5>
              <h2 className="lg:text-[75px] md:text-4xl sm:text-4xl capitalize text-black font-syne tracking-wider">
                {data?.p1}
              </h2>
              <h2 className="lg:text-[75px] md:text-4xl sm:text-4xl capitalize text-black font-syne tracking-wider">
                {data?.p2}
              </h2>
              <h2 className="lg:text-[75px] md:text-4xl sm:text-4xl capitalize text-black font-syne tracking-wider">
                {data?.p3}
              </h2>{" "}
            </div>
          </div>
          <div
            className="lg:w-1/2 md:2/3 place-content-center"
            key={animateKey}
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <div>
              <img
                alt=""
                src={data?.url}
                className="animate-floatIn hidden md:block lg:block lg:w-[80%] lg:h-[100%] " 
              />
            </div>
          </div>
        </div>
        <img alt="" src={background} className="w-full h-full" />
        <div className="flex lg:!gap-30 md:!gap-20 sm:!gap-10 !gap-5 place-self-end lg:!pr-20 md:!pr-10 lg:!pt-5 lg:block md:block !hidden">
          <div className="cursor-pointer" onClick={handlePrev}>
            <h3 className="text-black text-[14px]">PREV</h3>
          </div>
          <div className="cursor-pointer" onClick={handleNext}>
            <h3 className="text-black text-[14px] ">NEXT</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
