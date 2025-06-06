import { useState } from "react";
import "./App.css";
import Footer_section from "./component/footer";
import Header from "./component/Header";
import Client_section from "./component/client";
import News_section from "./component/News";

function App() {
  return (
    // <div className="border-l-1 border-[#5ca7ee] ">
    //   {/* <Header /> */}
    //   {/* <div className="content"> */}

    //   {/* <FeaturesSection /> */}
    //   {/* <News_section /> */}
    //   <Client_section />
    //   <div className="!m-20 border-l-2 !pl-5">
    //     <h2 className="font-mono text-[14px] text-black capitalize">
    //       meet <br /> our client
    //     </h2>
    //   </div>
    //   <Footer_section />
    //   {/* {/* </div> */}
    // </div>
    <div className="relative">
      {/* Left vertical line */}
      <div className="absolute left-10 top-0 h-full w-[1px] bg-[#5ca7ee]" />

      {/* Main content */}
      <div className="pl-4">
        {" "} 
        {/* This adds spacing so content doesn't touch border */}
        {/* <Header /> */}
        {/* <FeaturesSection /> */}
        <News_section />
        <Client_section />
        <div className="!m-10 border-l-2 !pl-5">
          <h2 className="font-mono text-[14px] text-black capitalize">
            meet <br /> our client
          </h2>
        </div>
        <Footer_section />
      </div>
    </div>
  );
}

export default App;
