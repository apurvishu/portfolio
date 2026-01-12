import React from "react";
import { useMediaQuery } from "react-responsive";

const SocialLinks = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      {!isMobile && (
        <div className="mb-9 p-5 ml-2 bg-white-90 left-0 bottom-4 fixed">
          <div className="flex flex-col  justify-center gap-7 cursor-disable  p-2 rounded-lg ">
            <a
              href="https://github.com/apurvishu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/github1.png"
                alt="github"
                className="w-9 h-9 rounded-md bg-white hover:bg-gradient-to-br hover:from-violet-500 hover:to-blue-500 hover:rounded-lg hover:w-10 hover:h-10 animate-pulse hover:animate-none transition-all duration-300 object-contain p-0.5"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/apurv-ishu-471bb336a"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/linkedin.png"
                alt="LinkedIn"
                className="w-9 h-9 rounded-md  bg-white hover:bg-gradient-to-br hover:from-violet-500 hover:to-blue-500 hover:rounded-lg hover:w-10 hover:h-10 hover:animate-none transition-all animate-pulse duration-300"
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialLinks;
