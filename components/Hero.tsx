import React from "react";
import { FaPaperPlane, FaDownload } from "react-icons/fa";
import TextGenerateEffect from "./ui/TextGenerateEffect";
import Button from "./ui/Button";

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-[85vw] md:max-w-[70vw] lg:max-w-[48vw] flex flex-col items-center justify-center">
        <h2 className="uppercase tracking-widest text-sm text-center text-blue-100 max-w-80">
          Hello World!
        </h2>

        <TextGenerateEffect
          className="text-center text-2xl md:text-4xl lg:text-6xl"
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
