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
      <div className="flex lg:!mx-20 md:!mx-20 bg-white !mx-10">
        <div className="  grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 ">
          {[
            { url: img10, text: "Idea" },
            { url: img8, text: "Convert" },
            { url: img9, text: "Product" },
          ].map((imgSrc, idx) => (
            <div className="bg-[#efefef] hover:opacity-75 lg:h-[750px] relative group cursor-pointer" >
              <img
                key={idx}
                src={imgSrc?.url}
                alt={`client-${idx}`}
                className="w-full h-full object-contain sm:object-fill transition-transform duration-300 transform group-hover:scale-80  group-hover:object-cover"
              />
              <div className="absolute bottom-6 left-6.5">
                <h3
                  className="text-4xl font-syne text-white  group-hover:text-[#AF4BFF] cursor-pointer" 
                >
                  {imgSrc?.text}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:w-full sm:w-fit lg:h-[50vh] bg-white lg:flex md:grid sm:!mt-10 md:!mt-10 !mt-10  !mx-10">
        <div className="lg:w-1/2 bg-white h-full lg:place-self-center lg:content-center !gap-2 md:!p-10 grid lg:justify-center ">
          <h4
            className="text-[#949494] bg-white text-1xl uppercase"
            data-aos="fade-up"
            data-aos-duration="5000"
          >
            partners
          </h4>
          <h4
            className="text-black text-5xl font-syne  "
            data-aos="fade-up"
            data-aos-duration="4000"
          >
            Trusted and <br /> Supported by <br /> Many
          </h4>
          <h4 data-aos="fade-up" data-aos-duration="5000" className="font-syne !pt-10">
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
        <div className="lg:w-1/3 grid md:grid-cols-3 sm:grid-cols-2 md:!mx-10 gap-2 items-center justify-center">
          {[img1, img2, img3, img4, img5, img6].map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`client-${idx}`}
              className="w-[250px]  h-[190px] object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default Client_section;
