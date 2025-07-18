import React, { useState } from "react";
import About1 from "../../../assets/About-us-img-1.jpg";
import About2 from "../../../assets/About-us-img-2.jpg";
import News_section from "../../../component/News";
import Meetourclient from "../../../component/meetourclient";
import OurTeam from "../ourTeam";

function AboutUs() {
  const data = [
    {
      id: 1,
      title: "Design",
      paragraph:
        "We craft intuitive, user-first designs that balance beauty and functionality—elevating experiences across every screen.",
      points: [
        {
          id: 1,
          data: "Responsive, mobile-friendly UI/UX.",
        },
        {
          id: 2,
          data: "Brand-aligned visual design.",
        },
        {
          id: 3,
          data: "Prototypes & interaction models.",
        },
        {
          id: 4,
          data: "Conversion-focused interfaces.",
        },
      ],
    },
    {
      id: 2,
      title: "Development",
      paragraph:
        "From front-end to full-stack, we build scalable digital products that grow with your business Clean, optimized codebases.",
      points: [
        {
          id: 1,
          data: "Agile, test-driven development.",
        },
        {
          id: 2,
          data: "Scalable architecture.",
        },
        {
          id: 3,
          data: "Seamless third-party integrations.",
        },
      ],
    },
    {
      id: 3,
      title: "Devs",
      paragraph:
        "Our DevOps and backend specialists ensure reliability, performance, and security behind the scenes.",
      points: [
        {
          id: 1,
          data: "Continuous integration & delivery.",
        },
        {
          id: 2,
          data: "Cloud-native infrastructure setup.",
        },
        {
          id: 3,
          data: "API development & management.",
        },
        {
          id: 4,
          data: "Monitoring, support, and maintenance.",
        },
      ],
    },
  ];
  const newsData = [
    {
      id: "01",
      title: "Build with Precision",
      description:
        "Our solutions are meticulously crafted by our team to ensure accuracy and effectiveness in meeting your unique business needs.",
      link: "#",
    },
    {
      id: "02",
      title: "Continuous Evolution",
      description:
        " We embrace innovation and adaptability, constantly evolving to provide cutting-edge solutions that keep your business ahead of the curve.",
      link: "#",
    },
    {
      id: "03",
      title: "Quality & Performance Driven",
      description:
        "We are committed to delivering software that not only meets high-quality standards but also drives performance to deliver optimal results for your business.",
      link: "#",
    },
  ];
  const [selecteditem, setselecteditem] = useState(data[0]);
  return (
    <div className="!mt-15">
      <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10 ">
        <h3 className="text-[#9F70FD] font-syne lg:text-[60px] md:text-[40px] text-[25px] text-center ">
          About Us
        </h3>
      </div>

      <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid md:grid-cols-1 sm:!m-10 !m-10">
        <div className="lg:w-1/2 md:w-full w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
          <img
            alt=""
            src={About1}
            className="w-[100%] h-[100%] rounded-[20px] md:items-center md:justify-center object-contain"
          />
        </div>
        <div className="lg:w-1/2 md:w-full w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 lg:!px-20 md:!pl-10 ">
          <div className="!mb-3 bg-[#F0F1FF] !py-3 !px-4 w-fit rounded-[20px]">
            <h2 className="text-[#9F70FD] text-[16px] font-syne capitalize ">
              Who we are
            </h2>
          </div>
          <div className="!mb-3">
            <h3 className="text-black lg:text-[35px] md:text-[30px] text-[25px] font-syne">
              Smart <br /> Platform <br /> Integration
            </h3>
          </div>
          <h3 className="lg:text-[24px] md:text-[20px] text-[18px] font-syne lg:leading-10 text-justify text-[#788094] ">
            Strategically crafted solutions by our diverse team of ideators,
            designers, writers, and technical experts. We prioritize customer
            satisfaction over profits, delivering high-quality software that
            enhances brand identity and solves more problems than it causes.
            Our commitment to excellence drives every aspect of our work.
          </h3>
        </div>
      </div>
      {/* <div className="lg:!mt-20 md:!mt-20 w-fit">
        <News_section newsItems={newsData} view={false} />
      </div> */}
      <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid md:grid-cols-1 sm:!m-10 !m-10">
        <div className="lg:w-1/2  lg:place-self-centr md:!pl-0 ">
          <div className="!mb-3 bg-[#F0F1FF] !py-3 !px-4  w-fit rounded-[20px]">
            <h2 className="text-[#9F70FD] text-[16px] font-syne capitalize ">
              Who We Are
            </h2>
          </div>
          <div>
            <h3 className="text-black lg:text-[35px] md:text-[30px] text-[25px] font-syne ">
              Trusted <br />
              and Supported <br /> by Many
            </h3>
            <div className="lg:flex grid md:flex !gap-3 !mt-3  lg:!gap-10 md:!gap-10 border-b-1 border-[#57b8e0] lg:w-[100%] md:w-[70%] w-[50%] !mb-4">
              {data?.map((item, index) => {
                const isselected = item?.id == selecteditem?.id;
                return (
                  <div
                    key={index}
                    className={`lg:!py-3 md:!py-3   ${isselected ? "border-b-1" : "border-0"
                      } border-[#000000]`}
                    onClick={() => {
                      setselecteditem(item);
                    }}
                  >
                    <p className="text-black lg:text- md:text-[20px] text-[15px] font-syne cursor-pointer">
                      {item?.title}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="">
              <p className="text-[20px] text-black !mb-4 font-syne lg:w-[90%] md:w-[70%] w-[80vw]">
                {selecteditem?.paragraph}
              </p>
              <ul>
                {selecteditem?.points &&
                  selecteditem.points?.map((item, index) => {
                    return (
                      <li
                        className="list-inside list-disc text-[18px] text-[#788094] font-syne"
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
        <div className="lg:w-1/2 md:w-full w-full  place-items-center  lg:h-[60vh] md:h-[40vh]  ">
          <img
            alt=""
            src={About2}
            className="lg:w-full md:w-fit w-full rounded-[20px] lg:!mt-[0px] md:!mt-[0px] !mt-[20px] lg:h-[60vh] md:h-[40vh] "
          />
        </div>
      </div>
      <OurTeam />
    </div>
  );
}

export default AboutUs;
