"use client";

import React from "react";

import { testimonials } from "@/data";
import { techStack } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      {/* Heading */}
      <h1 className="heading">
        My <span className="text-gold"> JOURNEY</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        {/* Moving Cards */}
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>

        {/* Tech Stack */}
        <div className="w-full mt-20">
          <div className="text-center mb-10">
            <h1 className="heading">
              Frameworks & <span className="text-gold">Tools</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {techStack.map((group, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-[#2a0f0f] to-[#4C3F3C] border border-[#5a2a2a]/40 backdrop-blur-md rounded-2xl p-6 w-full hover:scale-[1.03] hover:border-gold/50 transition duration-300"
              >
                <h2 className="text-lg font-semibold text-white mb-4">
                  {group.title}
                </h2>

                <div className="flex flex-wrap gap-3">
                  {group.items.map((item, j) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={j}
                        className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#3a1a1a] text-neutral-200 hover:bg-gold hover:text-black transition duration-300"
                      >
                        {/* ✅ FIXED ICON RENDER */}
                        {Icon ? (
                          <Icon className="w-4 h-4 text-neutral-300" />
                        ) : (
                          <span className="w-4 h-4" /> // keeps spacing aligned
                        )}

                        <span className="text-sm">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
