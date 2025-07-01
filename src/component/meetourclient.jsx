function Meetourclient() {
  return (
    <div>
      <div className="md:h-[300px] lg:h-[50vh] sm:h-[60vh] h-[50%] bg-red-200  md:flex sm:grid">
        <div className="md:w-1/2 sm:h-full lg:inline-flex md:inline-flex grid bg-gradient-to-r from-sky-200 to-purple-100 w-full h-[30vh]">
          <div className="w-full !pl-10 items-center justify-items-center content-center">
            <h4 className=" w-[300px] lg:text-3xl md:text-3xl text-2xl  text-black font-syne">
              Our Team
            </h4>
            <p className="w-[300px] text-left">
              Our team blends deep expertise with a collaborative, friendly approach. We work closely to turn ideas into impactful, high-quality digital solutions.
            </p>
          </div>
          <div className="  lg:!mr-5 w-[50px]  h-[50px] place-content-center place-self-center border-1 justify-items-center    items-center rounded-[100px] border-[#c3c4f9]
          cursor-pointer">
            <svg
              class="w-6 h-6 text-gray-800"
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
        <div className="md:w-1/2 sm:h-full  lg:inline-flex md:inline-flex grid bg-[#f3f3f3] w-full h-[30vh]">
          <div className="w-full !pl-10 items-center justify-items-center content-center">
            <h4 className=" w-[300px] lg:text-3xl md:text-3xl text-2xl text-black font-syne">
              Our Newsletter
            </h4>
            <p className="w-[300px] text-left">
              Innovation moves fast; don't miss a beat. Stay up to date with our
              latest tech insights and behind-the-scenes defines at what we're
              putting together.
            </p>
          </div>
          <div className=" lg:!mr-5 w-[50px]  h-[50px] place-content-center place-self-center border-1 justify-items-center    items-center rounded-[100px] border-[#c3c4f9] cursor-pointer">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className=""
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
    </div>
  );
}

export default Meetourclient;
