import React from "react";
import { FiCheckCircle } from "react-icons/fi";

export const CheckPill = ({ children, selected, setSelected, index }) => (
  <div className="rounded-full bg-[#86CFEC]">
    <button
      onClick={() => setSelected(index)}
      className={`flex origin-top-left items-center gap-1 rounded-full border bg-white px-1.5 py-0.5 text-sm transition-all ${selected ? "-rotate-3 border-[#86CFEC] text-[#86CFEC]" : "border-[#A7D2AA] hover:bg-[#A7D2AA]"}`}
    >
      <FiCheckCircle /> {children}
    </button>
  </div>
);
