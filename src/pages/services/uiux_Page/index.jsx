import Uxuibanner from "../../../assets/Uxuibanner.png";
import Ux1 from "../../../assets/Ux1.png";
import Ux2 from "../../../assets/Ux2.png";
import Ux3 from "../../../assets/Ux3.png";
import Ux4 from "../../../assets/Ux4.png";
import Ux5 from "../../../assets/Ux5.png";
import Ux6 from "../../../assets/Ux6.png";
function UIUX_Page() {
  const Question = [
    {
      id: 1,
      image: Ux1,
      q1: "Expertise in User-Centric Design",
      q2: "We specialize in creating user-centric design solutions, ensuring a seamless and intuitive digital experience by catering to user needs and preferences.",
    },
    {
      id: 2,
      image: Ux2,
      q1: "Collaborative Approach",
      q2: "To guarantee that our clients' visions are realized, we work closely with them throughout the whole development process.",
    },
    {
      id: 3,
      image: Ux3,
      q1: "Innovation",
      q2: "To produce creative solutions that go above and beyond expectations, we keep up with the most recent UI/UX trends, technologies, and processes.",
    },
    {
      id: 4,
      image: Ux4,
      q1: "Customer Satisfaction",
      q2: "Customer satisfaction is our main priority, and we work hard to complete projects on schedule, within budget, and with the highest standards of quality.",
    },
    {
      id: 5,
      image: Ux5,
      q1: "Continuous Learning and Improvement",
      q2: "We continuously learn to stay updated with the latest trends and technologies in UI/UX design to provide innovative solutions to our clients.",
    },
    {
      id: 6,
      image: Ux6,
      q1: "Refinement through Research",
      q2: "Our team delves into comprehensive research and analysis, gathering insights intouser behaviour, market trends, and competitor strategies",
    },
  ];
  const question1 = [
    {
      id:1 ,
      image:Ui1,
      q1:"Discover Phase",
      q2:""
    }
  ]
  return (
    <section className="">
      <div className="!mt-15">
        <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
          <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl text-center ">
            UI/UX Design Service
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid  sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-1/2 w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={Uxuibanner}
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
              begin by understanding your goals and your audience, ensuring{" "}
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
        <div className="lg:flex grid lg:!gap-20">
          <div className="lg:w-1/2 ">
            <div className="bg-[#F0F1FF] !py-3 !px-4 w-fit rounded-[20px]">
              <h2 className="text-[#9F70FD] text-[16px] font-syne capitalize ">
                Why Choose Us
              </h2>
            </div>
            <h2 className="text-black capitalize font-syne lg:text-[60px] md:text-[50px] sm:text-[30px] text-[25px] lg:mb-0 !mb-15">
              Why Choose Us as Your UI/UX Design Partner?
            </h2>
          </div>
          <div className="lg:w-1/2 ">
            {Question?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="!p-5 bg-white rounded-[5px] shadow-2xl !mb-5"
                >
                  <div className="flex items-center !gap-5">
                    <div>
                      <img alt="" className="" src={item?.image} />
                    </div>
                    <div>
                      <h3 className="text-black font-syne text-[20px] capitalize">
                        {item?.q1}
                      </h3>
                    </div>
                  </div>
                  <div className="!mt-3 ">
                    <h2 className="text-black text-[16px]">{item?.q2}</h2>
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
