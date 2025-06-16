function Meetourclient() {
  return (
    <div>
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
              Innovation moves fast; don't miss a beat. Stay up to date with our
              latest tech insights and behind-the-scenes defines at what we're
              putting together.(what we're building)
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
    </div>
  );
}

export default Meetourclient;
