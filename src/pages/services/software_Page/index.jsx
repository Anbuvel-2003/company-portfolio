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
  // const conicColors = {
  //   "0%": "#b9e6fe",
  //   "50%": "#ccdfff",
  //   "100%": "#e7d5ff",
  // };
  // const data = [
  //   {
  //     id: 1,
  //     title: "Requirements",
  //     paragraph:
  //       "We tailor software based on your specific business needs, workflows, and goals.",
  //     points: [
  //       {
  //         id: 1,
  //         data: "Business Logic Mapping.",
  //       },
  //       {
  //         id: 2,
  //         data: "Industry-Specific Features.",
  //       },
  //       {
  //         id: 3,
  //         data: "Goal-Oriented Planning.",
  //       },
  //       {
  //         id: 4,
  //         data: "Iterative Feedback Loops.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Flexibility",
  //     paragraph:
  //       "Our engineers use the right technology mix to ensure scalability and performance.",
  //     points: [
  //       {
  //         id: 1,
  //         data: "Modern Framework Support.",
  //       },
  //       {
  //         id: 2,
  //         data: "Scalable Database Design.",
  //       },
  //       {
  //         id: 3,
  //         data: "API-First Development.",
  //       },
  //       {
  //         id: 4,
  //         data: "Cloud or On-Prem Options.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Integration",
  //     paragraph:
  //       "We ensure seamless integration with your existing tools and external services.",
  //     points: [
  //       {
  //         id: 1,
  //         data: "ERP/CRM Connectivity",
  //       },
  //       {
  //         id: 2,
  //         data: "API Integrations.",
  //       },
  //       {
  //         id: 3,
  //         data: "Payment & Auth Systems.",
  //       },
  //       {
  //         id: 4,
  //         data: "Third-Party Services.",
  //       },
  //     ],
  //   },
  // ];
  // const [selecteditem, setselecteditem] = useState(data[0]);
  // const { Meta } = Card;
  return (
    // <div className="!pt-15">
    //   <div className="place-self-center lg:!p-20 md:!p-20 !p-5">
    //     <h3
    //       className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl "
    //       data-aos="zoom-in"
    //     >
    //       Custom Software Development
    //     </h3>
    //   </div>
    //   <div className="lg:flex lg:gap-0 ">
    //     <div className="lg:w-1/2 w-full lg:!mb-0  !mb-10" data-aos="zoom-in" data-aos-duration="1000">
    //       <img src={software1} alt="software1" className="" />
    //     </div>
    //     <div
    //       className="lg:w-1/2  lg:place-self-center !justify-items-center  md:!pl-40 sm:!pl-40 !pl-5 lg:!mb-0 !mb-5"
    //       data-aos="zoom-in"
    //       data-aos-duration="1000"
    //     >
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
    //                 className={`lg:!py-3 md:!py-3 pr-10  ${
    //                   isselected ? "border-b-1" : "border-0"
    //                 } border-[#000000]`}
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
    //               Requirements
    //             </h3>
    //             <Progress
    //               percent={50}
    //               status="active"
    //               strokeColor={conicColors}
    //             />
    //           </div>
    //           <div className="!my-5 ">
    //             <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
    //               Flexibility
    //             </h3>
    //             <Progress
    //               percent={75}
    //               status="active"
    //               strokeColor={conicColors}
    //             />
    //           </div>
    //           <div className="!my-5 ">
    //             <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
    //               Integration
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
    //     <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 " data-aos="fade-left">
    //       <div className="w-[60%]">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
    //           Built for Your Business
    //         </h3>
    //         <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
    //           Tailored <br /> Enterprise <br /> Solutions
    //         </h2>
    //         <div className="">
    //           <p className="text-black text-[16px] font-normal">
    //             We build high-impact software that adapts to your business
    //             model. Whether automating workflows, improving productivity, or
    //             launching internal platforms, our solutions scale with
    //             you—designed for performance and maintainability.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="lg:flex">
    //     <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 " data-aos="fade-right">
    //       <div className="w-[60%]">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
    //           Built for Your Business
    //         </h3>
    //         <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
    //           Built <br /> for Longevity
    //         </h2>
    //         <div className="">
    //           <p className="text-black text-[16px] font-normal">
    //             Our custom applications are designed with future growth in mind.
    //             Modular code, clean architecture, and robust documentation make
    //             scaling, upgrading, and handoffs easier and more cost-effective.
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

    //   {/* <div className="!my-20">
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
    //   </div> */}
    //   <Meetourclient />
    // </div>
    // );
    <section>
      <div>
        <div>
          <h1 className="lg:text-[60px] md:text-[50px] text-[30px] text-[#9F70FD] bg-[#F8F4FF] text-center 
          font-syne lg:!my-30 md:!my-20 !my-10 !py-15">Custom Software Development</h1>
        </div>
        <div className="flex lg:flex-row md:flex-col flex-col lg:!mt-10 !mt-5 ">
          <div className="lg:w-full md:w-auto  md:place-content-center lg:!pl-35 md:!p-25 !p-20">
            <img src={software5} alt="services" />
          </div>
          <div className="text-[#788094] font-syne lg:text-[24px] md:text-[20px] text-[16px] w-full self-center lg:leading-20 md:leading-10 leading-8 md:!pl-20 !px-10  ">
            <p>Our UI/UX design services are crafted to elevate your digital presence with precision and creativity.
              We begin by understanding your goals and your audience, ensuring that every design decision aligns with your brand’s vision.
              Our approach integrates user research, wireframing, and prototyping to create intuitive and engaging interfaces.Our UI/UX design
              services are crafted to elevate your digital presence with precision and creativity. We begin by understanding your goals and your audience, ensuring </p>
          </div>
        </div>
        <div>
          <div className="text-[#1A202C] text-[35px] text-center font-syne !py-16">
            <p className="border-t-3 border-[#AD46FF] !mx-220 !pb-10 "></p>
            <h1 className="!pb-5">Way of building</h1>
            <h1 className="font-bold !pb-10">Great Software</h1>
          </div>
          <div className="flex flex-col lg:!pl-35 md:!p-20 !p-10 font-syne lg:!py-10 leading-10">
            <div className="flex lg:flex-row md:flex-col flex-col">
              <div className="self-center lg:w-full w-fit">
                <h1 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold ">Build the right team to scale</h1>
                <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:!py-10 !py-5  ">
                  Finding the right talent is not easy. We help you find the talent that suits your needs,
                  follows your processes, and sticks with you long term (not the case with freelancers)</p>
                <p className=" ">
                  Our <span className="text-[#AD46FF] ">delivery model</span> helps you cut costs and deliver within budget.
                </p>
                <div className="!py-10 ">
                <p className=" text-[#AD46FF] border-l-3 border-[#AD46FF] !pl-6 ">
                  "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
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
                <h1 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold ">Build the right team to scale</h1>
                <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:!py-10 !py-5  ">
                  Finding the right talent is not easy. We help you find the talent that suits your needs,
                  follows your processes, and sticks with you long term (not the case with freelancers)</p>
                <p className=" ">
                  Our <span className="text-[#AD46FF]">delivery model</span> helps you cut costs and deliver within budget.
                </p>
                <div className="!py-10 ">
                <p className=" text-[#AD46FF] border-r-3 border-[#AD46FF] ">
                    "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
                  </p>
              </div>
              </div>
          </div>
          <div className="flex lg:flex-row md:flex-col flex-col">
            <div className="self-center lg:w-full w-fit ">
              <h1 className=" lg:text-[28px] md:text-[24px] text-[20px] font-semibold ">Build the right team to scale</h1>
              <p className="lg:text-[18px] md:text-[16px] text-[14px] lg:!py-10 !py-5  ">
                Finding the right talent is not easy. We help you find the talent that suits your needs,
                follows your processes, and sticks with you long term (not the case with freelancers)</p>
              <p className=" ">
                Our <span className="text-[#AD46FF]">delivery model</span> helps you cut costs and deliver within budget.
              </p>
              <div className="!py-10 ">
              <p className=" !pl-6 text-[#AD46FF] border-l-3 border-[#AD46FF]">
                "Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"
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
  )
}


export default Software_Page;
