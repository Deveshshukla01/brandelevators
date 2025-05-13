import React from "react";
import { CheckPill } from "./CheckPill";
import { OPTIONS } from "./options";

export const Copy = ({ selected, setSelected }) => {
  return (
    <div className="w-full">
      <span className="mb-1.5 block text-center text-red-500 md:text-start">
        Show who it's for
      </span>
      <h2 className="mb-3 text-center text-4xl font-bold leading-tight md:text-start md:text-5xl md:leading-tight">
        Support your business, big or small
      </h2>
      <p className="mb-6 text-center text-base leading-relaxed md:text-start md:text-lg md:leading-relaxed">
      Social media is a powerful tool for growth, offering instant access to a global audience. It helps build brand awareness, connect directly with potential customers, and drive consistent engagement. With the right content strategy, businesses and individuals can showcase their expertise, promote products or services, and generate leads without high advertising costs. Social media also boosts SEO, increases website traffic, and provides valuable audience insights.
       Whether you're building a personal brand or scaling a business, social platforms make it easier to build trust, share your story, and grow your influence online — faster and more efficiently than ever before.
      </p>
      <div className="mb-6 flex flex-wrap justify-center gap-3 md:justify-start">
        {OPTIONS.map((o, i) => {
          return (
            <CheckPill
              key={o.title}
              index={i}
              selected={i === selected}
              setSelected={setSelected}
            >
              {o.title}
            </CheckPill>
          );
        })}
      </div>
    </div>
  );
};
