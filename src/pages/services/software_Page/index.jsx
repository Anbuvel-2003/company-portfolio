
import software5 from "../../../assets/servicebanner.png";
import software6 from "../../../assets/Rectangle 17.png";
import software7 from "../../../assets/Rectangle 18.png";
import software8 from "../../../assets/Rectangle 19.png";

import figma from "../../../assets/figma.svg";
import js from "../../../assets/js.svg";
import metaai from "../../../assets/metaai.svg";
import vscode from "../../../assets/vscode.svg";
import mongodb from "../../../assets/mongodb.svg";
import chatgpt from "../../../assets/openai.svg";
import nodejs from "../../../assets/nodejs.svg";
import android from "../../../assets/android.svg";
import analytics from "../../../assets/analytics.svg";



function Software_Page() {

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
    <section>
      <div className="!mt-15">
        <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
          <h3 className="text-[#9F70FD] font-syne lg:text-[60px] md:text-[40px] text-[25px] text-center ">
            Custom Software Development
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid md:grid-cols-1  sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-full w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={software5}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="lg:w-1/2 md:w-full w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <h3 className="lg:text-[24px] md:text-[20px] text-[18px] text-[#788094] md:!pl-10 font-syne lg:leading-15  ">
              We build software tailored to your business workflows, goals, and industry-specific requirements.
              From logic mapping to iterative feedback, our development process ensures every feature serves a purpose.
              Using scalable frameworks, modern databases, and API-first architecture, we deliver solutions built for
              performance and growth. Whether cloud-based or on-prem, our systems integrate seamlessly with ERPs,
              CRMs, payment gateways, and third-party tools—ensuring smooth, connected operations from day one{" "}
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

        <div>
          <div>
            <div className="!py-10 place-items-center">
              <h1 className="w-20 h-1 bg-[#AD46Ff] rounded-xl lg:!mb-5 !mb-10"></h1>
              <h1 className="!pb-3 lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#1A202C] font-syne font-light">
                Way of building
              </h1>
              <h1 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] text-[#1A202C] font-syne font-bold lg:!pb-0 !pb-10">
                Great Software
              </h1>
            </div>
            <div className="flex flex-col lg:!pl-20 md:!px-20 !px-10 sm:!pt-0 font-syne  leading-8">
              <div className="flex lg:flex-row md:flex-col flex-col lg:!pb-5 !py-0">
                <div className=" lg:w-full w-fit self-center">
                  <h1 className=" lg:text-[28px] md:text-[24px] text-[20px] text-[#1A202C] font-semibold ">
                    Discovery & Planning
                  </h1>
                  <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#2D3748] lg:!pt-5 !py-3  ">
                    We begin by understanding your business model, goals, and user needs.
                    Through research, we define a clear roadmap with features, timelines, and aligned priorities.
                  </p>
                  <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#2D3748] lg:!py-4 !py-2   ">
                    Your vision, strategically mapped.
                  </p>
                  <div className="lg:text-[18px] md:text-[16px] text-[14px] lg:!py-6 !py-4 ">
                    <p className=" text-[#AD46FF] border-l-3 border-[#AD46FF]  !pl-6 ">
                      A strong discovery phase ensures we build software with purpose, solving real problems
                      and aligning perfectly with your long-term business goals.
                    </p>
                  </div>
                </div>
                {/* <div className=" w-full md:!px-30 !pb-10 ">
                  <img src={software6} alt="" />
                </div> */}

                <div className=" w-full  place-items-center lg:h-[60vh] md:h-[80vh]  ">
                  <img
                    alt=""
                    src={software6}
                    className="w-[100%] h-[100%] object-contain"
                  />
                </div>
              </div>

              <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse self-center lg:!py-10 !py-5">

                <div className=" w-full  place-items-center lg:h-[60vh] md:h-[80vh]  ">
                  <img
                    alt=""
                    src={software7}
                    className="w-[100%] h-[100%] object-contain"
                  />
                </div>
                <div className="self-center lg:w-full w-fit  lg:!pl-5  ">
                  <h1 className=" lg:text-[28px] md:text-[24px] text-[20px] text-[#1A202C] font-semibold ">
                    Design & Development
                  </h1>
                  <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#2D3748] lg:!py-5 !py-3  ">
                    We craft intuitive interfaces and engineer robust backends using agile sprints.
                    Each module is carefully built, tested, and refined for performance and scalability.
                  </p>
                  <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#2D3748] lg:!py-2 !py-2   ">
                    Where design meets functionality.
                  </p>
                  <div className="lg:text-[18px] md:text-[16px] text-[14px] lg:!py-6 !py-4">
                    <p className=" text-[#AD46FF] border-r-3 border-[#AD46FF] ">
                      From wireframes to final code, we develop solutions that are beautiful, responsive,
                      and structured to grow with your evolving product needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex lg:flex-row md:flex-col flex-col lg:!py-5 !pb-10">
                <div className="self-center lg:w-full w-fit ">
                  <h1 className=" lg:text-[28px] md:text-[24px] text-[20px] text-[#1A202C] font-semibold ">
                    Testing, Deployment & Maintenance
                  </h1>
                  <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#2D3748] lg:!py-10 !py-5  ">
                    We perform rigorous QA and security testing before deployment.
                    After launch, we offer ongoing support, updates, and maintenance to keep things running smoothly.
                  </p>
                  <p className="lg:text-[18px] md:text-[16px] text-[14px] text-[#2D3748] lg:!py-4 !py-2  ">
                    Built, launched, and backed.
                  </p>
                  <div className="lg:text-[18px] md:text-[16px] text-[14px] lg:!py-6 !py-4 ">
                    <p className=" !pl-6 text-[#AD46FF] border-l-3 border-[#AD46FF]">
                      Post-deployment, we remain your tech partner—ensuring stability,
                      improving performance, and helping you iterate fast as your business grows.
                    </p>
                  </div>
                </div>

                <div className=" w-full  place-items-center lg:h-[60vh] md:h-[80vh]  ">
                  <img
                    alt=""
                    src={software8}
                    className="w-[100%] h-[100%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Software_Page;
