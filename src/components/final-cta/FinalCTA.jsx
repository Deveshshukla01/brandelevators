import React from "react";
import { SectionHeading } from "../shared/SectionHeading";
import { LogoLarge } from "../navigation/Logo";
import { Button } from "../shared/Button";

export const FinalCTA = () => {
  return (
    <section className="-mt-8 bg-white px-2 py-24 md:px-4">
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        {/* <LogoLarge /> */}
        <img src="/Logo.png" alt="Logo" className="h-20 w-auto" />

        <SectionHeading>Ready to go?</SectionHeading>
        <p className="mx-auto mb-8 text-center text-base leading-relaxed md:text-xl md:leading-relaxed">
          Let us enhance and improve your work
        </p>
        <Button intent="primary">
          <span className="font-bold">Get started - </span> no CC required
        </Button>
      </div>
    </section>
  );
};
