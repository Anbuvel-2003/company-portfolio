import React, { useState } from "react";
import Img from "../assets/thinkyoutoknow.png";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

function Thinkyoutoknow() {
  const Faq = [
    {
      id: 1,
      title: "What services does Vineatz specialize in?",
      answer:
        " We offer full-stack development for web, mobile, SaaS, and custom software solutions.",
    },
    {
      id: 2,
      title: "What is the typical project timeline?",
      answer:
        "Timelines vary by project scope, but we follow agile sprints for faster, transparent delivery.",
    },
    {
      id: 3,
      title: "Do you provide post-launch support?",
      answer:
        "Yes, we offer ongoing support, updates, and performance optimization after deployment",
    },
    {
      id: 4,
      title: "Can you work with existing software or platforms?",
      answer:
        "Absolutely—we enhance, integrate, or scale existing systems to meet evolving needs.",
    },
    {
      id: 5,
      title: "How do you ensure data security in your solutions?",
      answer:
        "We implement industry-standard encryption, secure APIs, and compliance-focused architecture.",
    },
  ];
  const [selected, setSelected] = useState(null);
  return (
    <section className="w-full min-h-screen flex flex-col place-content-center items-center gap-10  py-10 md:!px-20 lg:!px-20 !px-10">
      <div>
        <h2 className="font-syne text-3xl md:text-[38px] text-black text-center md:!mb-20 !mb-5">
          Frequently Asked <span className="text-[#AF4BFF]">Questions</span>
        </h2>
      </div>
      <div className="md:flex lg:flex grid w-full ">
        <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center items-center">
          <div className="lg:w-[80%] md:w-[80%] w-full">
            {Faq?.map((item, index) => {
              console.log("item", item, index);
              const Isselected = selected?.id == item?.id;
              return (
                <div>
                  <div
                    className="flex !mb-5 !w-[100%]  !p-5 justify-between items-center rounded-[5px] cursor-pointer shadow-lg "
                    onClick={() => {
                      setSelected(item);
                    }}
                  >
                    <h2 className="lg:text-[20px] md:text-[18px] sm:text-[16px] text-[14px] text-center font-syne capitalize">
                      {item?.title}
                    </h2>
                    {!Isselected ? (
                      <FaCirclePlus size={20} color="#AF4BFF" />
                    ) : (
                      <FaCircleMinus size={20} color="#AF4BFF" />
                    )}
                  </div>

                  {Isselected ? (
                    <div className="!m-3 !p-5">
                      <h2 className="lg:text-[16px] md:text-[16px] sm:text-[14px] text-[12px] text-black font-syne ">
                        {selected?.answer}
                      </h2>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 w-full flex justify-center items-center lg:mb-0 md:mb-0 !mb-10">
          <img src={Img} alt="" className="" />
        </div>
      </div>
    </section>
  );
}

export default Thinkyoutoknow;
