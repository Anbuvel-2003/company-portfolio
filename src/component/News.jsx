import React from "react";

function News_section() {
  return (
    <section class="py-20 px-6 md:px-16 !p-40 justify-items-center">
      <div class="max-w-7xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-20 md:text-left ">
        <div class="relative">
          <div
            class="text-[200px] bg-gradient-to-r  bg-clip-text to-[#dfecfc] from-[#c4b7e5] text-transparent font-bold absolute -top-35 !-left-20 -z-10  md:left-0"
            data-aos="fade-left"
          >
            <h2>01</h2>
          </div>
          <h3 class="text-4xl font-syne text-black">
            Strategy- <br />
            First <br /> Methodology
          </h3>
          <p class="text-black text-[18px] mt-4">
            We start with thorough planning and research in order to understand
            your objectives, target market, and sector. This strategic basis
            guarantees that each initiative is in line with your company's
            goals.
          </p>
          <div class="mt-6 inline-flex items-center group gap-2">
            <span class="block w-14 h-0.5  bg-[#57b8e0] mb-2 mx-auto md:mx-0 transition-all duration-500 group-hover:w-0 group-hover:opacity-0"></span>
            <a
              href="#"
              class="text-xs tracking-widest font-semibold uppercase ml-2 text-black"
            >
              View More
            </a>
          </div>
        </div>
        <div class="relative">
          <div
            class="text-[200px] bg-clip-text bg-gradient-to-r to-[#dfecfc] from-[#c4b7e5] text-transparent font-bold absolute -top-35 !-left-20 -z-10  md:left-0"
            data-aos="fade-left"
          >
            02
          </div>
          <h3 class="text-4xl font-syne text-black">
            User-
            <br />
            Centric <br /> Design
          </h3>
          <p class="text-black text-[18px] mt-4">
            Our design strategy is centered on producing user-friendly,
            beautifully designed interfaces that foster interaction while
            strengthening the user experience on all platforms.
          </p>
          <div class="mt-6 inline-flex items-center group gap-2">
            <span class="block w-14 h-0.5 bg-[#57b8e0] mb-2 mx-auto md:mx-0 transition-all duration-500 group-hover:w-0 group-hover:opacity-0"></span>
            <a
              href="#"
              class="text-xs tracking-widest font-semibold uppercase ml-2 text-black"
            >
              View More
            </a>
          </div>
        </div>
        <div class="relative">
          <div
            class="text-[200px] bg-clip-text bg-gradient-to-r to-[#dfecfc] from-[#c4b7e5] text-transparent font-bold absolute -top-35 !-left-20 -z-10  md:left-0"
            data-aos="fade-left"
          >
            03
          </div>
          <h3 class="text-4xl font-syne text-black">
            Quality & <br /> Performance <br /> Driven
          </h3>
          <p class="text-black text-[18px] mt-4">
            We guarantee that your product is safe, scalable, and designed to
            function at the best levels across platforms and devices through
            meticulous evaluation and performance optimization.
          </p>
          <div class="mt-6 inline-flex items-center group gap-2">
            <span class="block w-14 h-0.5 bg-[#57b8e0] mb-2 mx-auto md:mx-0 transition-all duration-500 group-hover:w-0 group-hover:opacity-0"></span>
            <a
              href="#"
              class="text-xs tracking-widest font-semibold uppercase ml-2 text-black"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default News_section;
