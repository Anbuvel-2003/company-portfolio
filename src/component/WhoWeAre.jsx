import React from "react";
import phoneImage from "../assets/image2.png";

const WhoWeAre = () => {
  return (
    <section className="relative h-screen flex items-center">
      <div className="container mx-auto px-4 align-middle">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:pr-12 text-center">
            <div className="space-y-2 text-center ">
              <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
                Who We Are
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight relative text-black mb-6">
            Network <br />
            Infrastructure{" "} 
            <span className="relative inline-block">
               Design
            </span>
          </h2>
            </div>
            
            <div className="space-y-2 text-gray-600 text-center justify-center">
              <p>
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus sapien nulla ut metus varius laoreet. Quisque rutrum. Aenean
                imperdiet. Etiam ultricies nisi vel augue.
              </p>
              <p>
                Aliquam lorem ante, dapibus viverra quis feugiat a, tellus. Phasellus
                nisi vel augue. Nulla ut metus varius laoreet.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center mt-10 md:mt-0">
            <div className="relative w-64 md:w-80">
              <img
                src={phoneImage}
                alt="Phone UI"
                className="w-full object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




export default WhoWeAre;



