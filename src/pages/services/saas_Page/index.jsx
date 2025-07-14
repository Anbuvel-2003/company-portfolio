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

import { Flex, Progress, Card } from "antd";

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
          <h3 className="text-[#9F70FD] font-syne lg:text-6xl sm:text-5xl text-center ">
            Saas App Development
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid  sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-1/2 w-full  place-items-center lg:h-[40vh] md:h-[60vh]  ">
            <img
              alt=""
              src={software1}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <h3 className="text-[#788094] lg:text-[20px] md:text-[18px] text-[16px] font-syne text-base/10 ">
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
          <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center font-syne !my-10">
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
          <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10">
            <div className="!pt-10 ">
              <h1 className="!pb-3 lg:text-[48px] md:text-[40px] sm:text-[30px] text-[20px] text-[#1A1A2E] font-semibold font-syne">
                Boost your brand with the help of our creative
                agency's UX design.
              </h1>
            </div>
            <div className="">
              <p className="text-[#788094] text-[24px]  ">
                Enhance your brand’s impact with our creative agency's expert UX design services.
                We’ll craft engaging and intuitive user experiences that elevate your brand and captivate your audience.
              </p>
            </div>
            <div>
              <ul className="grid lg:grid-cols-2 lg:w-1/2 w-full  !mt-5 list-disc font-syne !pl-5 leading-10 ">
                <li>consectetur placerat augue vestibulum</li>
                <li>Mauris tincidunt a eget facilisis Quisque</li>
                <li>Lorem ipsum dolor sit amet, consectetur</li>
                <li>adipiscing elit Etiam aliquam, enim vitae</li>
                <li>Donec at augue ante Nam posuere mauris</li>
                <li>quis pretium elit placerat id Fusce egestas</li>
              </ul>
            </div>
            <div className=" lg:flex md:flex-row flex-row !gap-10 lg:!mt-10 ">
              <img src={software2} alt="" className="w-full lg:p-0 !py-5  " />
              <img src={software3} alt="" className="w-full lg:p-0 !py-5 " />
            </div>
            <div className=" ">
              <p className="text-[#788094] !pt-10 ">
                Nam posuere mauris enim, quis pretium elit placerat id Fusce egestas nisi vel ipsum vehicula facilisis
                In pulvinar imperdiet venenatis Class aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos.
                Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue vestibulum Nulla aliquam elit eu diam pharetra.
                Nam posuere mauris enim,
              </p>
              <p className="text-[#788094] !pt-10 ">
                Nam posuere mauris enim, quis pretium elit placerat id Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis
                Class aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Saas_Page;
