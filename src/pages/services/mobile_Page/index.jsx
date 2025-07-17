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

import figma from "../../../assets/figma.svg";
import js from "../../../assets/js.svg";
import metaai from "../../../assets/metaai.svg";
import vscode from "../../../assets/vscode.svg";
import mongodb from "../../../assets/mongodb.svg";
import chatgpt from "../../../assets/openai.svg";
import nodejs from "../../../assets/nodejs.svg";
import android from "../../../assets/android.svg";
import analytics from "../../../assets/analytics.svg";

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

  const logos = [
    figma,
    js,
    metaai,
    vscode,
    mongodb,
    chatgpt,
    nodejs,
    android,
    analytics,
  ];
  return (
    <section className="">
      <div className="!mt-15">
        <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
          <h3 className="text-[#9F70FD] font-syne lg:text-[60px] md:text-[40px] text-[25px] text-center ">
            Mobile App Development
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid md:grid-cols-1 sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-1/2 w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={mobilebanner}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <h3 className="lg:text-[20px] md:text-[18px] text-[16px] text-[#788094] md:!pl-10 font-syne lg:leading-15  ">
              We design and develop high-performance mobile applications tailored to your business goals.
              Our process focuses on seamless user experiences, clean UI, and cross-platform functionality
              using frameworks like Flutter and React Native. From MVPs to enterprise-grade apps,
              we prioritize speed, security, and scalability. Features like real-time sync,
              and offline access come standard. With robust backend architecture and future-ready
              flexibility, our apps evolve with your business—delivering intuitive, reliable solutions
              across Android and iOS and user engagement.
            </h3>
          </div>
        </div>
        <div>
          <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center !my-10">
            Technologies used
          </h3>

          <div className="bg-[#F8F4FF] !py-10 !px-5">
            <div className="group w-full overflow-hidden ">
              <div className="flex lg:animate-none animate-loop-scroll sm:animate-loop-scroll space-x-16 min-w-max group-hover:paused ">
                {/* First image set */}
                {logos.map((img, i) => (
                  <img key={i} src={img} alt={`tech-${i}`} className="h-16 w-auto !px-10 object-contain lg:!mx-10" />
                ))}

                {/* Second (duplicate) image set – appears directly after the first */}
                {logos.map((img, i) => (
                  <img key={`dup-${i}`} src={img} alt={`tech-dup-${i}`} className="h-16 w-auto !px-10 object-contain lg:!mx-10" />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10 ">
          <h3 className="!pb-3 lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne font-lightfont-syne text-[#1A1A2E] text-center">
            End-to-End Mobile App Development
          </h3>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 lg:!gap-30 md:!gap-20 !gap-10 !mt-10">
            <div className="shadow-2xl !p-10 rounded-[20px]">
              <img src={mobiletech1} alt="" className="!mt-10" />
              <h2 className="!mt-5 lg:text-[20px] text-[16px] font-syne text-[#AD46FF]">
                High-Performance Android Apps
              </h2>
              <h4 className="!mt-5 lg:text-[20px] text-[16px] font-syne text-black">
                Native Android apps built for speed, scale, and high performance.
              </h4>
            </div>
            <div className="shadow-2xl !p-10 rounded-[20px]">
              <img src={mobiletech2} alt="" className="!mt-10" />
              <h2 className="!mt-5 lg:text-[20px] text-[16px] font-syne text-[#AD46FF]">
                iOS Apps That Feel Premium
              </h2>
              <br/>
              <h4 className="!mt-5 lg:text-[20px] text-[16px] font-syne text-black">
                Premium iPhone & iPad apps designed for smooth Apple experiences.
              </h4>
            </div>
            <div className="shadow-2xl !p-10 rounded-[20px]">
              <img src={mobiletech3} alt="" className="!mt-10" />
              <h2 className="!mt-5 lg:text-[20px] text-[16px] font-syne text-[#AD46FF]">
                Secure, Scalable Backends
              </h2>
              <h4 className="!mt-5 lg:text-[20px] text-[16px] font-syne text-black">
                Scalable, secure backends with custom REST or GraphQL APIs.
              </h4>
            </div>
          </div>
        </div>
        <div className="bg-[#F8F4FF] !p-10 lg:!mb-20 md:!mb-20 sm:!mb-10 !mb-10">
          <Step />
        </div>
      </div>
    </section>
  );
}

export default Mobile_App;
