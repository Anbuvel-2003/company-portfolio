import React, { useState } from "react";
import img1 from "../assets/choose2.png";
import img2 from "../assets/choose2.png";
import img3 from "../assets/choose3.png";
import img4 from "../assets/choose4.png";
import img5 from "../assets/choosebg.png";
import imgh1 from "../assets/Missionhover.png";
import imgh2 from "../assets/Visionhover.png";
import imgh3 from "../assets/Strategyhover.png";
import imgh4 from "../assets/Philosophyhover.png";
import bg1 from "../assets/Mission.png";
import bg2 from "../assets/Vision.png";
import bg3 from "../assets/Strategy.png";
import bg4 from "../assets/Philosophy.png";

// ✅ Card component
const Card = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative h-[300px] rounded-[20px] shadow-2xl overflow-hidden bg-[#F8F4FF] transition-all duration-500`}
      style={{
        backgroundImage:`url(${isHovered ? item.bg : img5})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay on hover */}
      {isHovered && <div className="absolute inset-0 bg-black/50 z-0" />}

      {/* Center or Top Content */}
      <div
        className={`absolute inset-0 z-50 flex flex-col items-center text-center px-6 transition-all duration-500 ${
          isHovered ? "justify-start !pt-15" : "justify-center"
        }`}
      >
        <img
          src={isHovered ? item.imagehr : item.image}
          alt=""
          className="w-16 h-16 object-contain mb-3 transition-all duration-500 "
        />
        <h2
          className={`text-[20px] font-syne capitalize font-semibold transition-colors duration-500 ${
            isHovered ? "text-white" : "text-[#AD46FF]"
          }`}
        >
          {item.q1}
        </h2>

        {/* q2 appears on hover */}
        <p
          className={`mt-4 text-[16px] font-syne text-white transition-all duration-500 ease-in-out ${
            isHovered ? "opacity-100 translate-y-10" : "opacity-0 translate-y-4"
          }`}
        >
          {item.q2}
        </p>
      </div>
    </div>
  );
};

// ✅ Choose component
function Choose() {
  const choose = [
    {
      id: 1,
      image: img1,
      imagehr: imgh1,
      bg: bg1,
      q1: "Our Mission",
      q2: "To build user-focused, future-ready platforms that drive growth.",
    },
    {
      id: 2,
      image: img2,
      imagehr: imgh2,
      bg: bg2,
      q1: "Our Vision",
      q2: "Redefining digital transformation with the purpose, innovation, and long-term impact.",
    },
    {
      id: 3,
      image: img3,
      imagehr: imgh3,
      bg: bg3,
      q1: "Our Strategy",
      q2: "Combining research, agility, and design to scale digital success.",
    },
    {
      id: 4,
      image: img4,
      imagehr: imgh4,
      bg: bg4,
      q1: "Our Philosophy",
      q2: "Quality, clarity, and collaboration shape every solution we create.",
    },
  ];

  return (
    <div className="px-5 lg:flex grid lg:px-20 lg:!m-20 md:!m-20 !m-10">
      {/* Section Heading */}
      <div className="mb-10 ">
        <div className="bg-[#F0F1FF] !py-2 !px-4 w-fit rounded-[10px]">
          <h2 className="text-[#9F70FD] text-[14px] font-syne capitalize">
            Why Choose Us
          </h2>
        </div>
        <p className="text-[36px] md:text-[50px] lg:text-[58px] font-syne mt-4">
          Delivering impactful IT solutions to drive your success
        </p>
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
        {choose.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

// ✅ Export default
export default Choose;
