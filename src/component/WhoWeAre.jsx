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
              <h3 className="text-black text-5xl font-medium tracking-wide font-syne">
                Network <br /> Structure <br /> Design
              </h3>
            </div>
            <div className="sm-w-full">
              <p className="text-black">
                Web, Android, and iOS app development are our areas of expertise
                as a full-stack digital development business. We provide
                complete mobile solutions for the Android and iOS platforms,
                from conception to implementation. We have experience with both
                web design and development, fusing strong functionality with
                creative visuals to create quick, responsive, and captivating
                online experiences.
              </p>
            </div>
            <div className="!mt-3">
              <p className="text-black">
                We develop growth-oriented solutions that increase user
                engagement and brand value, propelled by a passion for
                technological excellence and creative design. We create
                user-friendly, high-performing products by utilizing
                cutting-edge design principles and next-generation technologies.
                Our primary goals are to maximize user experience and transform
                your concepts into impressive digital reality
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-items-end" data-aos="fade-up">
          <img
            src={phoneImage}
            alt="Phone UI"
            className="w-[90%] lg:h-[80vh] md:h-[60vh] sm:h-[40vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
