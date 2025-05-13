import Link from "next/link";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../shared/Button";

export const Copy = () => {
  return (
    <>
      <div className="mb-1.5 rounded-full bg-zinc-600">
        <Link
          href="https://www.instagram.com/brand_elevator_digitals?igsh=ODdscG1raHR0NTlk&utm_source=qr"
          target="_blank"
          rel="nofollow"
          className="flex origin-top-left items-center rounded-full border border-zinc-900 bg-white p-0.5 text-sm transition-transform hover:-rotate-2"
        >
          <span className="rounded-full bg-[#FF6154] px-2 py-0.5 font-medium text-white">
            HEY!
          </span>
          <span className="ml-1.5 mr-1 inline-block">
            We're live on Product Hunt!
          </span>
          <FiArrowUpRight className="mr-2 inline-block" />
        </Link>
      </div>
      <h1 className="max-w-4xl text-center text-4xl font-black leading-[1.15] md:text-7xl md:leading-[1.15]">
      Let’s build something great together. <br />Innovate, Elevate, Succeed.

      </h1>
      <p className="mx-auto my-4 max-w-3xl text-center text-base leading-relaxed md:my-6 md:text-2xl md:leading-relaxed">
      Welcome to Brand Elevators, a results-driven digital marketing agency
       based in the heart of Gurgaon. We specialize in helping brands grow online 
       with a full suite of creative and performance-focused services.
      </p>
      
      <a
  href="https://wa.me/919333933371?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
>
  <Button>
    <span className="font-bold">Get started - </span> no CC required
  </Button>
</a>

    </>
  );
};
