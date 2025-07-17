import React, { useRef, useState } from "react";
import Meetourclient from "../../../component/meetourclient";
import About1 from "../../../assets/contact.jpg";
import ContactMap from "../../../component/constactmap";
import Projectreport from "../../../component/projectsreport";
import emailjs from '@emailjs/browser';

function ContactUs() {
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_izs7lb5";
    const templateId = "template_rp7t40i";
    const publicKey = "XXtXUnqUm8Q0As020";
    const templateparams = {
      title: subject,
      name: name,
      message: message,
      email: email,
    };
    emailjs.send(serviceId, templateId, templateparams, publicKey)
      .then((response) => {
        console.log("email sent successfully", response);

      })
  };
  return (
    <div className="!mt-15">
      <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
        <h3 className="text-[#9F70FD] font-syne lg:text-[60px] md:text-[40px] text-[25px] text-center ">
          Contact Us
        </h3>
      </div>
      <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid md:grid-cols-1  sm:!m-10 !m-10">
        <div className="lg:w-1/2 md:w-full w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
          <img src={About1} alt="software1" className="rounded-[20px] w-[100%] h-[100%] object-contain" />
        </div>
          <div className="lg:w-1/2 md:w-full w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <div className="lg:text-[24px] md:text-[20px] text-[18px] text-[#788094] md:!pl-10 font-syne lg:leading-10 leading-10  ">
            <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
              Built for Your Business
            </h3>
            <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
              Get in Touch <br />
              With Our Experts
            </h2>
            <div className="">
              <p className="text-black text-[16px] font-normal">
                Stay ahead with expert insights and the latest in tech. Whether
                you're planning a project or exploring ideas, our team is just a
                message away.Let’s connect and turn possibilities into powerful
                digital outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" place-self-center !mt-25">
        <div className=" justify-items-center">
          <h2 className="text-[#000000] font-syne lg:text-4xl sm:text-3xl">
            Connect With our <span className="text-[#AD46FF] ">team!</span>
          </h2>
          <h4 className="text-black font-syne lg:text-[24px] md:text-[20px] text-[18px] !mt-5 w-1/2 text-center">
            Reach out to us! We're here to discuss your projects, brainstorm
            ideas and answer any questions you might have.
          </h4>
          <div className="lg:flex md:flex grid lg:!mt-10 md:!mt-10 !mt-5 w-full md:!px-10  !gap-10  ">
            <div className="lg:w-1/3 !mt-5 lg:!mt-0 md:!mt-0 bg-[#F9F6FF] rounded-[20px]">
              <h3 className="text-[#AD46FF] font-syne lg:text-[27px] md:text-[24px] text-[22px] !pt-5 text-center">
                have a great idea ?
              </h3>
              <h3 className="text-[#3F3F3F] font-medium lg:text-[18px] md:text-[16px] text-[14px] font-poppins !py-4 text-center">
                94881 60083
              </h3>
              <h3 className="text-black font-syne lg:text-[21px]  md:text-[18px]  sm:text-[16px] text-[14px] !w-full !pb-5 text-center">
                tell Us more about your business idea to get consulted
              </h3>
            </div>
            <div className="lg:w-1/3 !mt-5 lg:!mt-0 md:!mt-0 rounded-[20px] bg-[#F9F6FF]">
              <h3 className="text-[#AD46FF] font-syne lg:text-[27px] md:text-[24px] text-[22px] !pt-5 text-center">
                Got questions to ask ?
              </h3>
              <h3 className="text-[#3F3F3F] font-medium lg:text-[18px] md:text-[16px] text-[14px] font-poppins !py-4 text-center">
                admin@vineatz.com
              </h3>
              <h3 className="text-black font-syne lg:text-[21px]  md:text-[18px]  sm:text-[16px] text-[14px] !w-full !pb-5 text-center">
                Discuss your projects with us. We are open to question.
              </h3>
            </div>
            <div className="lg:w-1/3 !mt-5 lg:!mt-0 md:!mt-0 rounded-[20px] bg-[#F9F6FF]">
              <h3 className="text-[#AD46FF] font-syne lg:text-[27px] md:text-[24px] text-[22px] !pt-5 text-center">
                We are hiring!
              </h3>
              <h3 className="text-[#3F3F3F] font-medium lg:text-[18px] md:text-[16px] text-[14px] font-poppins !py-4 text-center">
                63791 08978
              </h3>
              <h3 className="text-black font-syne lg:text-[21px]  md:text-[18px]  sm:text-[16px] text-[14px] !w-[1/3] font-poppins !pb-5 text-center">
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
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
    </div>
  );
}

export default ContactUs;
