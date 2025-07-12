import React, { useState } from "react";
import Img from "../assets/thinkyoutoknow.png";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

function Thinkyoutoknow() {
  const Faq = [
    {
      id: 1,
      title: "How long until we deliver your first blog post?",
      answer:
        "How long until we deliver your first blog postHow long until we deliver your first blog post How long until we deliver your first blog postHow long until we deliver your first blog post How long until we deliver your first blog postHow long until we deliver your first blog post",
    },
    {
      id: 2,
      title: "How long until we deliver your first blog post?",
      answer:
        "How long until we deliver your first blog postHow long until we deliver your first blog post",
    },
    {
      id: 3,
      title: "How long until we deliver your first blog post?",
      answer:
        "How long until we deliver your first blog postHow long until we deliver your first blog post",
    },
    {
      id: 4,
      title: "How long until we deliver your first blog post?",
      answer:
        "How long until we deliver your first blog postHow long until we deliver your first blog post",
    },
    {
      id: 5,
      title: "How long until we deliver your first blog post?",
      answer:
        "How long until we deliver your first blog postHow long until we deliver your first blog post",
    },
  ];
  const [selected, setSelected] = useState(null);
  return (
    <section className="w-full min-h-screen flex flex-col place-content-center items-center bg-white gap-10  py-10 !mt-10 md:!px-20 lg:!px-20 !px-10">
      <div>
        <h2 className="font-syne text-3xl md:text-[38px] text-black text-center md:!mb-20 !mb-5">
          Things you to <span className="text-[#AF4BFF]">know</span>
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
