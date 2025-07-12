import React, { useState } from "react";
import Meetourclient from "../../../component/meetourclient";
import software1 from "../../../assets/mobile1.jpg";
import software2 from "../../../assets/mobile2.jpg";
import software3 from "../../../assets/mobile3.jpg";
import software4 from "../../../assets/mobile4.jpg";
import { Flex, Progress, Card } from "antd";
import mobilebanner from "../../../assets/mobilebanner.png";
import mobiletech1 from "../../../assets/mobiletech1.png";
import mobiletech2 from "../../../assets/mobiletech2.png";
import mobiletech3 from "../../../assets/mobiletech3.png";
import Step from "../../../component/stepfun";

function Mobile_App() {
  const conicColors = {
    "0%": "#b9e6fe",
    "50%": "#ccdfff",
    "100%": "#e7d5ff",
  };
  const data = [
    {
      id: 1,
      title: "Experience",
      paragraph:
        "We design seamless mobile interfaces that prioritize usability and engagement. Every screen is crafted for clarity, responsiveness, and a smooth user journey.",
      points: [
        {
          id: 1,
          data: "Intuitive Navigation Flow.",
        },
        {
          id: 2,
          data: "Clean UI Components.",
        },
        {
          id: 3,
          data: "Mobile-Centric Aesthetics.",
        },
        {
          id: 4,
          data: "Consistent Brand Styling.",
        },
      ],
    },
    {
      id: 2,
      title: "Platform",
      paragraph:
        "We develop apps that work flawlessly across Android and iOS. Enjoy native performance with unified codebases using the latest frameworks.",
      points: [
        {
          id: 1,
          data: "Android & iOS Support",
        },
        {
          id: 2,
          data: "React Native",
        },
        {
          id: 3,
          data: "Shared Code Logic",
        },
        {
          id: 4,
          data: "Native-Like Experience.",
        },
      ],
    },
    {
      id: 3,
      title: "Functionality",
      paragraph:
        "Our apps are engineered for speed, reliability, and efficiency. We ensure robust performance even under high user loads.",
      points: [
        {
          id: 1,
          data: "Optimized App Speed.",
        },
        {
          id: 2,
          data: "Low Resource Usage.",
        },
        {
          id: 3,
          data: "Smooth Transitions & Animations.",
        },
        {
          id: 4,
          data: "Crash-Free Stability.",
        },
      ],
    },
  ];
  const [selecteditem, setselecteditem] = useState(data[0]);
  const { Meta } = Card;
  return (
    <section className="">
      <div className="!mt-15">
        <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
          <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl text-center ">
            Mobile App Development
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid  sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-1/2 w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={mobilebanner}
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
          <h3 className="text-[35px] font-syne text-[#1A1A2E] text-center !my-10">
            Technologies used
          </h3>
          <div className="bg-[#F8F4FF] !py-10 !px-5"></div>
        </div>
      </div>
      <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10 ">
        <h3 className="text-[35px] font-syne text-[#1A1A2E] text-center">
          End-to-End Mobile App Development
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:!gap-30 md:!gap-20 !gap-10 !mt-10">
          <div className="shadow-2xl !p-10 rounded-[20px]">
            <img src={mobiletech1} alt="" className="!mt-10" />
            <h2 className="!mt-5 text-[20px] font-syne text-[#AD46FF]">
              High-Performance Android Apps
            </h2>
            <h4 className="!mt-5 text-[20px] font-syne text-black">
              Native Android apps built for speed, scale, and high performance.
            </h4>
          </div>
          <div className="shadow-2xl !p-10 rounded-[20px]">
            <img src={mobiletech2} alt="" className="!mt-10" />
            <h2 className="!mt-5 text-[20px] font-syne text-[#AD46FF]">
              iOS Apps That Feel Premium
            </h2>
            <h4 className="!mt-5 text-[20px] font-syne text-black">
              Premium iPhone & iPad apps designed for smooth Apple experiences.
            </h4>
          </div>
          <div className="shadow-2xl !p-10 rounded-[20px]">
            <img src={mobiletech3} alt="" className="!mt-10" />
            <h2 className="!mt-5 text-[20px] font-syne text-[#AD46FF]">
              Secure, Scalable Backends
            </h2>
            <h4 className="!mt-5 text-[20px] font-syne text-black">
              Scalable, secure backends with custom REST or GraphQL APIs.
            </h4>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F4FF] lg:!p-20 md:!p-20 sm:!p-10 !p-10">
        <h3 className="text-[35px] font-syne text-[#1A1A2E] text-center">
          Our process
        </h3>
        <Step />
      </div>
    </section>
  );
}

export default Mobile_App;
