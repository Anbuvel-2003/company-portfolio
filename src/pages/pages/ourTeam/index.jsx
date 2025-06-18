import React from "react";
import Meetourclient from "../../../component/meetourclient";

function OurTeam() {
  const Outteamdata = [
    {
      id: 1,
      url: "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Team-img-5.jpg",
      name: "lynda lee",
      role: "Designer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 2,
      url: "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Team-img-5.jpg",
      name: "lynda lee",
      role: "Designer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 3,
      url: "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Team-img-5.jpg",
      name: "lynda lee",
      role: "Designer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 4,
      url: "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Team-img-5.jpg",
      name: "lynda lee",
      role: "Designer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 5,
      url: "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Team-img-5.jpg",
      name: "Bred Deen",
      role: "Designer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 6,
      url: "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Team-img-5.jpg",
      name: "lynda lee",
      role: "Designer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
  ];
  return (
    <div className="!pt-15">
      <div className="lg:!p-10 md:!p-20 !p-5">
        <h3 className="text-[#9e9e9e] font-syne lg:text-6xl text-5xl !pb-20 !py-10 text-center">
          Our Team
        </h3>
        <div className="flex flex-wrap justify-center items-center lg:!px-80 md:!px-10">
          {Outteamdata?.map((item, index) => {
            return (
              <div
                key={index}
                className="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full flex justify-center"
              >
                <div className="w-[80%] !mb-5">
                  <div className="flex relative">
                    <img
                      src={item?.url}
                      className="hover:opacity-10 duration-300"
                      alt=""
                    />
                    <div className="absolute inset-0 flex opacity-0 hover:opacity-80 justify-evenly items-center hover:bg-white">
                      <p className="text-[16px] text-black  hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text uppercase">
                        Facebook
                      </p>
                      <p className="text-[16px] text-black  hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text uppercase">
                        Twitter
                      </p>
                      <p className="text-[16px] text-black  hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text uppercase">
                        linkedin
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <h2 className="text-center font-syne text-black lg:text-[30px] md:text-[20px]">
                      {item?.name}
                    </h2>
                    <h2 className="text-center font-syne text-[#acabac] text-[13px]">
                      {item?.name}
                    </h2>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
