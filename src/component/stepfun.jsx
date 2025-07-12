import React from "react";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";
import mobile4 from "../assets/mobile4.png";

function Step() {
  const steps = [
    {
      img: mobile1,
      t1: "Discovery",
      para: "Understanding your business & goals",
    },
    {
      img: mobile2,
      t1: "Design & Prototype",
      para: "UI/UX mockups and user flow testing",
    },
    {
      img: mobile3,
      t1: "Agile Development",
      para: "Iterative coding & sprint-based progress",
    },
    {
      img: mobile4,
      t1: "Launch & Support",
      para: "Release + ongoing maintenance",
    },
  ];

  return (
    <div className="place-items-center">
      <div className="p-6 rounded-xl w-[80%] md:mb-0 mb-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Item */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={step.img}
                  alt={step.t1}
                  className="w-[100px] h-[100px] object-contain mb-2"
                />
                <h3 className="text-[20px] font-syne text-black mt-5 mb-2">
                  {step?.t1}
                </h3>
                <p className="text-[16px] font-syne text-black">
                  {step?.para}
                </p>
              </div>

              {/* Connector Line */}
              {index !== steps.length - 1 && (
                <>
                  {/* Desktop (horizontal line) */}
                  <div className="hidden md:flex justify-center items-center mx-4">
                    <div className="w-[100px] h-[2px] bg-[#AF4BFF]" />
                  </div>

                  {/* Mobile (vertical line) */}
                  <div className="flex md:hidden justify-center items-center my-4">
                    <div className="w-[2px] h-[40px] bg-[#AF4BFF]" />
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Step;
