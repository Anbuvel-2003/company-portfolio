import software1 from "../../../assets/ecombanner.png";
import figma from "../../../assets/figma.svg";
import js from "../../../assets/js.svg";
import metaai from "../../../assets/metaai.svg";
import vscode from "../../../assets/vscode.svg";
import mongodb from "../../../assets/mongodb.svg";
import chatgpt from "../../../assets/openai.svg";
import nodejs from "../../../assets/nodejs.svg";
import android from "../../../assets/android.svg";
import analytics from "../../../assets/analytics.svg";
import fig6 from "../../../assets/Fig6.png";
import Flow from "../../../component/flow";

function Ecommerce() {
  // const conicColors = {
  //   "0%": "#b9e6fe",
  //   "50%": "#ccdfff",
  //   "100%": "#e7d5ff",
  // };
  // const data = [
  //   {
  //     id: 1,
  //     title: "Storefront",
  //     paragraph:
  //       "We design e-commerce platforms that captivate and convert. Every detail—from product pages to checkout—is user-focused.",
  //     points: [
  //       {
  //         id: 1,
  //         data: "Intuitive Product Layouts",
  //       },
  //       {
  //         id: 2,
  //         data: "Smooth Checkout Flow",
  //       },
  //       {
  //         id: 3,
  //         data: "Personalized Shopping UX.",
  //       },
  //       {
  //         id: 4,
  //         data: "Mobile-Ready Interfaces.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Backend",
  //     paragraph:
  //       "Powerful backend solutions manage your inventory, logistics, and user accounts. Our systems support efficiency and scale.",
  //     points: [
  //       {
  //         id: 1,
  //         data: "Inventory Sync Tools.",
  //       },
  //       {
  //         id: 2,
  //         data: "Secure Payment Gateways.",
  //       },
  //       {
  //         id: 3,
  //         data: "User Account Portals.",
  //       },
  //       {
  //         id: 4,
  //         data: "Order Management Systems.",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title: "Sales",
  //     paragraph:
  //       "We implement conversion-focused features that drive revenue. From upselling tools to promo engines, your growth is built-in.",
  //     points: [
  //       {
  //         id: 1,
  //         data: "Abandoned Cart Recovery.",
  //       },
  //       {
  //         id: 2,
  //         data: "Smart Product Suggestions.",
  //       },
  //       {
  //         id: 3,
  //         data: "Discount Rule Engines.",
  //       },
  //       {
  //         id: 4,
  //         data: "SEO for Products.",
  //       },
  //     ],
  //   },
  // ];
  // const [selecteditem, setselecteditem] = useState(data[0]);
  // const { Meta } = Card;
  const logos = [
    figma,
    js,
    metaai,
    vscode,
    mongodb,
    chatgpt,
    nodejs,
    android,
    analytics,
  ];


  return (
    // <div className="!pt-15">
    //   <div className="place-self-center lg:!p-20 md:!p-20 !p-5" data-aos="zoom-in">
    //     <h3 className="text-[#9e9e9e] font-syne lg:text-6xl sm:text-5xl ">
    //       E-Commerce app development
    //     </h3>
    //   </div>
    //   <div className="lg:flex lg:gap-0 ">
    //     <div className="lg:w-1/2 w-full lg:!mb-0  !mb-10" data-aos="zoom-in">
    //       <img src={software1} alt="software1" className="" />
    //     </div>
    //     <div className="lg:w-1/2  lg:place-self-center !justify-items-center  md:!pl-40 sm:!pl-40 !pl-5 lg:!mb-0 !mb-5" data-aos="zoom-in">
    //       <div className="">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase ">
    //           Who We Are
    //         </h3>
    //         <h3 className="text-black lg:text-5xl md:text-4xl text-3xl tracking-wide font-syne ">
    //           Trusted <br />
    //           and Supported <br /> by Many
    //         </h3>
    //         <div className="lg:flex grid md:flex !gap-3 !mt-3  lg:!gap-10 md:!gap-10 border-b-1 border-[#57b8e0] lg:w-[100%] md:w-[70%] w-[50%] !mb-4">
    //           {data?.map((item, index) => {
    //             const isselected = item?.id == selecteditem?.id;
    //             return (
    //               <div
    //                 key={index}
    //                 className={`lg:!py-3 md:!py-3 pr-10  ${isselected ? "border-b-1" : "border-0"
    //                   } border-[#000000]`}
    //                 onClick={() => {
    //                   setselecteditem(item);
    //                 }}
    //               >
    //                 <p className="text-black lg:text-3xl md:text-3xl text-2xl tracking-wide font-syne cursor-pointer">
    //                   {item?.title}
    //                 </p>
    //               </div>
    //             );
    //           })}
    //         </div>
    //         <div className="">
    //           <p className="lg:text-[20px] md:text-[18px] text-[16px] text-black !mb-4 font-sans lg:w-[90%] md:w-[70%] w-[60vw]">
    //             {selecteditem?.paragraph}
    //           </p>
    //           <ul>
    //             {selecteditem?.points &&
    //               selecteditem.points?.map((item, index) => {
    //                 return (
    //                   <li
    //                     className="list-inside list-disc lg:text-[18px] md:text-[16px] text-[14px] font-sans"
    //                     key={index}
    //                   >
    //                     {item?.data}
    //                   </li>
    //                 );
    //               })}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="lg:flex">
    //     <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:!mb-0 !mb-10 ">
    //       <div className="w-[60%]" data-aos="fade-right">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase !mb-3">
    //           Brands
    //         </h3>
    //         <h2 className="text-black lg:text-5xl md:text-4xl text-3xl font-medium -tracking-tighter font-syne ">
    //           Trusted <br /> and Supported <br /> by Many
    //         </h2>
    //         <div>
    //           <div className="!my-5 ">
    //             <h3 className="text-black lg:text-3xl md:text-3xl text-2xl  font-medium -tracking-tighter font-syne ">
    //               Storefront
    //             </h3>
    //             <Progress
    //               percent={95}
    //               status="active"
    //               strokeColor={conicColors}
    //             />
    //           </div>
    //           <div className="!my-5 ">
    //             <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
    //               Backend
    //             </h3>
    //             <Progress
    //               percent={75}
    //               status="active"
    //               strokeColor={conicColors}
    //             />
    //           </div>
    //           <div className="!my-5 ">
    //             <h3 className="text-black lg:text-3xl md:text-3xl text-2xl font-medium -tracking-tighter font-syne ">
    //               Sales
    //             </h3>
    //             <Progress
    //               percent={83}
    //               status="active"
    //               strokeColor={conicColors}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="lg:w-1/2 w-full" data-aos="fade-left">
    //       <img src={software2} alt="software1" className="" />
    //     </div>
    //   </div>
    //   <div className="lg:flex">
    //     <div className="lg:w-1/2 w-full lg:mb-0 " data-aos="fade-right">
    //       <img src={software3} alt="software1" className="" />
    //     </div>
    //     <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 " data-aos="fade-left">
    //       <div className="w-[60%]">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
    //           Built for Your Business
    //         </h3>
    //         <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
    //           Scalable <br /> Commerce <br /> Solutions
    //         </h2>
    //         <div className="">
    //           <p className="text-black text-[16px] font-normal">
    //             Whether you're a growing brand or a large-scale enterprise, our e-commerce platforms are scalable and performance-optimized. Built with platforms like Shopify, Magento, or custom stacks, we ensure flexibility and growth-readiness.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="lg:flex">
    //     <div className="lg:w-1/2 w-full place-self-center justify-items-center lg:mb-0 !mb-10 " data-aos="fade-right">
    //       <div className="w-[60%]">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase">
    //           Built for Your Business
    //         </h3>
    //         <h2 className=" text-black lg:text-5xl md:text-4xl text-3xl  font-medium -tracking-tighter font-syne ">
    //           Secure <br /> Shopping <br /> Experience
    //         </h2>
    //         <div className="">
    //           <p className="text-black text-[16px] font-normal">
    //             We prioritize customer trust by integrating SSL, secure payments, and GDPR compliance. From browsing to purchase, users enjoy a frictionless and protected shopping experience.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="lg:w-1/2 w-full " data-aos="fade-left">
    //       <img src={software4} alt="software1" className="" />
    //     </div>
    //   </div>
    //   {/* <div className="flex !my-20">
    //     <div className="w-full h-[50%] relative">
    //       <img
    //         src={
    //           "https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-6-parallax-img.jpg"
    //         }
    //         alt="software2"
    //         className=""
    //       />
    //       <div className="bg-white absolute top-0 ">
    //         <h3 className="text-[#b3938a] text-[16px] tracking-wide uppercase !mb-3">
    //           Brands
    //         </h3>
    //         <h2 className="text-black text-5xl font-medium -tracking-tighter font-syne ">
    //           Trusted <br /> and Supported <br /> by Many
    //         </h2>
    //       </div>
    //     </div>
    //   </div> */}
    //   <div className="relative w-full h-[800px]" data-aos="fade-up">
    //     <img
    //       src="https://deon.qodeinteractive.com/wp-content/uploads/2021/11/Home-6-parallax-img.jpg"
    //       alt="software2"
    //       className="absolute inset-0 w-full h-full object-cover"
    //     />

    //     {/* Overlay content */}
    //     <div className="absolute inset-0 flex items-center justify-center" data-aos="fade-up" data-aos-duration="3000">
    //       <div className="bg-transparent bg-opacity-80 !p-8 max-w-xl text-left">
    //         <h3 className="text-white text-[16px] tracking-wide uppercase mb-3">
    //           Brands
    //         </h3>
    //         <h2 className="text-white lg:text-5xl md:text-4xl text-3xl font-medium font-syne leading-tight">
    //           Trusted and <br /> Supported <br />
    //         </h2>
    //         <p className="text-white lg:text-[16px] md:text-[14px] text-[12px] font-normal">
    //           Custom software development is the process of building tailored
    //           software solutions designed specifically to meet the unique needs
    //           of a business or organization. Unlike off-the-shelf software,
    //           custom solutions are developed from the ground up to align with
    //           specific workflows, goals, and challenges, offering greater
    //           flexibility, scalability, and efficiency.
    //         </p>
    //         <div className="!mt-5">
    //           <div className="!px-5 !py-2 border-1 border-white w-fit group hover:bg-white">
    //             <span className="text-white font-syne text-[16px] group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-500 group-hover:to-cyan-400 group-hover:bg-clip-text">
    //               View More
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* <div className="!my-20">
    //     <h3 className=" text-black text-5xl font-medium -tracking-tighter font-syne text-center ">
    //       Our Services
    //     </h3>
    //     <div className="!my-20">
    //       <div className="flex flex-wrap justify-center items-center lg:!px-80 md:!px-10">
    //         {service?.map((item, index) => {
    //           return (
    //             <div
    //               key={index}
    //               className="lg:w-1/3 md:w-1/3 sm:w-1/2 w-full flex justify-center"
    //             >
    //               <div className="!mb-5">
    //                 <Card
    //                   hoverable
    //                   style={{ width: "80%" }}
    //                   cover={<img alt="example" src={item?.img} />}
    //                 >
    //                   <Meta
    //                     title={item?.title}
    //                     description={item?.description}
    //                     className="font-syne"
    //                   />
    //                   <div className="">
    //                     <div className="!p-2 place-self-end">
    //                       <a href={item?.path} className="">
    //                         <span className="text-[16px] capitalize">
    //                           Read more{" "}
    //                         </span>
    //                       </a>
    //                     </div>
    //                   </div>
    //                 </Card>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //   </div> */}
    //   <Meetourclient />
    // </div>
    <section>
      <div className="!mt-15">
        <div className="bg-[#F8F4FF] md:!py-20 lg:!py-20 !py-10  ">
          <h3 className="text-[#9F70FD] font-syne lg:text-[60px] md:text-[40px] text-[25px] text-center ">
            E-commerce app development
          </h3>
        </div>
        <div className="lg:!m-20 md:!m-20 md:flex lg:flex grid  sm:!m-10 !m-10">
          <div className="lg:w-1/2 md:w-full w-full  place-items-center lg:h-[60vh] md:h-[60vh]  ">
            <img
              alt=""
              src={software1}
              className="w-[100%] h-[100%] object-contain"
            />
          </div>
          <div className="lg:w-1/2 md:w-full w-full place-content-center !mt-10 lg:!mt-0 md:!mt-0 ">
            <h3 className="text-[#788094] lg:text-[24px] md:text-[20px] text-[18px] font-syne text-justify lg:leading-15 md:!pl-10 ">
              Our e-commerce solutions deliver seamless shopping experiences with sleek interfaces and robust backend systems.
              From real-time inventory sync and secure payments to intelligent promotions and abandoned cart recovery, every feature
              is optimized for growth. We focus on speed, security, and scalability to help your business convert better and sell more.
              With built-in analytics, SEO tools, and a frictionless checkout, we empower you to drive revenue while ensuring a
              secure, user-friendly experience for every customer.
            </h3>
          </div>
        </div>
        <div>
          <h3 className="lg:text-[35px] md:text-[30px] sm:text-[25px] text-[20px] font-syne text-[#1A1A2E] text-center  !my-10">
            Technologies used
          </h3>

          <div className="bg-[#F8F4FF] !py-10 !px-5">
            <div className="group w-full overflow-hidden ">
              <div className="flex lg:animate-none animate-loop-scroll sm:animate-loop-scroll space-x-16 min-w-max group-hover:paused ">
                {/* First image set */}
                {logos.map((img, i) => (
                  <img key={i} src={img} alt={`tech-${i}`} className="h-16 w-auto !px-10 object-contain lg:!mx-10" />
                ))}

                {/* Second (duplicate) image set – appears directly after the first */}
                {logos.map((img, i) => (
                  <img key={`dup-${i}`} src={img} alt={`tech-dup-${i}`} className="h-16 w-auto !px-10 object-contain lg:!mx-10" />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="lg:!mx-20 md:!m-20 sm:!m-10 !m-10">
            <div className="lg:!pt-10 ">
              <h1 className="!pb-3 lg:text-[48px] md:text-[40px] sm:text-[30px] text-[20px] text-[#1A1A2E] font-semibold font-syne">
                Accelerate Sales with High-Performance eCommerce App Solutions
              </h1>
            </div>
            <div className="">
              <p className="text-[#788094] lg:text-[20px] md:text-[18px] text-[16px] font-syne lg:leading-12 leading-8 ">
                Our eCommerce app solutions are built to convert—combining speed, usability, and smart design for customer journeys.
                We focus on mobile-first architecture, dynamic product presentation, personalized experiences, and real-time performance
                tracking to maximize user engagement. With a seamless fusion of frontend elegance and backend strength, our apps reduce
                friction, boost retention, and drive consistent revenue—giving your brand the power and serve smarter.
              </p>
            </div>
          </div>
        </div>


        <div className="lg:!m-20 md:!m-20 sm:!m-10 !m-10">
          <div className="lg:flex grid lg:!gap-20">
            <div className=" ">
              <h2 className="text-black capitalize font-syne lg:text-[48px] md:text-[40px] sm:text-[30px] text-[25px] font-semibold lg:mb-0  !mb-5">
                Why Vineatz Powers the Future of eCommerce Development
              </h2>
              <p className=" lg:text-[20px] md:text-[18px] sm:text-[18px] text-[16px] lg:leading-12 leading-8 font-syne lg:!pb-10 !pb-5">
                Vineatz crafts eCommerce ecosystems built to perform, adapt, and thrive. With a foundation in scalable architecture
                and experience across diverse sectors, we deliver solutions that not only meet current demands but are ready for what's next.
                Our approach blends deep technical insight with user-first design to fuel sustainable digital growth.
              </p>
              <h2 className="text-black capitalize lg:text-[60px] md:text-[50px] sm:text-[30px] text-[25px]  font-syne lg:mb-0 !mb-8">
                Tailored eCommerce Platforms for Every Business Landscape
              </h2>
              <p className=" lg:text-[20px] md:text-[18px] sm:text-[18px] text-[16px] font-syne lg:!pb-0 !pb-10  lg:leading-12 leading-8 ">
                Every solution we build is customized to align with your brand, industry, and audience. From niche startups to large-scale enterprises,
                our platforms combine intuitive UI, fast performance, and flexible backends to support sales, retention, and long-term scale. Whether
                it’s B2C, B2B, or marketplace Vineatz builds with intent and impact.
              </p>
            </div>
            <div>
              <Flow />
            </div>
          </div>
        </div>
        <div className="bg-[#F8F4FF] ">
          <h1 className="!pb-3 lg:text-[30px] md:text-[26px] sm:text-[24px] text-[20px] text-[#AD46FF] font-semibold lg:!px-20 md:!px-20 !px-10 !py-10 font-syne">
            Custom Ecommerce Development Routes for Every Business Stage
          </h1>
          <div className="lg:flex md:grid grid-cols-1 lg:!p-20 md:!p-15 !p-10 ">
            <div className="lg:w-1/2 w-full md:w-full lg:flex grid justify-center lg:h-[60vh] md:h-[60vh] ">
              <img src={fig6} alt="business stage" className="w-[100%] h-[100%] object-contain"    />
            </div>
            <div className="grid grid-cols-1 lg:!gap-10 lg:!pl-30">
              <div className="lg:flex grid">
                <div>
                  <p className="font-syne lg:text-[48px] md:text-[44px] text-[40px] text-[#9F70FD] ">01</p>
                </div>
                <div className="lg:!px-10 ">
                  <h1 className=" lg:text-[24px] md:text-[23px] text-[20px] font-semibold font-syne ">
                    Mobile-Only App Development
                  </h1>
                  <p className="lg:!py-10 !py-5 lg:text-[20px] md:text-[18px] text-[16px] font-syne leading-10"> This option is ideal for businesses focused on mobile-first strategies or select the right tech stack,
                    and develop high-performing mobile applications with user-centric design and seamless backend integrations.</p>
                </div>
              </div>
              <div className="lg:flex grid">
                <div>
                  <p className="font-syne text-[48px] text-[#9F70FD] ">02</p>
                </div>
                <div className=" lg:!px-10">
                  <h1 className=" lg:text-[24px] md:text-[23px] text-[20px] font-semibold font-syne ">
                    Mobile + Web Application Development
                  </h1>
                  <p className="lg:!py-10 !py-5 lg:text-[20px] md:text-[18px] text-[16px]  font-syne leading-10 ">
                    This path is designed for growing businesses or enterprise-grade brands looking to offer a connected, high-performance experience
                    across all digital touchpoints. We build seamless ecosystems that span mobile apps, web interfaces, and integrated systems—ready
                    for scale, performance, and innovation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>


  );
}

export default Ecommerce;
