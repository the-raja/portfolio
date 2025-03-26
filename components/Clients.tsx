"use client";

import React from "react";

import { testimonials } from "@/data";
import { companies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  console.log("Companies: ", companies);
  console.log("Testimonials: ", testimonials);

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My
        <span className="text-gold"> JOURNEY</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="left"
            speed="slow"
          />
        </div>

        <div className="w-full">
          <div className="flex items-center justify-center h-24 py-4 text-5xl font-semibold">
           <h1 className="heading">
               Frameworks & <span className="text-gold">Tools</span>
          </h1>
          </div>
          <div className="flex flex-wrap items-center justify-center py-4 gap-4 md:gap-16 max-lg:mt-10">
            {companies.map((company) => (
              <React.Fragment key={company.id}>
                <div className="flex md:max-w-60 max-w-32 gap-2 items-center">
                  <img
                    src={company.img}
                    alt={company.name}
                    className="md:w-18 w-18"
                  />
                  <span className="text-1xl">{company.name}</span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
