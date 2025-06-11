import React from "react";
import phoneImage from "../assets/image2.png";

const WhoWeAre = () => {
  return (
    <section>
      <div className="lg:inline-flex md:grid bg-white">
        <div className="ld:w-1/2 md:w-[70vw] content-center justify-items-end">
          <div className="lg:w-1/2  md:w-[60%] sm:w-[80%] w-[80%]">
            <div className="!mb-3">
              <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
                Who We Are
              </h3>
            </div>
            <div className="!mb-3">
              <h3 className="text-black text-5xl font-medium tracking-wide">
                Network <br /> Structure <br /> Design
              </h3>
            </div>
            <div className="sm-w-full">
              <p className="text-black ">
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus sapien nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                ullamcorper ultricies nisi. Nam eget dui. Maecenas nec odio et
                ante tincidunt tempus vitae
              </p>
            </div>
            <div className="!mt-3">
              <p className="text-black">
                Aliquam lorem ante, dapibus viverra quis feugiat a, tellus.
                Phasellus nisi vel augue. nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-items-end">
          <img
            src={phoneImage}
            alt="Phone UI"
            className="w-[100%] lg:h-[80vh] md:h-[60vh] sm:h-[40vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
