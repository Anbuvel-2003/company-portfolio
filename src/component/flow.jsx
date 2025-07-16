import React from "react";
import fig1 from "../assets/Fig1.png";
import fig2 from "../assets/Fig2.png";
import fig3 from "../assets/Fig3.png";
import fig4 from "../assets/Fig4.png";
import fig5 from "../assets/Fig5.png";

function Flow() {

    const flow = [
        {
            img: fig1,
            t1: "Specialized Cross-Platform Teams",
            para: "Our dedicated teams span web, mobile, and cloud technologies—ensuring seamless, high-performance eCommerce platforms across all devices and environments. We deliver optimized user journeys regardless of where your customers shop.",
        },
        {
            img: fig2,
            t1: "Mobile-First Shopping Experiences",
            para: "We design mobile-first eCommerce apps that deliver smooth, intuitive experiences. From browsing to checkout, every interaction is tailored to engage mobile users and drive conversions",
        },
        {
            img: fig3,
            t1: "Business-Aligned Development",
            para: "We don’t just build features—we build business-aligned systems. Whether it’s a subscription-based service, multi-vendor marketplace, or B2B workflow, our platforms are engineered around real operational needs.",
        },
        {
            img: fig4,
            t1: "Enterprise-Level Security Standards",
            para: "Security is embedded from the ground up. We implement advanced protocols including end-to-end encryption, secure payment flows, and compliance standards like GDPR to protect your data and customers.",
        },
        {
            img: fig5,
            t1: "AI-Powered Shopping",
            para: "Our platforms integrate AI-powered tools like dynamic product recommendations, smart search, and automated promotions—enhancing personalization, boosting engagement, and increasing sales in real time",
        },
    ];

    return (

        //   
        <div className="lg:px-6 rounded-xl lg:w-[80%] w-[100%]">
            <div className="flex flex-col">
                {flow.map((item, index) => (
                    <React.Fragment key={index}>
                        <div className="flex items-start gap-6">

                            {/* Left side with Image and Line */}
                            <div className="flex flex-col items-center">
                                {/* Vertical line if not last item */}
                                {index !== 0 ? (
                                    <div className="w-[2px] h-[40px] bg-[#D0B9FF]" />
                                ) : (
                                    <div className="w-[2px] h-[100px] invisible" />  // Keeps spacing
                                )}
                                <div className="w-[60px] h-[60px] rounded-full  flex items-center justify-center text-white">
                                    <img src={item.img} alt="step icon" className="w-[100px] h-[100px] object-contain " />
                                </div>

                                {/* Vertical line if not last item */}
                                {index !== flow.length - 1 && (
                                    <div className="w-[2px] lg:h-[260px] md:h-[100px] h-[300px]  bg-[#D0B9FF] " />
                                )}
                            </div>

                            {/* Right side with text */}
                            <div className="">
                                <h3 className="lg:text-[30px] md:text-[25px] text-[20px] font-syne text-black !pb-6 ">
                                    {item.t1}
                                </h3>
                                <p className="lg:text-[20px] md:text-[18px] text-[16px] font-syne text-black lg:!pb-0 !pb-10 lg:leading-12 md:leading-8 leading-7 ">
                                    {item.para}
                                </p>
                            </div>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>

    );

}

export default Flow;
