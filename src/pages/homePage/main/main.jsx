import React from "react";
import Intro from "../../../component/intro";
import WhoWeAre from "../../../component/WhoWeAre";
import News_section from "../../../component/News";
import Client_section from "../../../component/client";
import ReadOurNews from "../../../component/ReadOurNews";
import Meetourclient from "../../../component/meetourclient";
import Process from "../../../component/process";
import Faq from "../../../component/Faq";
import { FaQ } from "react-icons/fa6";
import Collab from "../../../component/collab";
import Choose from "../../../component/chooseus";

function Main() {
  const newsData = [
    {
      id: "01",
      title: "Strategy- First Methodology",
      description:
        "We start with planning and research in order to understand your objectives, target market, and sector. This strategic basis guarantees that each initiative is in line with your company's goals.",
      link: "#",
    },
    {
      id: "02",
      title: "User -Centric Design",
      description:
        "Our design strategy is centered on producing user-friendly, beautifully designed interfaces that foster interaction while strengthening the user experience on all platforms.",
      link: "#",
    },
    {
      id: "03",
      title: "Quality & Performance Driven",
      description:
        "We guarantee that your product is safe, scalable, and designed to function at the best levels across platforms and devices through meticulous evaluation and performance optimization.",
      link: "#",
    },
  ];
  return (
    <div className="relative">
      <div className="absolute left-10 top-0 h-full " />
      <div className="pl-4">
        <div className="lg:h-screen inset-1  top-1 right-1">
          <div className="h-[90%]">
            <Intro />
          </div>
        </div>
        <Process />
        <ReadOurNews />
        {/* <News_section newsItems={newsData} /> */}
        <Collab />
        <Choose />
        <Client_section />
        <Faq/>
    
      </div>
    </div>
  );
}

export default Main;
