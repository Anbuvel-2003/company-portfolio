import React from "react";
import Meetourclient from "../../../component/meetourclient";
import About1 from "../../../assets/About-us-img-1.jpg";

function Blog_Section() {
  return (
    <div className="!pt-15">
      <div className="place-self-center lg:!p-20 md:!p-20 !p-5">
        <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl ">
          Blog
        </h3>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 w-full lg:mb-0 ">
          <img src={About1} alt="software1" className="" />
        </div>
        <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 ">
          <div className="w-[60%]">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
              Built for Your Business
            </h3>
            <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
              Data-Driven <br /> Growth
            </h2>
            <div className="">
              <p className="text-black text-[16px] font-normal">
                Our marketing strategies are rooted in analytics and optimized for results. From user behavior to audience segmentation, we tailor content, SEO, email flows, and ads that align with your business KPIs—turning reach into revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Meetourclient />
    </div>
  );}
export default Blog_Section;
