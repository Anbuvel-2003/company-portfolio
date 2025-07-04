import React from "react";
import img1 from "../assets/Client-img-1.png";
import img2 from "../assets/Client-img-2.png";
import img3 from "../assets/Client-img-3.png";
import img4 from "../assets/Client-img-4.png";
import img5 from "../assets/Client-img-5.png";
import img6 from "../assets/Client-img-6.png";
import img7 from "../assets/Portfolio-img1.jpg";
import img8 from "../assets/client2.jpg";
import img9 from "../assets/client3.jpg";
import img10 from "../assets/client1.jpg";

function Client_section() {
  return (
    <>
      <div className="flex">
        <div className="lg:w-1/4 lg:h-[95vh]"></div>
        <div className="  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  sm:!pl-15 !pl-15  ">
          {[
            { url: img10, text: "Idea" },
            { url: img8, text: "Convert" },
            { url: img9, text: "Product" },
          ].map((imgSrc, idx) => (
            <div className="bg-[#efefef] hover:opacity-75 lg:h-[80%] relative group cursor-pointer" >
              <img
                key={idx}
                src={imgSrc?.url}
                alt={`client-${idx}`}
                className="w-full h-full object-contain sm:object-fill transition-transform duration-300 transform group-hover:scale-80  group-hover:object-cover"
              />
              <div className="absolute bottom-6 left-6.5">
                <h3
                  className="text-4xl font-syne text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r  from-purple-500 to-sky-400 group-hover:from-indigo-500 group-hover:to-cyan-400  cursor-pointer
                " 
                >
                  {imgSrc?.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full lg:h-[50vh] bg-white lg:flex md:grid sm:!mt-10 md:!mt-10 !mt-10">
        <div className="lg:w-1/2 bg-white h-full sm:place-self-center content-center !gap-2 grid lg:justify-center md:!pl-20 sm:!pl-15 !pl-20 ">
          <h4
            className="text-[#949494] text-1xl uppercase"
            data-aos="fade-up"
            data-aos-duration="5000"
          >
            partners
          </h4>
          <h4
            className="text-black text-5xl font-sans font-semibold "
            data-aos="fade-up"
            data-aos-duration="4000"
          >
            Trusted and <br /> Supported by <br /> Many
          </h4>
          <h4 data-aos="fade-up" data-aos-duration="5000">
            Empowered by trust and anchored in excellence, <br/> our expert-driven team is unwaveringly reliable <br/>committed to delivering your success and  consistently.
          </h4>
          {/* <div
            className=" border hover:border-none w-[130px] h-[40px] justify-items-center content-center hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400   cursor-pointer group"
            data-aos="fade-up"
            data-aos-duration="6000"
          >
            <h2 className="uppercase text-black text-[16px] font-sans group-hover:text-white">
              View More
            </h2>
          </div> */}
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
