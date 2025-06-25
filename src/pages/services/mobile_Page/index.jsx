import React, { useState } from "react";
import Meetourclient from "../../../component/meetourclient";
import software1 from "../../../assets/softwareimg1.jpg";
import { Flex, Progress, Card } from "antd";

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
    <div className="!pt-15">
      <div className="place-self-center lg:!p-20 md:!p-20 !p-5" data-aos="zoom-in">
        <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl ">
          Mobile app development
        </h3>
      </div>
      <div className="lg:flex lg:gap-0 ">
        <div className="lg:w-1/2 w-full lg:!mb-0  !mb-10" data-aos="zoom-in">
          <img src={software1} alt="software1" className="" />
        </div>
        <div className="lg:w-1/2  lg:place-self-center !justify-items-center  md:!pl-40 sm:!pl-40 !pl-5 lg:!mb-0 !mb-5" data-aos="zoom-in">
          <div className="">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase ">
              Who We Are
            </h3>
            <h3 className="text-black lg:text-5xl md:text-4xl text-3xl tracking-wide font-syne ">
              Trusted <br />
              and Supported <br /> by Many
            </h3>
            <div className="lg:flex grid md:flex !gap-3 !mt-3  lg:!gap-10 md:!gap-10 border-b-1 border-[#57b8e0] lg:w-[100%] md:w-[70%] w-[50%] !mb-4">
              {data?.map((item, index) => {
                const isselected = item?.id == selecteditem?.id;
                return (
                  <div
                    key={index}
                    className={`lg:!py-3 md:!py-3 pr-10  ${isselected ? "border-b-1" : "border-0"
                      } border-[#000000]`}
                    onClick={() => {
                      setselecteditem(item);
                    }}
                  >
                    <p className="text-black lg:text-3xl md:text-3xl text-2xl tracking-wide font-syne cursor-pointer">
                      {item?.title}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="">
              <p className="lg:text-[20px] md:text-[18px] text-[16px] text-black !mb-4 font-sans lg:w-[90%] md:w-[70%] w-[60vw]">
                {selecteditem?.paragraph}
              </p>
              <ul>
                {selecteditem?.points &&
                  selecteditem.points?.map((item, index) => {
                    return (
                      <li
                        className="list-inside list-disc lg:text-[18px] md:text-[16px] text-[14px] font-sans"
                        key={index}
                      >
                        {item?.data}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:!mb-0 !mb-10 ">
          <div className="w-[60%]" data-aos="fade-right">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase !mb-3">
              Brands
            </h3>
            <h2 className="text-black lg:text-5xl md:text-4xl text-3xl font-medium -tracking-tighter font-syne ">
              Trusted <br /> and Supported <br /> by Many
            </h2>
            <div>
              <div className="!my-5 ">
                <h3 className="text-black lg:text-3xl md:text-3xl text-2xl  font-medium -tracking-tighter font-syne ">
                  Experience
                </h3>
                <Progress
                  percent={95}
                  status="active"
                  strokeColor={conicColors}
                />
              </div>
              <div className="!my-5 ">
                <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
                  Platform
                </h3>
                <Progress
                  percent={75}
                  status="active"
                  strokeColor={conicColors}
                />
              </div>
              <div className="!my-5 ">
                <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
                  Functionality
                </h3>
                <Progress
                  percent={83}
                  status="active"
                  strokeColor={conicColors}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full" data-aos="fade-left">
          <img src={software1} alt="software1" className="" />
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 w-full lg:mb-0 " data-aos="fade-right">
          <img src={software1} alt="software1" className="" />
        </div>
        <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 " data-aos="fade-left">
          <div className="w-[60%]">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
              Built for Your Business
            </h3>
            <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
              Smart <br /> Mobile <br /> Solutions
            </h2>
            <div className="">
              <p className="text-black text-[16px] font-normal">
                We create powerful mobile solutions tailored to your business goals. From MVPs to full-scale apps, our process ensures speed, performance, and visual appeal. We integrate advanced features like push notifications, geolocation, and real-time sync, delivering apps that are both intuitive and scalable.

              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 " data-aos="fade-right">
          <div className="w-[60%]">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
              Built for Your Business
            </h3>
            <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
              Reliable <br /> App <br /> Infrastructure
            </h2>
            <div className="">
              <p className="text-black text-[16px] font-normal">
                Security and backend strength power every app we build. We implement best practices for API integration, data encryption, and offline capabilities. Whether B2B or B2C, we ensure secure, scalable, and future-ready mobile ecosystems.

              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full " data-aos="fade-left">
          <img src={software1} alt="software1" className="" />
        </div>
      </div>
      {/* <div className="flex !my-20">
        <div className="w-full h-[50%] relative">
          <img
            src={
              "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-6-parallax-img.jpg"
            }
            alt="software2"
            className=""
          />
          <div className="bg-white absolute top-0 ">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase !mb-3">
              Brands
            </h3>
            <h2 className="text-black text-5xl font-medium -tracking-tighter font-syne ">
              Trusted <br /> and Supported <br /> by Many
            </h2>
          </div>
        </div>
      </div> */}
      <div className="relative w-full h-[800px]" data-aos="fade-up">
        <img
          src="https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-6-parallax-img.jpg"
          alt="software2"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center" data-aos="fade-up" data-aos-duration="3000">
          <div className="bg-transparent bg-opacity-80 !p-8 max-w-xl text-left">
            <h3 className="text-white text-[16px] tracking-wide uppercase mb-3">
              Brands
            </h3>
            <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-medium font-syne leading-tight">
              Trusted and <br /> Supported <br />
            </h2>
            <p className="text-white lg:text-[16px] md:text-[14px] text-[12px] font-normal">
              Custom software development is the process of building tailored
              software solutions designed specifically to meet the unique needs
              of a business or organization. Unlike off-the-shelf software,
              custom solutions are developed from the ground up to align with
              specific workflows, goals, and challenges, offering greater
              flexibility, scalability, and efficiency.
            </p>
            <div className="!mt-5">
              <div className="!px-5 !py-2 border-1 border-white w-fit group hover:bg-white">
                <span className="text-white font-syne text-[16px] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-400 group-hover:bg-clip-text">
                  View More
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="!my-20">
        <h3 className=" text-black text-5xl font-medium -tracking-tighter font-syne text-center ">
          Our Services
        </h3>
        <div className="!my-20">
          <div className="flex flex-wrap justify-center items-center lg:!px-80 md:!px-10">
            {service?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full flex justify-center"
                >
                  <div className="!mb-5">
                    <Card
                      hoverable
                      style={{ width: "80%" }}
                      cover={<img alt="example" src={item?.img} />}
                    >
                      <Meta
                        title={item?.title}
                        description={item?.description}
                        className="font-syne"
                      />
                      <div className="">
                        <div className="!p-2 place-self-end">
                          <a href={item?.path} className="">
                            <span className="text-[16px] capitalize">
                              Read more{" "}
                            </span>
                          </a>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div> */}
      <Meetourclient />
    </div>
  );
}

export default Mobile_App;
