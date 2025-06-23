import React, { useRef } from "react";
import Meetourclient from "../../../component/meetourclient";
import About1 from "../../../assets/About-us-img-1.jpg";
import ContactMap from "../../../component/constactmap";
import Projectreport from "../../../component/projectsreport";

function ContactUs() {
  const formRef = useRef(null);
  const handleSubmit = (e) => {
    console.log(e?.preventDefault());

    // e.preventDefault();
    // const formData = new FormData(formRef.current);
    // const data = Object.fromEntries(formData);
    // console.log('Form submitted:', data);
    // alert('Thank you for your message! We\'ll get back to you soon.');
    // formRef.current.reset();
  };
  return (
    <div className="!pt-15">
      <div className="place-self-center lg:!p-20 md:!p-20 !p-5">
        <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl ">
          Contact Us
        </h3>
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2 w-full lg:mb-0 ">
          <img src={About1} alt="software1" className="" />
        </div>
        <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 ">
          <div className="w-[60%] lg:mt-0 md:mt-0 !mt-10">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
              Built for Your Business
            </h3>
            <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
              Data-Driven <br /> Growth
            </h2>
            <div className="">
              <p className="text-black text-[16px] font-normal">
                Our marketing strategies are rooted in analytics and optimized
                for results. From user behavior to audience segmentation, we
                tailor content, SEO, email flows, and ads that align with your
                business KPIs—turning reach into revenue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" place-self-center !mt-10">
        <div className=" justify-items-center">
          <h2 className="text-[#9e9e9e] font-syne lg:text-4xl sm:text-3xl">
            Connect With our team!
          </h2>
          <h4 className="text-black font-syne lg:text-2xl sm:text-2xl !mt-5 w-1/2 text-center">
            Reach out to us! We're here to discuss your projects, brainstorm
            ideas and answer any questions you might have.
          </h4>
          <div className="lg:flex md:flex grid lg:!mt-10 md:!mt-10 !mt-5 w-full">
            <div className="lg:w-1/3 !mt-5 lg:!mt-0 md:!mt-0">
              <h3 className="text-black font-syne lg:text-2xl sm:text-2xl text-center">
                have a great idea ?
              </h3>
              <h3 className="text-black font-syne lg:text-2xl sm:text-2xl text-center">
                abc@gmail.com
              </h3>
              <h3 className="text-black font-syne font-[18px] w-[1/3] text-center">
                tell Us more about your business idea to get consulted
              </h3>
            </div>
            <div className="lg:w-1/3 !mt-5 lg:!mt-0 md:!mt-0">
              <h3 className="text-black font-syne lg:text-2xl sm:text-2xl text-center">
                Got questions to ask ?
              </h3>
              <h3 className="text-black font-syne lg:text-2xl sm:text-2xl text-center">
                Support abc @gmail.com
              </h3>
              <h3 className="text-black font-syne font-[18px] w-[1/3] text-center">
                Discuss your projects with us. We're open to question
              </h3>
            </div>
            <div className="lg:w-1/3 !mt-5 lg:!mt-0 md:!mt-0">
              <h3 className="text-black font-syne lg:text-2xl sm:text-2xl text-center">
                We are hiring!
              </h3>
              <h3 className="text-black font-syne lg:text-2xl sm:text-2xl text-center">
                abc@gmail.com
              </h3>
              <h3 className="text-black font-syne font-[18px] w-[1/3] text-center">
                We do more for your career. Come and join Us
              </h3>
            </div>
          </div>
        </div>
        <ContactMap />
        <div className="!mt-10 justify-items-center !mb-10">
          <h3 className="text-[#9e9e9e] font-syne lg:text-4xl sm:text-3xl">
            Where We Work!
          </h3>
          <h3 className="text-black font-syne lg:text-2xl sm:text-2xl !mt-5 text-center w-1/2">
            visit our office locations to experience the environment where our
            teams thrives. Our spaces are Spaces are designed to inspire and
            support our work{" "}
          </h3>
        </div>
        {/* <Projectreport/> */}
        <div className="!mt-10 justify-items-center !mb-10">
          <h3 className="text-[#9e9e9e] font-syne lg:text-4xl sm:text-3xl">
            Contact
          </h3>
          <h3 className="text-black font-syne lg:text-2xl sm:text-2xl !mt-5 text-center w-1/2">
            Have a question or an idea? Drop us a line and our business
            development team will be happy to connect.
          </h3>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6 !p-10 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <label
                htmlFor="name"
                className="block text-[#9e9e9e] font-syne lg:text-2xl sm:text-xl !mb-2"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full !px-4 !py-3 border border-gray-300 rounded-lg transition duration-200 !mb-3"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[#9e9e9e] font-syne lg:text-2xl sm:text-xl !mb-2"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full !px-4 !py-3 border border-gray-300 rounded-lg  transition duration-200 !mb-3"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-[#9e9e9e] font-syne lg:text-2xl sm:text-xl !mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full !px-4 !py-3 border border-gray-300 rounded-lg  transition duration-200 !mb-3"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-[#9e9e9e] font-syne lg:text-2xl sm:text-xl !mb-2"
            >
              Your Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              className="w-full !px-4 !py-3 border border-gray-300 rounded-lg transition duration-200 !mb-3"
              placeholder="Tell us about your project..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full cursor-pointer relative overflow-hidde border border-transparent hover:!bg-white hover:text-black hover:border-black bg-gradient-to-r from-purple-500 to-sky-400 text-white font-medium !py-3 !px-6 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      <Meetourclient />
    </div>
  );
}

export default ContactUs;
