import React from "react";
import Meetourclient from "../../../component/meetourclient";
import Team1 from "../../../assets/team-1.jpeg";
import Team2 from "../../../assets/team-2.jpeg";
import Team3 from "../../../assets/team-3.jpeg";
import Team4 from "../../../assets/team-4.jpeg";
import Team5 from "../../../assets/team-5.jpeg";
import Team6 from "../../../assets/team-6.jpeg";

function OurTeam() {
  const Outteamdata = [
    {
      id: 0,
      url: Team6,
      name: "Vineeth Sharma",
      role: "Chief Executive Officer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 4,
      url: Team2,
      name: "Guhan",
      role: "Administrator",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 1,
      url: Team1,
      name: "Anbuvel",
      role: "Full Stack Developer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 2,
      url: Team4,
      name: "sabareesh",
      role: "Designer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    {
      id: 3,
      url: Team3,
      name: "Sujith",
      role: "Content Writer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
    
    {
      id: 5,
      url: Team5,
      name: "Sowndhar",
      role: "Front End developer",
      facebookurl: "",
      twitter: "",
      linkedin: "",
    },
  ];
  return (
    <div className="!pt-15">
      <div className="lg:!p-10 md:!p-20 !p-5">
        <h3 className="text-[#9F70FD] font-syne lg:text-6xl text-5xl !pb-20 !py-10 text-center">
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
                      className=" duration-300"
                      alt=""
                    />
                    {/* <div className="absolute inset-0 flex opacity-0 hover:opacity-80 justify-evenly items-center hover:bg-white">
                      <p className="text-[16px] text-black  hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text uppercase">
                        Facebook
                      </p>
                      <p className="text-[16px] text-black  hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text uppercase">
                        Twitter
                      </p>
                      <p className="text-[16px] text-black  hover:text-transparent hover:bg-gradient-to-r hover:from-indigo-500 hover:to-cyan-400 hover:bg-clip-text uppercase">
                        linkedin
                      </p>
                    </div> */}
                  </div>
                  <div className="">
                    <h2 className="text-center font-syne text-black lg:text-[30px] md:text-[20px]">
                      {item?.name}
                    </h2>
                    <h2 className="text-center font-syne text-[#acabac] text-[13px]">
                      {item?.role}
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
