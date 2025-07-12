import React, { useState } from "react";
import Meetourclient from "../../../component/meetourclient";
import software1 from "../../../assets/softwareimg1.jpg";
import software2 from "../../../assets/custom1.jpg";
import software3 from "../../../assets/custom2.jpg";
import software4 from "../../../assets/custom3.jpg";
import { Flex, Progress, Card } from "antd";
import software5 from "../../../assets/servicebanner.png";
import software6 from "../../../assets/Rectangle 17.png";
import software7 from "../../../assets/Rectangle 18.png";
import software8 from "../../../assets/Rectangle 19.png";

function Software_Page() {
  return (
    <section>
      <div className="!mt-15">
        <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
          <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl text-center ">
            Custom Software Development
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid  sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-1/2 w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={software5}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <h3 className="text-[20px] text-base/10 ">
              Our UI/UX design services are crafted to elevate your digital
              presence with precision and creativity. We begin by understanding
              your goals and your audience, ensuring that every design decision
              aligns with your brand’s vision. Our approach integrates user
              research, wireframing, and prototyping to create intuitive and
              engaging interfaces.Our UI/UX design services are crafted to
              elevate your digital presence with precision and creativity. We
              begin by understanding your goals and your audience, ensuring{" "}
            </h3>
          </div>
        </div>
        <div>
          <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center !my-10">
            Technologies used
          </h3>
          <div className="bg-[#F8F4FF] !py-10 !px-5"></div>
        </div>
      </div>
      <div>
        <div>
          <div className="!py-10 place-items-center">
            <h1 className="w-30 h-1 bg-[#AD46Ff] !mb-10"></h1>
            <h1 className="!pb-3 lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-light">
              Way of building
            </h1>
            <h1 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne !pb-10">
              Great Software
            </h1>
          </div>
          <div className="flex flex-col lg:!pl-35 md:!p-20 !p-10 font-syne lg:!py-10 leading-10">
            <div className="flex lg:flex-row md:flex-col flex-col">
              <div className="self-center lg:w-full w-fit">
                <h1 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold ">
                  Build the right team to scale
                </h1>
                0128
                <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:!py-10 !py-5  ">
                  Finding the right talent is not easy. We help you find the
                  talent that suits your needs, follows your processes, and
                  sticks with you long term (not the case with freelancers)
                </p>
                <p className=" ">
                  Our <span className="text-[#AD46FF] ">delivery model</span>{" "}
                  helps you cut costs and deliver within budget.
                </p>
                <div className="!py-10 ">
                  <p className=" text-[#AD46FF] border-l-3 border-[#AD46FF] !pl-6 ">
                    "Simform is quick to identify larger problem with the
                    Software so we decided to expand our scope to build new
                    modules"
                  </p>
                </div>
              </div>
              <div className="w-full lg:!pl- md:!p-30">
                <img src={software6} alt="" />
              </div>
            </div>

            <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse">
              <div className="w-full lg:!py-10 md:!p-30 ">
                <img src={software7} alt="" />
              </div>
              <div className="self-center lg:w-full w-fit    ">
                <h1 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold ">
                  Build the right team to scale
                </h1>
                <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:!py-10 !py-5  ">
                  Finding the right talent is not easy. We help you find the
                  talent that suits your needs, follows your processes, and
                  sticks with you long term (not the case with freelancers)
                </p>
                <p className=" ">
                  Our <span className="text-[#AD46FF]">delivery model</span>{" "}
                  helps you cut costs and deliver within budget.
                </p>
                <div className="!py-10 ">
                  <p className=" text-[#AD46FF] border-r-3 border-[#AD46FF] ">
                    "Simform is quick to identify larger problem with the
                    Software so we decided to expand our scope to build new
                    modules"
                  </p>
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row md:flex-col flex-col">
              <div className="self-center lg:w-full w-fit ">
                <h1 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold ">
                  Build the right team to scale
                </h1>
                <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:!py-10 !py-5  ">
                  Finding the right talent is not easy. We help you find the
                  talent that suits your needs, follows your processes, and
                  sticks with you long term (not the case with freelancers)
                </p>
                <p className=" ">
                  Our <span className="text-[#AD46FF]">delivery model</span>{" "}
                  helps you cut costs and deliver within budget.
                </p>
                <div className="!py-10 ">
                  <p className=" !pl-6 text-[#AD46FF] border-l-3 border-[#AD46FF]">
                    "Simform is quick to identify larger problem with the
                    Software so we decided to expand our scope to build new
                    modules"
                  </p>
                </div>
              </div>
              <div className="w-full lg:!pl- md:!p-30">
                <img src={software8} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Software_Page;
