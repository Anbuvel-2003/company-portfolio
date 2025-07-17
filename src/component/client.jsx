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
     
    </>
  );
}
export default Client_section;
