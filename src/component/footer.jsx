import React from "react";

function Footer_section() {
  return (
    <div className="">
      <div className="md:h-[300px] lg:h-[50vh] sm:h-[60vh] h-[50%] bg-red-200  md:flex sm:grid">
        <div className="md:w-1/2 sm:h-full inline-flex bg-gradient-to-r from-sky-200 to-purple-200 w-full h-[30vh]">
          <div className="w-full items-center justify-items-center content-center">
            <h4 className=" w-[300px] text-4xl text-black font-semibold">
              Join Our Team
            </h4>
            <p className="w-[300px] text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudanti.
            </p>
          </div>
          <div className=" w-[100px] content-center">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </div>
        </div>
        <div className="md:w-1/2 sm:h-full  inline-flex bg-[#f3f3f3] w-full h-[30vh]">
          <div className="w-full items-center justify-items-center content-center">
            <h4 className=" w-[300px] text-4xl text-black font-semibold">
              Our Newsletter
            </h4>
            <p className="w-[300px] text-left">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudanti.
            </p>
          </div>
          <div className=" w-[100px] content-center">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* footer section */}
      <div className="bg-primary !p-40">
        <div className="gap-6 grid ">
          <div className="">
            <h3 className="text-5xl text-white">Deon</h3>
          </div>
          <div className="lg:inline-flex md:grid  bg-primary ">
            <div className="gap-2 sm:grid md:flex md:w-full lg: w-1/2">
              <div className="grid lg:w-1/4 md:w-1/3 sm:w-full  items-center justify-items-start">
                <a href="/footer1" className="text-white">
                  A: Seestrasse 21
                </a>
                <a href="/footer1" className="text-white">
                  T: 00 1 23 45 67 89
                </a>
                <a href="/footer1" className="text-white">
                  E: qi@example.com
                </a>
                <a href="/footer1" className="text-white">
                  T: 99 8 76 54 321
                </a>
              </div>
              <div className="grid gap-2 lg:w-1/6 md:w-1/3 sm-w-full justify-items-start">
                <a href="/footer1" className="text-white uppercase">
                  Main Home
                </a>
                <a href="/footer1" className="text-white uppercase">
                  Contact
                </a>
                <a href="/footer1" className="text-white uppercase">
                  Portfolio
                </a>
                <a href="/footer1" className="text-white uppercase">
                  Shop
                </a>
                <a href="/footer1" className="text-white uppercase">
                  Landing
                </a>
              </div>
              <div className="grid gap-2 lg:w-1/3 md:w-1/3 justify-items-start">
                <a href="/footer1" className="text-white uppercase">
                  About Us
                </a>
                <a href="/footer1" className="text-white uppercase">
                  About Me
                </a>
                <a href="/footer1" className="text-white uppercase">
                  Our Process
                </a>
                <a href="/footer1" className="text-white uppercase">
                  Our Team
                </a>
                <a href="/footer1" className="text-white uppercase">
                  Pricing Plans
                </a>
              </div>
            </div>
            <div className="w-1/2 sm:!pt-19 sm:w-full ">
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
        </div>
      </div>
      <div className="bg-primary !pl-40 !pb-20 sm:!pb-10 ">
        <h4 className="text-[#6e6e6e] ">
          © 2022 <a href="/">Qode Interactive</a>, All Rights Reserved
        </h4>
      </div>
    </div>
  );
}

export default Footer_section;
