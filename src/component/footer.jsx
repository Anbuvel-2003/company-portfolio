import React from "react";
import Logo from "../assets/logo.png";
import { FaFacebookSquare } from "react-icons/fa";
import {
  FaLinkedin,
  FaSquareInstagram,
  FaSquareXTwitter,
  FaSquareYoutube,
} from "react-icons/fa6";

function Footer_section() {
  return (
    // <div className="">
    //   {/* footer section */}
    //   <div className="bg-primary lg:!p-40 md:!pl-40 !p-20">
    //     <div className="gap-6 grid ">
    //       <div className="">
    //         <h3 className="text-5xl text-white font-syne">VineAtZ</h3>
    //         {/* <img
    //           src={Logo}
    //           alt={`client-`}
    //           className="lg:w-[8vw] lg:h-[8vh] md:w-[6vw] md:h-[6vh] sm:h-[4vh] sm:w-[vw] h-[4vh] w-[10vw] !ml-10 contain"
    //         /> */}
    //       </div>
    //       <div className="lg:inline-flex md:grid sm:w-full bg-primary">
    //         <div className="gap-2 sm:grid w-[100%] md:flex md:w-full">
    //           <div className="grid lg:w-1/4 md:w-1/3 sm:w-full !gap-5  items-center justify-items-start">
    //             <a href="/footer1" className="text-white">
    //               info@vineatz.com
    //             </a>
    //             <a href="/footer1" className="text-white">
    //               admin@vineatz.com
    //             </a>
    //             <a href="/footer1" className="text-white">
    //               P : 94881 60083
    //             </a>
    //             <a href="/footer1" className="text-white">
    //               T : 91 422 4711 021
    //             </a>
    //           </div>
    //           <div className="!mt-5 lg:!mt-0 md:!mt-0 grid lg:!gap-2  md:!gap-2 !gap-5 lg:w-1/6 md:w-1/3 sm-w-full justify-items-start">
    //             <a href="/" className="text-white uppercase">
    //               Main Home
    //             </a>
    //             <a href="/ProductSection" className="text-white uppercase">
    //               products
    //             </a>
    //             <a href="/portfolio" className="text-white uppercase">
    //               Portfolio
    //             </a>
    //             <a href="/blogsection" className="text-white uppercase">
    //               blog
    //             </a>

    //             <a href="/Careerssection" className="text-white uppercase">
    //               careers
    //             </a>
    //           </div>
    //           <div className="grid lg:!gap-2 md:!gap-2 !mt-5 md:!mt-0 lg:!mt-0 !gap-5 lg:w-1/3 md:w-1/3 justify-items-start">
    //             <a href="/aboutUs" className="text-white uppercase">
    //               About Us
    //             </a>
    //             <a href="/contactUs" className="text-white uppercase">
    //               contact Us
    //             </a>

    //             <a href="/footer1" className="text-white uppercase">
    //               Cookie Policy
    //             </a>
    //             <a href="/footer1" className="text-white uppercase">
    //               Privacy Policy
    //             </a>
    //             <a href="/footer1" className="text-white uppercase">
    //               Terms of service
    //             </a>
    //           </div>
    //         </div>
    //         <div className="lg:w-1/2 md:w-1/ w-[90%] sm:!pt-19 sm:w-full !mt-5 md:!mt-0 lg:!mt-0">
    //           <div className="grid gap-5">
    //             <h3 className="text-white text-3xl">Our Newsletter</h3>
    //             <input
    //               type="text"
    //               id="default-input"
    //               className="w-full border-b-1 p-5  border-borderline"
    //               placeholder="Your email"
    //             ></input>
    //             <div class="mt-6 inline-flex items-center group gap-2">
    //               <span class="block w-14 h-0.5 bg-white mb-2 mx-auto md:mx-0 transition-all duration-500 group-hover:w-0 group-hover:opacity-0"></span>
    //               <a
    //                 href="#"
    //                 class="text-xs text-white tracking-widest font-semibold uppercase ml-2"
    //               >
    //                 subscribe
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //         <div></div>
    //       </div>
    //       <div className="lg:flex md:flex grid lg:w-[30%] md:w-[70%] lg:!gap-20 md:!gap-20 !gap-5">
    //         <div className="">
    //           <h3 className="text-white font-medium capitalize">Registered Office : </h3>
    //           <span className="text-white font-medium capitalize">Floor, Krishnagiri to Salem Highways, Near Nsk Landmark, Krishnagiri-635001.</span>
    //         </div>
    //         <div>
    //           <h3 className="text-white font-medium capitalize">Corporate Office :</h3>
    //           <span className="text-white font-medium capitalize">H-22, Peelamedu, HUDCO Colony, Coimbatore, Tamil Nadu 641004</span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="lg:!pl-40 !pl-20 md:!pl-40 !pt-5 lg:!pb-20 md:!pb-20 !pb-10 sm:!pb-10 bg-primary">
    //     <h4 className="text-[#6e6e6e] ">
    //       © 2022 <a href="/">Qode Interactive</a>, All Rights Reserved
    //     </h4>
    //   </div>
    // </div>
    <div className="w-full bg-primary lg:!p-20 md:!p-20 !p-10">
      <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 sm:grid sm:grid-cols-2">
        <div className="!mb-5">
          <div className="!mb-3">
            <span className="text-white text-[20px] font-syne uppercase">
              Company
            </span>
          </div>
          <div className="grid">
            <span className="!mb-1">
              <a
                href="/"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Main
              </a>
            </span>
            {/* <span className="!mb-1">
              {" "}
              <a
                href="/"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                product
              </a>
            </span> */}
            <span className="!mb-1">
              {" "}
              <a
                href="/portfolio"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Portfolio
              </a>
            </span>
            {/* <span className="!mb-1">
              {" "}
              <a
                href="/"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Blog
              </a>
            </span> */}
            <span className="!mb-1">
              {" "}
              <a
                href="/aboutUs"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                About Us
              </a>
            </span>
            {/* <span className="!mb-1">
              {" "}
              <a
                href="/"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Careers
              </a>
            </span> */}
            <span className="!mb-1">
              {" "}
              <a
                href="/contactUs"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Contact Us
              </a>
            </span>
            {/* <span className="!mb-1">
              {" "}
              <a
                href="/ourTeam"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Our team
              </a>
            </span> */}
          </div>
        </div>
        <div className="!mb-5">
          <div className="!mb-3">
            <span className="text-white text-[20px] font-syne uppercase">
              Services
            </span>
          </div>
          <div className="grid">
            <span className="!mb-1">
              {" "}
              <a
                href="/softwareSection"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Software Development
              </a>
            </span>
            <span className="!mb-1">
              {" "}
              <a
                href="/saasproductSection"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Saas app development
              </a>
            </span>
            <span className="!mb-1">
              {" "}
              <a
                href="/mobileappSection"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Mobile app development
              </a>
            </span>
            <span className="!mb-1">
              {" "}
              <a
                href="/webappSection"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Web app development
              </a>
            </span>
            <span className="!mb-1">
              {" "}
              <a
                href="/ecommerceSection"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                E-Commerce app development
              </a>
            </span>
            <span className="!mb-1">
              {" "}
              <a
                href="/uxuiSection"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                UI and UX Design
              </a>
            </span>
            <span className="!mb-1">
              {" "}
              <a
                href="testingSection"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Testing Services
              </a>
            </span>
            {/* <span className="!mb-1">
              {" "}
              <a
                href="/"
                className="text-[#6e6e6e] text-[16px] font-syne capitalize"
              >
                Digital marketing
              </a>
            </span> */}
          </div>
        </div>
        <div className="!mb-5">
          <div className="!mb-3">
            <span className="text-white text-[20px] font-syne uppercase">
              Corporate Office{" "}
            </span>
          </div>
          <div className="grid">
            <span className="text-[#6e6e6e] text-[16px] font-syne capitalize !mb-2">
              H-22, Peelamedu,
              <br className="!mb-2" />
              HUDCO Colony, Coimbatore,
              <br className="!mb-2" /> Tamil Nadu-641004
            </span>
            <span className="text-[#6e6e6e] text-[16px] font-medium capitalize">
              phone : 94881 60083
            </span>
            <span className="text-[#6e6e6e] text-[16px] font-syne capitalize">
              info@vineatztechnologies.com
            </span>
          </div>
        </div>
        <div className="!mb-5">
          <div className="!mb-3 ">
            <span className="text-white text-[20px] font-syne uppercase">
              Registered Office{" "}
            </span>
          </div>
          <div className="grid">
            <span className="text-[#6e6e6e] text-[16px] font-syne capitalize !mb-2">
              5/143, 1st Floor, Krishnagiri to Salem Highways,
              <br className="!mb-2" /> Near Nsk Landmark,
              <br className="!mb-2" />
              Krishnagiri-635001.
            </span>
            <span className="text-[#6e6e6e] text-[16px] font-medium capitalize">
              Phone : 94881 60083
            </span>
            <span className="text-[#6e6e6e] text-[16px] font-syne capitalize">
              info@vineatz.com
            </span>
          </div>
        </div>
      </div>
      <div className="lg:flex w-full !gap-10 lg:!py-10">
        <div className="grid w-[100%]  !mb-5">
          <span className="!mb-2">
            <a href="/" className="text-white text-[20px] font-syne uppercase">
              Vineatz
            </a>
          </span>
          <span className="text-[#6e6e6e] text-[16px] font-syne text-left">
            Vineatz Technology OPC Pvt Ltd is your trusted partner for high-impact
            IT and software solutions across mobile, web, and SaaS platforms.Our
            dedicated teams drive innovation through DevOps-led development,
            thorough testing, and best-in-class CI/CD practices.We fuse
            user-first UI/UX design with targeted digital marketing to boost
            customer engagement and brand visibility.At Vineatz, we’re
            passionate about empowering businesses with scalable, future-ready
            technology and results-driven service.
          </span>
        </div>
        <div className="lg:w-1/3">
          <span>
            <a href="/" className="text-white text-[20px] font-syne capitalize">
              Contact with us
            </a>
          </span>
          <div className="flex !mt-3 !gap-5">
            <div>
              <a
                href="https://www.facebook.com/profile.php?id=61576821402403"
                target="_blank"
              >
                <FaFacebookSquare size={45} color="#ffff" />
              </a>
            </div>
            <div>
              <a
                href="https://www.instagram.com/vineatztechnologies?igsh=dzJ4dno0anRwN2w2"
                target="_blank"
              >
                <FaSquareInstagram size={45} color="#ffff" />
              </a>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/company/vineatz-technologies/"
                target="_blank"
              >
                <FaLinkedin size={45} color="#ffff" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="h-[1px] w-[100%] bg-[#6e6e6e] !my-10"></div>
        <div className="lg:flex md:flex sm:flex  grid justify-between items-center">
          <div className="lg:mb-0 md:mb-0 sm:mb-0 !mb-5">
            <h4 className="text-[#6e6e6e] ">
              © 2025 <a href="/">Vineatz.</a> All Rights Reserved.
            </h4>
          </div>
          <div className="lg:flex md:flex sm:flex flex items-center !gap-3">
            <div>
              <a
                href="/privacy"
                className="text-[#6e6e6e] text-[14px] font-syne uppercase"
              >
                Privacy Policy
              </a>
            </div>
            <div>
              <span className="text-[#6e6e6e]">|</span>
            </div>
            <div>
              <a
                href="/terms"
                className="text-[#6e6e6e] text-[14px] font-syne uppercase"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer_section;
