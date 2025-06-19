import React, { useState } from "react";
import Meetourclient from "../../../component/meetourclient";
import software1 from "../../../assets/softwareimg1.jpg";
import { Flex, Progress, Card } from "antd";

function Testing_Page() {
  const conicColors = {
    "0%": "#b9e6fe",
    "50%": "#ccdfff",
    "100%": "#e7d5ff",
  };
  const service = [
    {
      id: 1,
      title: "Saas app development",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      path: "/company-portfolio/saasproductSection",
      description: "Build reliable Software-as-a-service applications",
    },
    {
      id: 2,
      title: "Mobile app development",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      path: "/company-portfolio/saasproductSection",
      description: "Build reliable Software-as-a-service applications",
    },
    {
      id: 3,
      title: "Web app development",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      path: "/company-portfolio/saasproductSection",
      description: "Build reliable Software-as-a-service applications",
    },
    {
      id: 4,
      title: "UI and UX Design",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      path: "/company-portfolio/saasproductSection",
      description: "Build reliable Software-as-a-service applications",
    },
    {
      id: 5,
      title: "Digital marketing",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      path: "/company-portfolio/saasproductSection",
      description: "Build reliable Software-as-a-service applications",
    },
    {
      id: 6,
      title: "Testing Services",
      img: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
      path: "/company-portfolio/saasproductSection",
      description: "Build reliable Software-as-a-service applications",
    },
  ];
  const data = [
    {
      id: 1,
      title: "Design",
      paragraph:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamconisi ut aliquip ex ea commodo Duis aute irure euripidis ne mel, mel lobortis viverra nulla varius laoreet.",
      points: [
        {
          id: 1,
          data: "Donec pede justo, fringilla.",
        },
        {
          id: 2,
          data: "Donec pede justo, fringilla.",
        },
        {
          id: 3,
          data: "Donec pede justo, fringilla.",
        },
        {
          id: 4,
          data: "Donec pede justo, fringilla.",
        },
      ],
    },
    {
      id: 2,
      title: "Marketing",
      paragraph:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod reus tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      points: [
        {
          id: 1,
          data: "Lorem ipsum dolor est.",
        },
        {
          id: 2,
          data: "Aliquam lorem ante.",
        },
        {
          id: 3,
          data: "Phasellus viverra nulla.",
        },
        {
          id: 4,
          data: "Curabitur ullamcorper.",
        },
      ],
    },
    {
      id: 3,
      title: "Devs",
      paragraph:
        "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
      points: [
        {
          id: 1,
          data: "Maecenas nec odio ante.",
        },
        {
          id: 2,
          data: "Etiam amet orci eget.",
        },
        {
          id: 3,
          data: "Phasellus nec tincidunt.",
        },
        {
          id: 4,
          data: "Commodo ligula dolor.",
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
  const [selecteditem, setselecteditem] = useState({
    id: 1,
    title: "Design",
    paragraph:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamconisi ut aliquip ex ea commodo Duis aute irure euripidis ne mel, mel lobortis viverra nulla varius laoreet.",
    points: [
      {
        id: 1,
        data: "Donec pede justo, fringilla.",
      },
      {
        id: 2,
        data: "Viverra quis, feugiat tellus.",
      },
      {
        id: 3,
        data: "Aenean commodo eget dolor.",
      },
      {
        id: 4,
        data: "Etiam orci eget eros.",
      },
    ],
  });
  const { Meta } = Card;
  return (
    <div className="!pt-15">
      <div className="place-self-center lg:!p-20 md:!p-20 !p-5">
        <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl ">
          Testing Services
        </h3>
      </div>
      <div className="lg:flex lg:gap-0 ">
        <div className="lg:w-1/2 w-full lg:!mb-0  !mb-10">
          <img src={software1} alt="software1" className="" />
        </div>
        <div className="lg:w-1/2  lg:place-self-center !justify-items-center  md:!pl-40 sm:!pl-40 !pl-5 lg:!mb-0 !mb-5">
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
                    className={`lg:!py-3 md:!py-3 pr-10  ${
                      isselected ? "border-b-1" : "border-0"
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
          <div className="w-[60%]">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase !mb-3">
              Brands
            </h3>
            <h2 className="text-black lg:text-5xl md:text-4xl text-3xl font-medium -tracking-tighter font-syne ">
              Trusted <br /> and Supported <br /> by Many
            </h2>
            <div>
              <div className="!my-5 ">
                <h3 className="text-black lg:text-3xl md:text-3xl text-2xl  font-medium -tracking-tighter font-syne ">
                  Design
                </h3>
                <Progress
                  percent={95}
                  status="active"
                  strokeColor={conicColors}
                />
              </div>
              <div className="!my-5 ">
                <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
                  Projects
                </h3>
                <Progress
                  percent={75}
                  status="active"
                  strokeColor={conicColors}
                />
              </div>
              <div className="!my-5 ">
                <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
                  Development
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
        <div className="lg:w-1/2 w-full">
          <img src={software1} alt="software1" className="" />
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 w-full lg:mb-0 ">
          <img src={software1} alt="software1" className="" />
        </div>
        <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 ">
          <div className="w-[60%]">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
              Built for Your Business
            </h3>
            <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
              Custom <br /> Software <br /> Development
            </h2>
            <div className="">
              <p className="text-black text-[16px] font-normal">
                Custom software development is the process of building tailored
                software solutions designed specifically to meet the unique
                needs of a business or organization. Unlike off-the-shelf
                software, custom solutions are developed from the ground up to
                align with specific workflows, goals, and challenges, offering
                greater flexibility, scalability, and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 ">
          <div className="w-[60%]">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
              Built for Your Business
            </h3>
            <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
              Custom <br /> Software <br /> Development
            </h2>
            <div className="">
              <p className="text-black text-[16px] font-normal">
                Custom software development is the process of building tailored
                software solutions designed specifically to meet the unique
                needs of a business or organization. Unlike off-the-shelf
                software, custom solutions are developed from the ground up to
                align with specific workflows, goals, and challenges, offering
                greater flexibility, scalability, and efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full ">
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
      <div className="relative w-full h-[800px]">
        <img
          src="https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-6-parallax-img.jpg"
          alt="software2"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex items-center justify-center">
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

export default Testing_Page;
