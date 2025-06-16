import React from "react";
import Intro from "../../../component/intro";
import WhoWeAre from "../../../component/WhoWeAre";
import News_section from "../../../component/News";
import Client_section from "../../../component/client";
import ReadOurNews from "../../../component/ReadOurNews";
import Meetourclient from "../../../component/meetourclient";

function Main() {
  return (
    <div className="relative">
      <div className="absolute left-10 top-0 h-full w-[1px] bg-[#5ca7ee]" />
      <div className="pl-4">
        <div className="lg:h-screen inset-1 bg-gradient-to-bl from-white via-white to-blue-100 top-1 right-1">
          <div className="h-[90%]">
            <Intro />
          </div>
          <div className="">
            <div className="!ml-10 !mb-10 border-l-2 !pl-5 flex justify-between lg:w-[90vw] h-[5%]">
              <h2 className="font-mono text-[14px] text-black capitalize">
                Who <br /> We Are
              </h2>
            </div>
          </div>
        </div>
        <WhoWeAre />
        <div className="!ml-10 border-l-2 !pl-5">
          <h2 className="font-mono text-[14px] text-black capitalize">
            Who <br /> We Are
          </h2>
        </div>
        <ReadOurNews />
        <div className="!ml-10 border-l-2 !pl-5">
          <h2 className="font-mono text-[14px] text-black capitalize">
            Read <br /> Our News
          </h2>
        </div>
        <News_section />
        <Client_section />
        <div className="!m-10 border-l-2 !pl-5">
          <h2 className="font-mono text-[14px] text-black capitalize">
            meet <br /> our client
          </h2>
        </div>
        <Meetourclient />
      </div>
    </div>
  );
}

export default Main;
