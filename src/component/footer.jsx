import React from "react";
import Logo from "../assets/logo.png";

function Footer_section() {
  return (
    <div className="">
      {/* footer section */}
      <div className="bg-primary lg:!p-40 md:!pl-40 !p-20">
        <div className="gap-6 grid ">
          <div className="">
            <h3 className="text-5xl text-white font-syne">VineAtZ</h3>
            {/* <img
              src={Logo}
              alt={`client-`}
              className="lg:w-[8vw] lg:h-[8vh] md:w-[6vw] md:h-[6vh] sm:h-[4vh] sm:w-[vw] h-[4vh] w-[10vw] !ml-10 contain"
            /> */}
          </div>
          <div className="lg:inline-flex md:grid sm:w-full bg-primary">
            <div className="gap-2 sm:grid w-[100%] md:flex md:w-full">
              <div className="grid lg:w-1/4 md:w-1/3 sm:w-full !gap-5  items-center justify-items-start">
                <a href="/footer1" className="text-white">
                  info@vineatz.com
                </a>
                <a href="/footer1" className="text-white">
                  admin@vineatz.com
                </a>
                <a href="/footer1" className="text-white">
                  P : 94881 60083
                </a>
                <a href="/footer1" className="text-white">
                  T : 91 422 4711 021
                </a>
              </div>
              <div className="!mt-5 lg:!mt-0 md:!mt-0 grid lg:!gap-2  md:!gap-2 !gap-5 lg:w-1/6 md:w-1/3 sm-w-full justify-items-start">
                <a href="/test/" className="text-white uppercase">
                  Main Home
                </a>
                <a href="/test/ProductSection" className="text-white uppercase">
                  products
                </a>
                <a href="/test/portfolio" className="text-white uppercase">
                  Portfolio
                </a>
                <a href="/test/blogsection" className="text-white uppercase">
                  blog
                </a>

                <a href="/test/Careerssection" className="text-white uppercase">
                  careers
                </a>
              </div>
              <div className="grid lg:!gap-2 md:!gap-2 !mt-5 md:!mt-0 lg:!mt-0 !gap-5 lg:w-1/3 md:w-1/3 justify-items-start">
                <a href="/test/aboutUs" className="text-white uppercase">
                  About Us
                </a>
                <a href="/test/contactUs" className="text-white uppercase">
                  contact Us
                </a>

                <a href="/footer1" className="text-white uppercase">
                  Cookie Policy
                </a>
                <a href="/footer1" className="text-white uppercase">
                  Privacy Policy
                </a>
                <a href="/footer1" className="text-white uppercase">
                  Terms of service
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/ w-[90%] sm:!pt-19 sm:w-full !mt-5 md:!mt-0 lg:!mt-0">
              <div className="grid gap-5">
                <h3 className="text-white text-3xl">Our Newsletter</h3>
                <input
                  type="text"
                  id="default-input"
                  className="w-full border-b-1 p-5  border-borderline"
                  placeholder="Your email"
                ></input>
                <div class="mt-6 inline-flex items-center group gap-2">
                  <span class="block w-14 h-0.5 bg-white mb-2 mx-auto md:mx-0 transition-all duration-500 group-hover:w-0 group-hover:opacity-0"></span>
                  <a
                    href="#"
                    class="text-xs text-white tracking-widest font-semibold uppercase ml-2"
                  >
                    subscribe
                  </a>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="lg:flex md:flex grid lg:w-[30%] md:w-[70%] lg:!gap-20 md:!gap-20 !gap-5">
            <div className="">
              <h3 className="text-white font-medium capitalize">Registered Office : </h3>
              <span className="text-white font-medium capitalize">Floor, Krishnagiri to Salem Highways, Near Nsk Landmark, Krishnagiri-635001.</span>
            </div>
            <div>
              <h3 className="text-white font-medium capitalize">Corporate Office :</h3>
              <span className="text-white font-medium capitalize">H-22, Peelamedu, HUDCO Colony, Coimbatore, Tamil Nadu 641004</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:!pl-40 !pl-20 md:!pl-40 !pt-5 lg:!pb-20 md:!pb-20 !pb-10 sm:!pb-10 bg-primary">
        <h4 className="text-[#6e6e6e] ">
          © 2022 <a href="/">Qode Interactive</a>, All Rights Reserved
        </h4>
      </div>
    </div>
  );
}

export default Footer_section;
