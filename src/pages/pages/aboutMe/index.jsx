import React from "react";
import Aboutme1 from "../../../assets/About-me-img-1.jpg";
import Aboutme2 from "../../../assets/About-me-img-2.jpg";
import Meetourclient from "../../../component/meetourclient";

function AboutMe() {
  return (
    <div className="!pt-15">
      <div className="lg:!px-60 lg:!py-20 lg:flex">
        <div className="lg:w-[50%] place-self-center items-center">
          <div className="lg:w-1/2"></div>
          <div className="">
            <div className="!mb-3">
              <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
                Who We Are
              </h3>
            </div>
            <div>
              <h3 className="text-black text-5xl tracking-wide font-syne">
                Full service <br /> agency app <br /> development
              </h3>
            </div>
            <div>
              <p className="lg:w-[50%] font-normal text-black">
                Venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget
                eros. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla.
              </p>
            </div>
            <div className="flex !gap-10 !mt-5 cursor-default">
              <h2 className="uppercase font-syne text-black hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text ">
                Facebook
              </h2>
              <h2 className="uppercase font-syne text-black hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text ">
                Twitter
              </h2>
              <h2 className="uppercase font-syne text-black hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text ">
                Linkedin
              </h2>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%]">
          <img src={Aboutme1} alt="" className="" />
        </div>
      </div>
      <div className="lg:!px-60 lg:!py-20 lg:flex ">
        <div className="lg:w-[50%]">
          <img src={Aboutme2} alt="" className="" />
        </div>
        <div className="lg:w-[50%] place-self-center items-center lg:!pl-20">
          <div className="lg:w-1/2"></div>
          <div className="">
            <div className="!mb-3">
              <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
                Who We Are
              </h3>
            </div>
            <div>
              <h3 className="text-black text-5xl tracking-wide font-syne">
                The Modern <br /> E Banking <br /> encounter
              </h3>
            </div>
            <div className="!mt-5">
              <p className="lg:w-[50%] font-normal text-black">
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet etiam.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Meetourclient />
    </div>
  );
}

export default AboutMe;
