import testingbanner from "../../../assets/testingbanner.png";
import testing1 from "../../../assets/testing1.png";
import testing2 from "../../../assets/testing2.png";
import testing3 from "../../../assets/testing3.png";
import testing4 from "../../../assets/testing4.png";
import service1 from "../../../assets/service1.png";
import service2 from "../../../assets/service2.png";
import service3 from "../../../assets/service3.png";

function Testing_Page() {
  const testing = [
    {
      id: 1,
      image: testing1,
      q1: "Test Automation",
      q2: "Enhance your testing scope while reducing time and cost through automation.",
    },
    {
      id: 2,
      image: testing2,
      q1: "Functional Testing",
      q2: "Ensure your product development aligns seamlessly with comprehensive functional testing.",
    },
    {
      id: 3,
      image: testing3,
      q1: "Performance Testing",
      q2: "Accurate guidelines to ensure high availability, performance, and speed of your application.",
    },
    {
      id: 4,
      image: testing4,
      q1: "Security Testing",
      q2: "Fortify your digital defenses with expert security testing.",
    },
  ];
  const service = [
    {
      id: 1,
      image: service1,
      q1: "End-to-end testing expertise",
      q2: "We provide end-to-end testing expertise, from Agile to post- development.",
    },
    {
      id: 2,
      image: service2,
      q1: "A second pair of hands",
      q2: "Extend your team's capabilities with Testvox's collaborative support.",
    },
    {
      id: 3,
      image: service3,
      q1: "Expert opinion at your service",
      q2: "Leverage Testvox's deep industry knowledge for insightful testing strategies.",
    },
  ];
  return (
    <section className="">
      <div className="!mt-15">
        <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
          <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl text-center ">
            Testing services
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid  sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-1/2 w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={testingbanner}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="lg:w-1/2 md:w-1/2 w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <h3 className="text-[20px] text-base/10 ">
              Our UI/UX design services are crafted to elevate your digital
              presence with precision and creativity. We begin by understanding
              your goals and your audience, ensuring that every design decision
              aligns with your brand’s vision. Our approach integrates user
              research, wireframing, and prototyping to create intuitive and
              engaging interfaces.Our UI/UX design services are crafted to
              elevate your digital presence with precision and creativity. We
              begin by understanding your goals and your audience, ensuring
            </h3>
          </div>
        </div>
        <div>
          <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center !my-10">
            Technologies used
          </h3>
          <div className="bg-[#F8F4FF] !py-10 !px-5"></div>
        </div>
      </div>
      <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10">
        <div>
          <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center !my-5">
            Enhance Your Software Quality with{" "}
            <span className="text-[#AD46FF]">Vineatz Technologies</span>
          </h3>
          <h3 className="lg:text-[23px] md:text-[20px] sm:text-[18px] text-[16px] font-syne text-[#788094] text-center">
            We helps you to acelerate your Product Releases with Our Expert
            Testing team and ensuring optimal quality for your apps.
          </h3>
        </div>
        <div className="lg:flex grid !mt-5">
          <div className="lg:w-1/2 w-full grid lg:grid-cols-2 grid-cols-1 !gap-5 lg:!m-10 lg:mb-0 !mb-10">
            {testing?.map((item, index) => {
              const extraMarginTop = index === 1 || index === 3 ? "40px" : "0";
              return (
                <div style={{ marginTop: extraMarginTop }}>
                  <div
                    key={index}
                    className="!p-10 rounded-[10px] shadow-2xl !mt-5 "
                  >
                    <img src={item?.image} alt="" className="" />
                    <div>
                      <h2 className="text-black text-[20px] capitalize font-syne !my-5 ">
                        {item?.q1}
                      </h2>
                      <h2 className="text-[#555353] text-[18px] font-syne">
                        {item?.q2}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="lg:w-1/2 w-full place-items-center place-content-center">
            <img src={testingbanner} alt="" className=" object-contain " />
          </div>
        </div>
      </div>
      <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10 ">
        <div>
          <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center !my-5">
            Our Ways of Partnering
          </h3>
        </div>
        <div className="!mt-20">
          <div className="grid lg:grid-cols-3 grid-cols-1 lg:!gap-5 ">
            {service?.map((item, index) => {
              return (
                <div className="!mb-[70px]">
                  <div
                    key={index}
                    className="rounded-[10px] shadow-2xl lg:!p-20 md:!p-15 !p-10 relative"
                  >
                    <div className="absolute lg:top-[-20%] lg:left-[40%] md:left-[45%] left-[30%] top-[-30%]">
                      <img src={item?.image} className="" alt="" />
                    </div>
                    <div className="place-items-center">
                      <h2 className="text-[20px] text-black font-syne capitalize !mb-3 text-center">
                        {item?.q1}
                      </h2>
                      <h2 className="text-[16px] text-[#555353] font-syne text-center">
                        {item?.q2}
                      </h2>
                    </div>
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

export default Testing_Page;
