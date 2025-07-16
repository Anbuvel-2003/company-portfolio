import React from "react";
import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import line from "../assets/Line.png";

function Process() {
  const steps = [
    {
      img: step1,
      t1: "Discover",
      para: "We dive deep into your vision, target users, and business goals—laying the strategic foundation for everything that follows.",
    },
    {
      img: step2,
      t1: "Design",
      para: "Ideas become structure. We craft intuitive user flows, wireframes, and interfaces—balancing functionality with brand-focused design.",
    },
    {
      img: step3,
      t1: "Develop",
      para: "Using agile development, we build, test, and refine scalable digital products that perform flawlessly across devices and platforms.",
    },
    {
      img: step4,
      t1: "Deploy & Evolve",
      para: "We launch with stability and prepare for growth. Post-launch, we iterate, optimize, and support your product to ensure lasting success.",
    },
  ];
  return (
    <div className="w-full flex flex-col place-content-center items-center  gap-10 px-4  !my-20">
      <h2 className="font-syne text-3xl md:text-[38px] text-black text-center md:!mb-20">
        Our Working <span className="text-[#AF4BFF]">process</span>
      </h2>

      <div className="  rounded-xl w-[80%] md:mb-0">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-10 md:gap-0">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center">
                <img
                  src={step.img}
                  alt={step.label}
                  className="w-20 h-20 object-contain mb-2"
                />
                <img alt="" src={line} />
                <h3 className="text-[20px] font-syne text-black !mt-5 !mb-5">
                  {step?.t1}
                </h3>
                <h3 className="text-[16px] font-syne text-black">
                  {step?.para}
                </h3>
              </div>

              {/* Connector */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block w-100 h-1 border-t-2 border-dotted border-[#AF4BFF] mx-2 " />
              )}
              {index !== steps.length - 1 && (
                <div className="block md:hidden h-10 w-1 border-l-2 border-dotted border-[#AF4BFF] my-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Process;
