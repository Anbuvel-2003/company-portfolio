import React, { useState } from "react";
import Meetourclient from "../../../component/meetourclient";
import software1 from "../../../assets/mobile1.jpg";
import software2 from "../../../assets/mobile2.jpg";
import software3 from "../../../assets/mobile3.jpg";
import software4 from "../../../assets/mobile4.jpg";
import { Flex, Progress, Card } from "antd";
import webbanner1 from "../../../assets/webbanner1.png";
import web1 from "../../../assets/web1.png";
import web2 from "../../../assets/web2.png";
import web3 from "../../../assets/web3.png";
import web4 from "../../../assets/web4.png";
import web5 from "../../../assets/web5.png";
import web6 from "../../../assets/web6.png";
import web01 from "../../../assets/web01.png";
import figma from "../../../assets/figma.svg";
import js from "../../../assets/js.svg";
import metaai from "../../../assets/metaai.svg";
import vscode from "../../../assets/vscode.svg";
import mongodb from "../../../assets/mongodb.svg";
import chatgpt from "../../../assets/openai.svg";
import nodejs from "../../../assets/nodejs.svg";
import android from "../../../assets/android.svg";
import analytics from "../../../assets/analytics.svg";

function Web_Page() {
  const webdata = [
    {
      id: 1,
      image: web1,
      t1: "Web Portals",
      data: [
        {
          id: 1,
          value: "Self-service Portal",
        },
        {
          id: 2,
          value: "Customer Portals",
        },
        {
          id: 3,
          value: "Employee Portals",
        },
        {
          id: 4,
          value: "Insurance Portals",
        },
        {
          id: 5,
          value: "Investor Portals ",
        },
        {
          id: 6,
          value: "Community Portals",
        },
        {
          id: 7,
          value: "E-Learning Portals",
        },
        {
          id: 8,
          value: "Patient Portals",
        },
      ],
    },
    {
      id: 2,
      image: web2,
      t1: "Web Apps",
      data: [
        {
          id: 1,
          value: "task management systems",
        },
        {
          id: 2,
          value: "CRM",
        },
        {
          id: 3,
          value: "Financial Management Systems",
        },
        {
          id: 4,
          value: "Document Management Systems",
        },
        {
          id: 5,
          value: "Learning Management Systems ",
        },
        {
          id: 6,
          value: "Knowledge Management Systems",
        },
        {
          id: 7,
          value: "Collabration Software",
        },
        {
          id: 8,
          value: "Custom Web Apps",
        },
      ],
    },
    {
      id: 3,
      image: web3,
      t1: "Customer Apps",
      data: [
        {
          id: 1,
          value: "Customer Service Apps",
        },
        {
          id: 2,
          value: "E-commerce web apps",
        },
        {
          id: 3,
          value: "Advertising signage apps",
        },
        {
          id: 4,
          value: "Mobile Banking apps",
        },
        {
          id: 5,
          value: "Payment apps",
        },
        {
          id: 6,
          value: "Lending Apps",
        },
        {
          id: 7,
          value: "Insurance Apps",
        },
        {
          id: 8,
          value: "Digital Wallets",
        },
      ],
    },
    {
      id: 4,
      image: web4,
      t1: "Management Apps",
      data: [
        {
          id: 1,
          value: "Inventory Management Software",
        },
        {
          id: 2,
          value: "Asset Management software",
        },
        {
          id: 3,
          value: "Fleet Management Software",
        },
        {
          id: 4,
          value: "Order Management Software",
        },
        {
          id: 5,
          value: "Warehouse management ",
        },
        {
          id: 6,
          value: "Vendor Management",
        },
        {
          id: 7,
          value: "Delivery management",
        },
      ],
    },
    {
      id: 5,
      image: web5,
      t1: "E-Commerce",
      data: [
        {
          id: 1,
          value: "B2B/B2C web Apps",
        },
        {
          id: 2,
          value: "Progressive Web Apps",
        },
        {
          id: 3,
          value: "Online Marketplaces",
        },
        {
          id: 4,
          value: "Headless Ecommerce",
        },
      ],
    },
    {
      id: 6,
      image: web6,
      t1: "Online Services",
      data: [
        {
          id: 1,
          value: "SaaS",
        },
        {
          id: 2,
          value: "IaaS",
        },
        {
          id: 3,
          value: "PaaS",
        },
        {
          id: 4,
          value: "XaaS",
        },
      ],
    },
    {
      id: 7,
      image: web6,
      t1: "Advanced apps",
      data: [
        {
          id: 1,
          value: "Internet Of Things",
        },
        {
          id: 2,
          value: "Computer Vision",
        },
        {
          id: 3,
          value: "Augmented Reality",
        },
        {
          id: 4,
          value: "Virtual Reality",
        },
        {
          id: 5,
          value: "Blockchain",
        },
        {
          id: 6,
          value: "Cloud computing",
        },
      ],
    },
    {
      id: 8,
      image: web6,
      t1: "Analytics apps",
      data: [
        {
          id: 1,
          value: "Business intelligence",
        },
        {
          id: 2,
          value: "big data solutions",
        },
        {
          id: 3,
          value: "image analysis & aVI",
        },
        {
          id: 4,
          value: "risk analytics",
        },
        {
          id: 5,
          value: "data science solutions",
        },
        {
          id: 6,
          value: "aI Machine Learning",
        },
      ],
    },
  ];
  const web1data = [
    {
      id: 1,
      data: "Safe start (via a feasibility study/PoC/MVP)",
      image: web01,
    },
    {
      id: 2,
      data: "Strong Security",
      image: web01,
    },
    {
      id: 3,
      data: "Releases every 2–3 weeks",
      image: web01,
    },
    {
      id: 4,
      data: "Guaranteed increase in productivity",
      image: web01,
    },
    {
      id: 5,
      data: "Apps that are easy to use, manage and evolve",
      image: web01,
    },
    {
      id: 6,
      data: "Responsive, intuitive and appealing UI, seamless UX.",
      image: web01,
    },
  ];

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
          <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl text-center ">
            Web app development
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid  sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-1/2 w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={webbanner1}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <h3 className="text-[20px] font-syne text-base/10 ">
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
      </div>
      <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10 ">
        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 !gap-10 ">
            {webdata?.map((item, index) => {
              return (
                <div key={index} className="!p-10 shadow-2xl rounded-[15px]">
                  <img alt="" src={item?.image} className="" />
                  <h3 className="lg:text-[30px] md:text-[25px] sm:text-[20px] text-[18px] text-[#AD46FF] font-syne capitalize">
                    {item?.t1}
                  </h3>
                  <div>
                    {item?.data?.map((data, index1) => {
                      return (
                        <div className="" key={index1}>
                          <h2 className="text-black lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px]  font-syne capitalize">
                            {data?.value}
                          </h2>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10 ">
        <h2 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center capitalize">
          benefits of Web App Development with{" "}
          <span className="text-[#AD46FF]">vineatz Technologies</span>
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 !gap-10 ">
          {web1data?.map((item, index) => {
            return (
              <div key={index} className="!p-10 place-items-center-safe  ">
                <img alt="" src={item?.image} className="!mb-4" />
                <h3 className="lg:text-[23px] md:text-[20px] sm:text-[18px] text-[16px] text-[#000] font-syne capitalize text-center">
                  {item?.data}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}

export default Web_Page;
