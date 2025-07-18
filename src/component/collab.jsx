import img1 from "../assets/collab1.png";
import img2 from "../assets/collab2.png";
import img3 from "../assets/collab3.png";
import img4 from "../assets/collab4.png";

function Collab() {
    const question1 = [
        {
            image: img1,
            id: 1,
            q1: "Future-Ready Tech Stack",
            q2: "We leverage modern technologies and frameworks to build scalable, secure, and long-lasting digital solutions tailored to your business",
        },
        {
            image: img2,
            id: 2,
            q1: "Adaptable to Your Growth",
            q2: "Our solutions evolve with your business—offering modular upgrades, integrations, and flexible architecture to support scaling seamlessly",
        },
        {
            image: img3,
            id: 3,
            q1: "Efficient Communication Flow",
            q2: "With proactive communication and agile workflows, we ensure complete, faster iterations, and transparent collaboration throughout the project",
        },
        {
            image: img4,
            id: 4,
            q1: "Optimized Code & Speed",
            q2: "We engineer with performance in ensuring fast load times, responsive interfaces, and reduced technical debt for a smooth user experience.",
        },
    ];

    return (

        <div className='bg-[#F7F3FF] !py-15'>
            <h2 className="font-syne lg:text-[36px]  md:text-[32px] text-[26px] text-black text-center !p-10">
          Benefits of <span className="text-[#AF4BFF]">collaborating</span> with us
        </h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:!px-20 md:!px-20 !px-10 !gap-10">
            {question1?.map((item, index) => {
                return (
                    <div className="!p-5 shadow-2xl bg-[#FFFFFF] place-items-center-safe rounded-[20px]">
                        <img src={item?.image} alt="" className=" " />
                        <div className="">
                            <h2 className="text-[20px] text-black text-center !mt-3 font-syne">
                                {item?.q1}
                            </h2>
                            <h2 className="lg:text-[16px] md:text-[16px] text-[14px] font-syne leading-8 text-[#4B5563] !mt-3">
                                {item?.q2}
                            </h2>
                        </div>
                    </div>
                );
            })}
        </div>
        </div>

    )
}


export default Collab;