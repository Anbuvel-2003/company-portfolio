import React from "react";
import phoneImage from "../assets/image2.png";

const WhoWeAre = () => {
  return (
    // <section className="relative h-screen flex items-center">
    //   <div className="container mx-auto px-4 align-middle">
    //     <div className="grid grid-cols-1 md:grid-cols-2 items-center">
    //       {/* Left Content */}
    //       <div className="space-y-6 md:pr-12 text-center">
    //         <div className="space-y-2 text-center ">
    //           <p className="uppercase tracking-widest text-sm text-gray-500 mb-3">
    //             Who We Are
    //           </p>
    //           <h2 className="text-4xl sm:text-5xl font-bold leading-tight relative text-black mb-6">
    //         Network <br />
    //         Infrastructure{" "}
    //         <span className="relative inline-block">
    //            Design
    //         </span>
    //       </h2>
    //         </div>

    //         <div className="space-y-2 text-gray-600 text-center justify-center">
    //           <p>
    //             Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    //             Phasellus sapien nulla ut metus varius laoreet. Quisque rutrum. Aenean
    //             imperdiet. Etiam ultricies nisi vel augue.
    //           </p>
    //           <p>
    //             Aliquam lorem ante, dapibus viverra quis feugiat a, tellus. Phasellus
    //             nisi vel augue. Nulla ut metus varius laoreet.
    //           </p>
    //         </div>
    //       </div>

    //       {/* Right Image */}
    //       <div className="flex justify-center mt-10 md:mt-0">
    //         <div className="relative  md:w-80">
    //           <img
    //             src={phoneImage}
    //             alt="Phone UI"
    //             className="w-full object-contain drop-shadow-2xl bg-red-50"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
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
            className="w-[100%] h-[80vh] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
