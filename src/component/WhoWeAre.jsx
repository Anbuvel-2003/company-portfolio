import React from 'react';
import phoneImage from "../assets/image2.png"; // Update path as needed


const WhoWeAre = () => {
  return (
    <section className="w-full bg-transparent py-24">
      <div className="max-w-7xl mx-auto px-6 md:flex md:items-center md:gap-16">
        {/* Left Content */}
        <div className="md:w-1/2">
          <p className="text-sm uppercase tracking-widest text-gray-400 mb-2">
            Who We Are
          </p>
          <h2 className="text-4xl font-bold text-black mb-6 leading-tight">
            Network <br /> Structure Design
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. 
            Phasellus sapien nulla ut metus varius laoreet. Quisque rutrum. 
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur 
            ullamcorper ultricies nisi. Nam eget dui. Maecenas nec odio et 
            ante tincidunt tempus vitae
          </p>
          <p className="text-gray-600 leading-relaxed">
            Aliquam lorem ante, dapibus viverra quis feugiat a, tellus. 
            Phasellus nisi vel augue. Nulla ut metus varius laoreet. Quisque 
            rutrum. Aenean imperdiet.
          </p>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <div className="relative w-[300px] h-[620px]">
            <Image
              src={phoneImage}
              alt="Phone UI"
              layout="fill"
              objectFit="contain"
              className="drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

