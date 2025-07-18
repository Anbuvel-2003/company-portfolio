import React, { useState } from "react";
import Meetourclient from "../../../component/meetourclient";
import software1 from "../../../assets/saasimage1.png";
import software2 from "../../../assets/saasimage2.png";
import software3 from "../../../assets/saasimage3.png";
import software4 from "../../../assets/Saas4.jpg";
import figma from "../../../assets/figma.svg";
import js from "../../../assets/js.svg";
import metaai from "../../../assets/metaai.svg";
import vscode from "../../../assets/vscode.svg";
import mongodb from "../../../assets/mongodb.svg";
import chatgpt from "../../../assets/openai.svg";
import nodejs from "../../../assets/nodejs.svg";
import android from "../../../assets/android.svg";
import analytics from "../../../assets/analytics.svg";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import icon4 from "../../../assets/icon4.png";
import icon5 from "../../../assets/icon5.png";
import icon6 from "../../../assets/icon6.png";
import icon7 from "../../../assets/icon7.png";
import icon8 from "../../../assets/icon8.png";
import icon9 from "../../../assets/icon10.png";

import { Flex, Progress, Card } from "antd";
import { h1, img } from "framer-motion/client";
import { map } from "leaflet";

function Saas_Page() {
  const conicColors = {
    "0%": "#b9e6fe",
    "50%": "#ccdfff",
    "100%": "#e7d5ff",
  };
  const data = [
    {
      id: 1,
      title: "Product",
      paragraph:
        "We design and develop scalable SaaS platforms with modular architecture. Our products are crafted for high performance and flexibility.",
      points: [
        {
          id: 1,
          data: "Component-Based Structure.",
        },
        {
          id: 2,
          data: "Clean Codebase Design.",
        },
        {
          id: 3,
          data: "Cloud Native Builds.",
        },
        {
          id: 4,
          data: "Modular Feature Sets.",
        },
      ],
    },
    {
      id: 2,
      title: "User Experience",
      paragraph:
        "From dashboards to settings panels, our SaaS interfaces are built for usability. We ensure intuitive navigation and seamless onboarding.",
      points: [
        {
          id: 1,
          data: "Easy User Onboarding.",
        },
        {
          id: 2,
          data: "Smart UI Flow.",
        },
        {
          id: 3,
          data: "Interactive Dashboards.",
        },
        {
          id: 4,
          data: "Role-Based Access.",
        },
      ],
    },
    {
      id: 3,
      title: "Security",
      paragraph:
        "Our SaaS solutions are built to grow with your users while protecting their data. Expect reliable, secure, and scalable environments.",
      points: [
        {
          id: 1,
          data: "Multi-Tenant Architecture.",
        },
        {
          id: 2,
          data: "User Data Protection.",
        },
        {
          id: 3,
          data: "Secure APIs & Tokens.",
        },
        {
          id: 4,
          data: "Load-Resilient Infrastructure.",
        },
      ],
    },
  ];
  const [selecteditem, setselecteditem] = useState(data[0]);
  const { Meta } = Card;

  const saas = [

    {
      id: 1,
      img: icon1,
      t1: "Saas Development consulting",
      data: "Unlock the full potential of SaaS with Vineatz. Our expert consultants guide you from ideation to execution—covering strategy, onboarding, development, and go-to-market planning to ensure a strong, scalable product launch.",
    },
    {
      id: 2,
      img: icon2,
      t1: "SaaS Application Platform Development",
      data: "Empower your business with custom SaaS platforms designed for flexibility, scalability, and efficiency. Our advanced development frameworks streamline operations, accelerate growth, and align with your unique business goals.",
    },
    {
      id: 3,
      img: icon3,
      t1: "SaaS Integration Platforms",
      data: "We simplify operations through custom APIs, third-party integrations, and secure payment gateways. Vineatz builds seamless, connected ecosystems to help your platform communicate effortlessly with external data and services.",
    },
    {
      id: 4,
      img: icon4,
      t1: "Tech Migration and Re-engineering",
      data: "Future-proof your SaaS product with Vineatz. We migrate legacy systems to modern stacks, refactor outdated code, and implement new features—ensuring performance, compatibility, and user satisfaction.",
    },
    {
      id: 5,
      img: icon5,
      t1: "SaaS Mobile App Development",
      data: "We develop high-performing SaaS mobile apps for iOS, Android, and cross-platform use. Whether starting from scratch or upgrading, we ensure seamless functionality, sleek interfaces, and native-like performance.",
    },
    {
      id: 6,
      img: icon6,
      t1: "SaaS App Design and Prototyping",
      data: "Bring ideas to life with design-first thinking. Vineatz creates interactive prototypes that validate concepts early, refine user flows, and ensure intuitive experiences—before writing a single line of code.",
    },
    {
      id: 7,
      img: icon8,
      t1: "Support and Maintenance",
      data: "Stay worry-free post-launch. Our dedicated team ensures your SaaS platform is updated, secure, and running smoothly 24/7—minimizing downtime and enhancing the user experience.",
    },
    {
      id: 8,
      img: icon9,
      t1: "Performance Optimization",
      data: "Vineatz guarantees lightning-fast SaaS experiences. We optimize load times, fine-tune performance, and ensure consistent reliability—delivering seamless digital journeys across every user touchpoint.",
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
    // <div className="!pt-15">
    //   <div className="place-self-center lg:!p-20 md:!p-20 !p-5">
    //     <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl " data-aos="zoom-in">
    //       Saas app development
    //     </h3>
    //   </div>
    //   <div className="lg:flex lg:gap-0 ">
    //     <div className="lg:w-1/2 w-full lg:!mb-0  !mb-10" data-aos="zoom-in">
    //       <img src={software1} alt="software1" className="" />
    //     </div>
    //     <div className="lg:w-1/2  lg:place-self-center !justify-items-center  md:!pl-40 sm:!pl-40 !pl-5 lg:!mb-0 !mb-5" data-aos="zoom-in">
    //       <div className="">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase ">
    //           Who We Are
    //         </h3>
    //         <h3 className="text-black lg:text-5xl md:text-4xl text-3xl tracking-wide font-syne ">
    //           Trusted <br />
    //           and Supported <br /> by Many
    //         </h3>
    //         <div className="lg:flex grid md:flex !gap-3 !mt-3  lg:!gap-10 md:!gap-10 border-b-1 border-[#57b8e0] lg:w-[100%] md:w-[70%] w-[50%] !mb-4">
    //           {data?.map((item, index) => {
    //             const isselected = item?.id == selecteditem?.id;
    //             return (
    //               <div
    //                 key={index}
    //                 className={`lg:!py-3 md:!py-3 pr-10  ${isselected ? "border-b-1" : "border-0"
    //                   } border-[#000000]`}
    //                 onClick={() => {
    //                   setselecteditem(item);
    //                 }}
    //               >
    //                 <p className="text-black lg:text-3xl md:text-3xl text-2xl tracking-wide font-syne cursor-pointer">
    //                   {item?.title}
    //                 </p>
    //               </div>
    //             );
    //           })}
    //         </div>
    //         <div className="">
    //           <p className="lg:text-[20px] md:text-[18px] text-[16px] text-black !mb-4 font-sans lg:w-[90%] md:w-[70%] w-[60vw]">
    //             {selecteditem?.paragraph}
    //           </p>
    //           <ul>
    //             {selecteditem?.points &&
    //               selecteditem.points?.map((item, index) => {
    //                 return (
    //                   <li
    //                     className="list-inside list-disc lg:text-[18px] md:text-[16px] text-[14px] font-sans"
    //                     key={index}
    //                   >
    //                     {item?.data}
    //                   </li>
    //                 );
    //               })}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="lg:flex">
    //     <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:!mb-0 !mb-10 ">
    //       <div className="w-[60%]" data-aos="fade-right">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase !mb-3">
    //           Brands
    //         </h3>
    //         <h2 className="text-black lg:text-5xl md:text-4xl text-3xl font-medium -tracking-tighter font-syne ">
    //           Trusted <br /> and Supported <br /> by Many
    //         </h2>
    //         <div>
    //           <div className="!my-5 ">
    //             <h3 className="text-black lg:text-3xl md:text-3xl text-2xl  font-medium -tracking-tighter font-syne ">
    //               Product
    //             </h3>
    //             <Progress
    //               percent={95}
    //               status="active"
    //               strokeColor={conicColors}
    //             />
    //           </div>
    //           <div className="!my-5 ">
    //             <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
    //               User Experience
    //             </h3>
    //             <Progress
    //               percent={75}
    //               status="active"
    //               strokeColor={conicColors}
    //             />
    //           </div>
    //           <div className="!my-5 ">
    //             <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
    //               Security
    //             </h3>
    //             <Progress
    //               percent={83}
    //               status="active"
    //               strokeColor={conicColors}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="lg:w-1/2 w-full" data-aos="fade-left">
    //       <img src={software2} alt="software1" className="" />
    //     </div>
    //   </div>
    //   <div className="lg:flex">
    //     <div className="lg:w-1/2 w-full lg:mb-0 " data-aos="fade-right">
    //       <img src={software3} alt="software1" className="" />
    //     </div>
    //     <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 ">
    //       <div className="w-[60%]" data-aos="fade-left">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
    //           Built for Your Business
    //         </h3>
    //         <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
    //           Next-Gen <br /> SaaS <br /> Development

    //         </h2>
    //         <div className="">
    //           <p className="text-black text-[16px] font-normal">
    //             We deliver flexible and feature-rich SaaS platforms that solve real-world problems. Our development focuses on automation, third-party integrations, subscription handling, and multi-user experiences. Whether launching a new platform or modernizing an existing one, we deliver growth-ready SaaS solutions.

    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="lg:flex">
    //     <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 ">
    //       <div className="w-[60%]" data-aos="fade-right">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
    //           Built for Your Business
    //         </h3>
    //         <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
    //           Cloud-First <br /> Reliability
    //         </h2>
    //         <div className="">
    //           <p className="text-black text-[16px] font-normal">
    //             Backed by cloud-native infrastructure, our SaaS applications guarantee uptime and performance. We utilize DevOps, containerization, and CI/CD to keep your software agile, secure, and deployment-ready.

    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="lg:w-1/2 w-full " data-aos="fade-left">
    //       <img src={software4} alt="software1" className="" />
    //     </div>
    //   </div>
    //   {/* <div className="flex !my-20">
    //     <div className="w-full h-[50%] relative">
    //       <img
    //         src={
    //           "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-6-parallax-img.jpg"
    //         }
    //         alt="software2"
    //         className=""
    //       />
    //       <div className="bg-white absolute top-0 ">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase !mb-3">
    //           Brands
    //         </h3>
    //         <h2 className="text-black text-5xl font-medium -tracking-tighter font-syne ">
    //           Trusted <br /> and Supported <br /> by Many
    //         </h2>
    //       </div>
    //     </div>
    //   </div> */}
    //   <div className="relative w-full h-[800px]" data-aos="fade-up">
    //     <img
    //       src="https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-6-parallax-img.jpg"
    //       alt="software2"
    //       className="absolute inset-0 w-full h-full object-cover"
    //     />

    //     {/* Overlay content */}
    //     <div className="absolute inset-0 flex items-center justify-center" data-aos="fade-up" data-aos-duration="3000">
    //       <div className="bg-transparent bg-opacity-80 !p-8 max-w-xl text-left">
    //         <h3 className="text-white text-[16px] tracking-wide uppercase mb-3">
    //           Brands
    //         </h3>
    //         <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-medium font-syne leading-tight">
    //           Trusted and <br /> Supported <br />
    //         </h2>
    //         <p className="text-white lg:text-[16px] md:text-[14px] text-[12px] font-normal">
    //           Custom software development is the process of building tailored
    //           software solutions designed specifically to meet the unique needs
    //           of a business or organization. Unlike off-the-shelf software,
    //           custom solutions are developed from the ground up to align with
    //           specific workflows, goals, and challenges, offering greater
    //           flexibility, scalability, and efficiency.
    //         </p>
    //         <div className="!mt-5">
    //           <div className="!px-5 !py-2 border-1 border-white w-fit group hover:bg-white">
    //             <span className="text-white font-syne text-[16px] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-400 group-hover:bg-clip-text">
    //               View More
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="!my-20">
    //     <h3 className=" text-black text-5xl font-medium -tracking-tighter font-syne text-center ">
    //       Our Services
    //     </h3>
    //     <div className="!my-20">
    //       <div className="flex flex-wrap justify-center items-center lg:!px-80 md:!px-10">
    //         {service?.map((item, index) => {
    //           return (
    //             <div
    //               key={index}
    //               className="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full flex justify-center"
    //             >
    //               <div className="!mb-5">
    //                 <Card
    //                   hoverable
    //                   style={{ width: "80%" }}
    //                   cover={<img alt="example" src={item?.img} />}
    //                 >
    //                   <Meta
    //                     title={item?.title}
    //                     description={item?.description}
    //                     className="font-syne"
    //                   />
    //                   <div className="">
    //                     <div className="!p-2 place-self-end">
    //                       <a href={item?.path} className="">
    //                         <span className="text-[16px] capitalize">
    //                           Read more{" "}
    //                         </span>
    //                       </a>
    //                     </div>
    //                   </div>
    //                 </Card>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div>
    //   <Meetourclient />
    // </div>

    <section>
      <div className="!mt-15">
        <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
          <h3 className="text-[#9F70FD] font-syne lg:text-[60px] md:text-[40px] text-[25px] text-center ">
            Saas App Development
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid md:grid-cols-1  sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:full w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={software1}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="lg:w-1/2 md:w-full w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <h3 className="text-[#788094] lg:text-[24px] md:text-[20px] text-[18px] font-syne md:!pl-10 text-justify lg:leading-15">
              Scalable, secure, and built for growth, our SaaS platforms are engineered with modular architecture, cloud-native reliability, and flexible feature sets.
              From intuitive dashboards to seamless onboarding flows, every interface is crafted for usability. We emphasize performance, automation.
              With DevOps practices, CI/CD pipelines, and containerized infrastructure, we ensure continuous delivery. Whether building from scratch or
              modernizing legacy systems, our SaaS solutions evolve alongside your business needs with agility and resilience.
            </h3>
          </div>
        </div>
        <div>
          <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px]  text-[#1A1A2E] text-center font-syne !my-10">
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
        <div>
          <div className="lg:!m-20 md:!m-20  !mx-10">
            <div className="lg:!pt-0 md:!pt-0 !pt-10 ">
              <h1 className="!pb-3 lg:text-[48px] md:text-[40px] sm:text-[30px] text-[20px] text-[#1A1A2E] font-semibold font-syne">
                Scale Smarter with Our Agile SaaS Expertise
              </h1>
            </div>
            <div className="">
              <p className="text-[#788094] lg:text-[24px] md:text-[20px] text-[16px] font-syne  ">
                At Vineatz, we build SaaS platforms engineered for growth. Our agile development enables rapid deployment,
                seamless updates, and flexible architecture tailored to your evolving business needs.
              </p>
            </div>
            {/* <div>
              <ul className="grid lg:grid-cols-2 lg:w-1/2 w-full  !mt-5 list-disc font-syne !pl-5 leading-10 ">
                <li>consectetur placerat augue vestibulum</li>
                <li>Mauris tincidunt a eget facilisis Quisque</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>adipiscing elit Etiam aliquam, enim vitae</li>
                <li>Donec at augue ante Nam posuere mauris</li>
                <li>quis pretium elit placerat id Fusce egestas</li>
              </ul>
            </div> */}
            <div className=" lg:flex md:flex-row flex-row !gap-10 lg:!mt-10 ">
              <img src={software2} alt="" className="w-full lg:p-0 !py-3  " />
              <img src={software3} alt="" className="w-full lg:p-0 !py-3 " />
            </div>
            <div className=" ">
              <p className="text-[#788094] !pt-5  font-syne">
                From subscription handling to role-based access, our modular SaaS systems are designed to adapt and scale.
                We combine clean code, intuitive interfaces, and cloud-native infrastructure to deliver secure, performance-optimized platforms.
                Whether you're launching an MVP or modernizing legacy systems, our agile expertise ensures a reliable, future-proof digital foundation.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 !pt-10 !gap-10">
              {saas?.map((item, index) => {
                return (
                  <div className="lg:p-5 lg:flex shrink-0 ">
                    <div> <img src={item?.img} alt="icon" className="  lg:h-12 lg:w-25 " /></div>
                    <div className="lg:!px-10 ">
                      <h2 className="lg:text-[26px] md:text-[22px] text-[20px] text-[#AD46FF]  font-semibold lg:!pt-0 !pt-5  font-syne">
                        {item?.t1}
                      </h2>
                      <h2 className="lg:text-[18px] md:text-[16px] text-[14px] lg:leading-10 leading-8 font-syne !pt-5 text-[#4B5563]">
                        {item?.data}
                      </h2>
                    </div>
                  </div>
                )
              }
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Saas_Page;
