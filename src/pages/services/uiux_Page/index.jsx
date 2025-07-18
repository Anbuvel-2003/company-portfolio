import Uxuibanner from "../../../assets/Uxuibanner.png";
import Ux1 from "../../../assets/Ux1.png";
import Ux2 from "../../../assets/Ux2.png";
import Ux3 from "../../../assets/Ux3.png";
import Ux4 from "../../../assets/Ux4.png";
import Ux5 from "../../../assets/Ux5.png";
import Ux6 from "../../../assets/Ux6.png";
import Ui1 from "../../../assets/Ui1.png";
import Ui2 from "../../../assets/Ui2.png";
import Ui3 from "../../../assets/Ui3.png";
import Ui7 from "../../../assets/Ui7.png";
import Ui5 from "../../../assets/Ui5.png";
import Uiob1 from "../../../assets/uiob1.png";
import Uiob2 from "../../../assets/uiob2.png";
import Uiob3 from "../../../assets/uiob3.png";
import Uiob4 from "../../../assets/uiob4.png";
import Uiob5 from "../../../assets/uiob5.png";
import Uiob6 from "../../../assets/uiob6.png";
import figma from "../../../assets/figma.svg";
import js from "../../../assets/js.svg";
import metaai from "../../../assets/metaai.svg";
import vscode from "../../../assets/vscode.svg";
import mongodb from "../../../assets/mongodb.svg";
import chatgpt from "../../../assets/openai.svg";
import nodejs from "../../../assets/nodejs.svg";
import android from "../../../assets/android.svg";
import analytics from "../../../assets/analytics.svg";
function UIUX_Page() {
  const Question = [
    {
      id: 1,
      image: Ux1,
      q1: "Expertise in User-Centric Design",
      q2: "Our design process starts with empathy. We understand your users' behavior, goals, and pain points to craft intuitive experiences that feel natural and effortless.",
    },
    {
      id: 2,
      image: Ux2,
      q1: "Collaborative Approach",
      q2: "Design is a shared vision. We involve clients in every phase—brainstorming, feedback loops, and revisions to ensure the final output truly reflects their brand goals.",
    },
    {
      id: 3,
      image: Ux3,
      q1: "Innovation",
      q2: "We don’t follow trends—we set them. Our team explores emerging design technologies and creative interactions to craft forward-thinking digital experiences.",
    },
    {
      id: 4,
      image: Ux4,
      q1: "Customer Satisfaction",
      q2: "We aim for excellence with every project. From timelines to functionality, we deliver UI/UX solutions that exceed expectations and leave a lasting impression.",
    },
    {
      id: 5,
      image: Ux5,
      q1: "Continuous Learning and Improvement",
      q2: "We stay sharp by constantly evolving—learning new tools, testing new ideas, and applying industry best practices to stay ahead of the digital curve.",
    },
    {
      id: 6,
      image: Ux6,
      q1: "Refinement through Research",
      q2: "Every decision is rooted in insight. We conduct deep user and market research to validate ideas and refine designs that perform in the real world.",
    },
  ];
  const question1 = [
    {
      id: 1,
      image: Ui1,
      q1: "Discover Phase",
      q2: "The process begins by uncovering user needs through research to understand their goals.",
    },
    {
      id: 2,
      image: Ui2,
      q1: "Analysis Stage",
      q2: "The data is then analyzed to define the core problems and pinpoint usability issues.",
    },
    {
      id: 3,
      image: Ui3,
      q1: "Ideation Phase",
      q2: "aim to find innovative solutions to address the issues in the user flow.",
    },
    {
      id: 4,
      image: Ui5,
      q1: "Prototyping Step",
      q2: "Quick prototypes are built to test design ideas before moving on to more complex stages.",
    },
    {
      id: 5,
      image: Ui7,
      q1: "Testing Stage",
      q2: "Usability testing with real users refines the design through iterative feedback loops.",
    },
  ];
  const question3 = [
    {
      image: Uiob1,
      id: 1,
      q1: "Best user experience",
      q2: "Our UI/UX development services aim to enhance the user experience by creating intuitive, easy-to-navigate, and visually appealing interfaces.",
    },
    {
      image: Uiob2,
      id: 2,
      q1: "Increased User Engagement",
      q2: "Our user-friendly interfaces and seamless interactions significantly boost user engagement, promoting increased time spent on your platform.",
    },
    {
      image: Uiob3,
      id: 3,
      q1: "Boosts brand awareness",
      q2: "A well-designed UI/UX improves the brand image by showcasing professionalism, trustworthiness, and attention to detail, boosting brand perception.",
    },
    {
      image: Uiob4,
      id: 4,
      q1: "Reduced Development Costs",
      q2: "UI/UX design can save time and money by addressing usability issues early in the design process, preventing costly redesigns in the future.",
    },
    {
      image: Uiob5,
      id: 5,
      q1: "Competitive Advantage",
      q2: "Investing in superior UI/UX provides a competitive advantage by offering a unique and memorable user experience that attracts and retains customers.",
    },
    {
      image: Uiob6,
      id: 6,
      q1: "Improved Usability",
      q2: "The best UI/UX elevates brand image, conveys professionalism, trust, and attention to detail, and improves overall brand perception and reputation.",
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
    <section className="">
      <div className="!mt-15">
        <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
          <h3 className="text-[#9F70FD] font-syne font-bold lg:text-[60px] md:text-[40px] text-[25px] text-center ">
            UI/UX Design Service
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid md:grid-cols-1 sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-full w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={Uxuibanner}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="lg:w-1/2 md:w-full w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <h3 className="lg:text-[24px] md:text-[20px] text-[18px] font-syne lg:text-base/15 md:!pl-10 lg:leading-15 text-justify text-[#788094] ">
              We craft purposeful UI/UX designs that combine user insights, visual strategy, and functional clarity.
              From personal creation and wireframes to high-fidelity prototypes, our design process ensures every interface 
              feels intuitive and on-brand. Accessibility, consistency, and responsiveness guide our approach—resulting 
              in inclusive, mobile-friendly experiences. we turn business goals into interactive journeys that drive engagement, 
              solve real user problems, and deliver seamless performance across every screen and platform.
            </h3>
          </div>
        </div>
         <div>
          <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center !my-10">
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
      <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10">
        <div className="lg:flex grid lg:!gap-20">
          <div className="lg:w-1/2 ">
            <div className="bg-[#F0F1FF] !py-3 !px-4 w-fit rounded-[20px]">
              <h2 className="text-[#9F70FD] lg:text-[16px] md:text-[14px] text-[12px]  font-syne capitalize ">
                Why Choose Us
              </h2>
            </div>
            <h2 className="text-black capitalize font-syne lg:text-[60px] md:text-[50px] sm:text-[30px] text-[25px] lg:mb-0 !mb-5">
              Why Choose Us as Your UI/UX Design Partner?
            </h2>
          </div>
          <div className="lg:w-1/2 ">
            {Question?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="!p-5 bg-white rounded-[20px] shadow-2xl !mb-5"
                >
                  <div className="flex items-center !gap-5">
                    <div>
                      <img alt="" className="" src={item?.image} />
                    </div>
                    <div>
                      <h3 className="text-black font-syne lg:text-[20px] md:text-[19px] text-[18px] capitalize">
                        {item?.q1}
                      </h3>
                    </div>
                  </div>
                  <div className="!mt-3 ">
                    <h2 className="text-[#374151] lg:text-[16px] md:text-[16px]  text-[14px] font-syne leading-8 ">{item?.q2}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10 ">
        <div className="place-items-center">
          <div className="bg-[#F0F1FF] !py-3 !px-4 w-fit rounded-[20px] ">
            <h2 className="text-[#9F70FD] 700 font-syne capitalize ">
              How Does It Work
            </h2>
          </div>
        </div>
        <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center !my-10">
          Our Simple UI/UX Design Working Process
        </h3>
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 !gap-10">
          {question1?.map((item, index) => {
            return (
              <div className="!p-5 shadow-2xl rounded-[20px]">
                <img src={item?.image} alt="" className="" />
                <div className="">
                  <h2 className="text-[20px] text-black font-syne">
                    {item?.q1}
                  </h2>
                  <h2 className="lg:text-[16px] md:text-[16px] text-[14px] font-syne leading-8 text-[#9CA3AF]">{item?.q2}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10 ">
        <div className="place-items-center">
          <div className="bg-[#F0F1FF] !py-3 !px-4 w-fit rounded-[20px] ">
            <h2 className="text-[#9F70FD] text-[16px] font-syne capitalize ">
              Benefits Offered
            </h2>
          </div>
        </div>
        <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center !my-10">
          Why Great UI/UX Design matters for your Business
        </h3>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 !gap-10">
          {question3?.map((item, index) => {
            return (
              <div className="!p-5 shadow-2xl rounded-[20px]">
                <img src={item?.image} alt="" className="" />
                <div className="">
                  <h2 className="text-[20px] text-black  !mt-3 font-syne">
                    {item?.q1}
                  </h2>
                  <h2 className="lg:text-[16px] md:text-[16px] text-[14px] font-syne leading-8 text-[#4B5563] !mt-3">
                    {item?.q2}
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}

export default UIUX_Page;
