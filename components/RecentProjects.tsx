"use client";

import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading  ">
        Selection of My{" "}
        <span className="text-gold">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div
            className="sm:h-[30rem] h-[25rem] lg:min-h-[33rem] flex items-center justify-center w-[80vw] sm:w-[570px]"
            key={item.id}
            
          >

            <PinContainer href={item.link} title={item.link} >
              <div className="relative flex items-center justify-center sm:w-[570px] sm:h[40vh] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
              style={{ backgroundColor: "#100000" }}>
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  //backgroundcolor
                  style={{ backgroundColor: "#902625" }}
                >
                  <img src="/bg.png" alt="Background Image" />
                </div>
                <img
                  src={item.img}
                  alt="Cover Image"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt={`Icon ${index}`} className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex lg:text-xl md:text-xs text-sm text-gold items-center"
                  >
                    Check Live Site
                    <FaLocationArrow className="ms-3" color="white" />
                  </a>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
