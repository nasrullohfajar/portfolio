import React from "react";
import { FaPaperPlane, FaDownload } from "react-icons/fa";
import TextGenerateEffect from "../ui/TextGenerateEffect";
import Button from "../ui/Button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[80vw] lg:max-w-[50vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-sm md:text-lg text-center text-white max-w-80">
          Hello World!
        </h2>

        <TextGenerateEffect
          className="text-center text-3xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
          words="I'm Nasrulloh Fajar Muharam a Front end Developer"
        />

        <div className="flex flex-col md:flex-row lg:flex-row gap-4">
          <a href="#about">
            <Button
              title="See More About Me"
              icon={<FaPaperPlane />}
              iconPosition="right"
            />
          </a>

          <Button
            title="Download My CV"
            icon={<FaDownload />}
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
