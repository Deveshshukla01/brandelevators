import React from "react";
import { cva } from "class-variance-authority";

const button = cva(["uppercase", "transition-colors"], {
  variants: {
    intent: {
      primary: ["bg-[#86CFEC]", "hover:bg-indigo-500", "text-white"],
      secondary: ["bg-zinc-900", "hover:bg-zinc-700", "text-white"],
      outline: ["bg-white", "hover:bg-zinc-200", "border", "border-zinc-900"],
    },
    size: {
      small: ["px-3", "py-1.5", "rounded-md", "text-sm"],
      medium: ["p-3", "rounded-lg", "text-base"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export const Button = ({ className, intent, size, onClick, ...props }) => {
  const whatsappNumber = "919333933371"; // With country code
  const defaultMessage = encodeURIComponent("Hello, I'm interested in your services.");

  const handleClick = (e) => {
    // If a custom onClick exists, call it
    if (onClick) onClick(e);

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${defaultMessage}`, "_blank");
  };

  return (
    <button
      className={button({ intent, size, className })}
      onClick={handleClick}
      {...props}
    />
  );
};
