import React, { useState } from "react";
import About1 from "../../../assets/About-us-img-1.jpg";
import About2 from "../../../assets/About-us-img-2.jpg";
import News_section from "../../../component/News";
import Meetourclient from "../../../component/meetourclient";

function AboutUs() {
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
  return (
    <div className="!pt-15">
      <div className="place-self-center lg:!p-20 md:!p-20 !p-5">
        <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl ">
          About Us
        </h3>
      </div>
      <div className="lg:flex grid gap-20">
        <div className="lg:w-[70vw] w-full">
          <img src={About1} alt="" className="" />
        </div>
        <div className="lg:w-1/2 place-self-center md:!pl-40 sm:!pl-40 lg:!mt-20 md:!mt-20 !pl-5">
          <div className="!mb-3">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
              Who We Are
            </h3>
          </div>
          <div className="!mb-3">
            <h3 className="text-black text-5xl tracking-wide font-syne">
              Smart <br /> Platform <br /> Integration
            </h3>
          </div>
          <div>
            <p className="text-black tracking-wide  lg:w-1/2 md:w-1/2 w-[90%]  text-left">
              Strategically crafted solutions by our diverse team of ideators,
              designers, writers, and technical experts. We prioritize customer
              satisfaction over profits, delivering high-quality software that
              enhances brand identity and solves more problems than it causes.
              Our commitment to excellence drives every aspect of our work.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:!mt-20 md:!mt-20">
        <News_section newsItems={newsData} view={false} />
      </div>
      <div className="lg:flex grid !gap-20 lg:!mb-30 md:!mb-30">
        <div className="lg:w-1/2  lg:place-self-center md:!pl-40 sm:!pl-40 !pl-5">
          <div className="place-self-center lg:!pl-[15vw]">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase ">
              Who We Are
            </h3>
            <h3 className="text-black text-5xl tracking-wide font-syne ">
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
              <p className="text-[20px] text-black !mb-4 font-sans lg:w-[90%] md:w-[70%] w-[80vw]">
                {selecteditem?.paragraph}
              </p>
              <ul>
                {selecteditem?.points &&
                  selecteditem.points?.map((item, index) => {
                    return (
                      <li
                        className="list-inside list-disc text-[18px] font-sans"
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
        <div className="w-1\2">
          <img src={About2} alt="" className="" />
        </div>
      </div>
      <Meetourclient />
    </div>
  );
}

export default AboutUs;
