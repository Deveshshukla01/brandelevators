import React from "react";
import { AiFillBug } from "react-icons/ai";
import { BsFillCursorFill } from "react-icons/bs";
import {
  FiAlignLeft,
  FiAnchor,
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiChevronRight,
  FiClock,
  FiEdit,
  FiEye,
  FiItalic,
} from "react-icons/fi";

const IssuesComponent = () => {
  return (
    <div className="h-full w-full p-4">
      <div className="mb-6 flex items-center gap-1.5 text-sm">
        <span className="text-zinc-600">SEO Team</span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-red-100 px-1.5 py-0.5 text-red-900">
          <AiFillBug />
          <span>Bugs</span>
        </div>
      </div>
      <div className="-ml-1.5 mb-4 flex items-center gap-1.5">
        <img
          src="https://api.dicebear.com/8.x/notionists/svg"
          alt="avatar"
          className="ml-1.5 size-8 rounded bg-indigo-200 shadow-inner"
        />
        <div>
          <span className="block text-sm font-medium">SEO-manager</span>
          <span className="block text-xs text-zinc-600">Site Reliability</span>
        </div>
      </div>
      <div className="mb-1 line-clamp-1 text-xl font-medium">
        Bot crawlers causing latency issues
      </div>
      <span className="line-clamp-3 text-sm leading-relaxed text-zinc-600">
      SEO experts reduce latency by optimizing images, enabling caching, using content delivery networks (CDNs),
       minifying CSS/JavaScript, and improving server response times...
      </span>
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-1.5 bg-white/50 p-4 backdrop-blur">
        <span className="flex w-fit items-center gap-1 rounded bg-yellow-100 px-1.5 py-0.5 text-sm text-yellow-900">
          <FiClock />
          <span>TODO</span>
        </span>
        <span className="flex w-fit items-center gap-1 rounded bg-zinc-200 px-1.5 py-0.5 text-sm text-zinc-900">
          <FiArrowRight />
          <span>Medium</span>
        </span>
      </div>
    </div>
  );
};

const KanbanComponent = () => {
  return (
    <div className="relative grid h-full w-full min-w-96 grid-cols-2 gap-2 p-4 pb-0 pr-0">
      <div className="relative z-0 h-full w-full rounded-t-xl bg-zinc-100 p-4">
        <div className="flex items-center justify-between">
          <span className="flex w-fit items-center gap-1 rounded bg-blue-100 px-1.5 py-0.5 text-sm text-blue-900">
            <FiEye />
            <span>Doing</span>
          </span>
          <FiChevronDown />
        </div>
        <div className="mt-4 space-y-2">
          <BGTask />
          <BGTask />
          <BGTask />
        </div>
      </div>
      <div className="relative z-0 h-full w-full rounded-t-xl bg-zinc-100 p-4">
        <div className="flex items-center justify-between">
          <span className="green-yellow-900 flex w-fit items-center gap-1 rounded bg-green-100 px-1.5 py-0.5 text-sm">
            <FiCheck />
            <span>Done</span>
          </span>
          <FiChevronDown />
        </div>
        <div className="mt-4 space-y-2">
          <BGTask />
        </div>
      </div>

      <OverlayTask />
    </div>
  );
};

const BGTask = () => {
  return (
    <div className="w-full rounded-lg bg-white p-4 text-[0.5rem] text-zinc-400 shadow blur-[1px] sm:text-xs">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </div>
  );
};

const OverlayTask = () => {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 w-64 -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-lg border-2 border-indigo-600 bg-white p-4 shadow-xl shadow-indigo-600/20">
      <div className="mb-2 flex items-center gap-1.5 text-xs">
        <span className="text-zinc-600">Design Team</span>
        <FiChevronRight />
        <div className="flex items-center gap-1 rounded bg-indigo-100 px-1.5 py-0.5 text-indigo-900">
          <FiAnchor />
          <span>Features</span>
        </div>
      </div>
      <span className="mb-0.5 block text-lg font-medium">
        Launch landing page
      </span>
      
    </div>
  );
};

const GanttComponent = () => {
  return (
    <div className="relative h-full min-w-96 p-4 pb-0 pt-0">
      <div className="grid h-full grid-cols-5">
        <span className="block h-full w-full pt-4 text-center text-sm">
          Sat
        </span>
        <span className="block h-full w-full bg-zinc-100 pt-4 text-center text-sm">
          Sun
        </span>
        <span className="block h-full w-full pt-4 text-center text-sm">
          Mon
        </span>
        <span className="block h-full w-full bg-zinc-100 pt-4 text-center text-sm">
          Tue
        </span>
        <span className="block h-full w-full pt-4 text-center text-sm">
          Wed
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-10 space-y-4 p-4">
        <div className="h-4 w-2/5 rounded-full bg-purple-500" />
        <div className="ml-[20%] h-4 w-3/5 rounded-full bg-blue-500" />
        <div className="flex w-full">
          <div className="h-4 w-3/5 rounded-full bg-green-500" />
          <div className="h-4 w-1/5 rounded-full bg-blue-500" />
        </div>
        <div className="ml-[60%] h-4 w-2/5 rounded-full bg-amber-500" />
        <div className="h-4 w-1/5 rounded-full bg-pink-500" />
        <div className="flex w-full">
          <div className="ml-[60%] h-4 w-1/5 rounded-full bg-purple-500" />
          <div className="h-4 w-1/5 rounded-full bg-pink-500" />
        </div>
        <div className="ml-[60%] h-4 w-2/5 rounded-full bg-green-500" />
        <div className="ml-[20%] h-4 w-3/5 rounded-full bg-amber-500" />
        <div className="flex w-full">
          <div className="h-4 w-2/5 rounded-full bg-red-500" />
          <div className="ml-[20%] h-4 w-1/5 rounded-full bg-red-500" />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/3 top-0 w-0.5 bg-indigo-600">
        <span className="absolute left-0 top-0 -translate-x-1/2 rounded-b bg-indigo-500 px-1.5 pb-0.5 text-xs font-medium text-white">
          Now
        </span>
      </div>
    </div>
  );
};

const DocumentationComponent = () => {
  return (
    <div className="relative p-4">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEye />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEdit />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiAlignLeft />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiItalic />
        </span>
      </div>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-900">
          Graphic designer
        </span>
        <span className="block w-fit rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-900">
          videographer
        </span>
      </div>
      <span className="relative mb-1.5 inline-block text-lg font-medium">
        Shoot ads and make videos for products
        <span className="inline-block scale-150 animate-pulse text-green-600">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-green-600" />
      </span>
      <br />
      <span className="relative text-xs text-zinc-600 sm:text-sm">
      Our Product Photography services are designed to make your products stand out in an increasingly visual digital world.
       We don’t just take pictures — we craft high-quality, eye-catching images that tell a story and drive sales.{" "}
        <span className="inline-block scale-150 animate-pulse text-[#86CFEC]">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-[#86CFEC]" />
      </span>
    </div>
  );
};

const Metaads = () =>{
  return (
    <div className="relative p-4">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEye />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEdit />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiAlignLeft />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiItalic />
        </span>
      </div>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-900">
          Meta ad expert
        </span>
       
      </div>
      <span className="relative mb-1.5 inline-block text-lg font-medium">
        Social media Advertisements
        <span className="inline-block scale-150 animate-pulse text-green-600">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-green-600" />
      </span>
      <br />
      <span className="relative text-xs text-zinc-600 sm:text-sm">
      Branding is more than just a logo—it's the entire identity of your business. At Brand Elevators,
       we help you build a brand that is not only visually striking but also emotionally engaging, consistent, and memorable.{" "}
        <span className="inline-block scale-150 animate-pulse text-[#86CFEC]">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-[#86CFEC]" />
      </span>
    </div>
  );
};

const SMM = () =>{
  return (
    <div className="relative p-4">
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEye />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiEdit />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiAlignLeft />
        </span>
        <span className="block w-fit rounded bg-zinc-200 p-2">
          <FiItalic />
        </span>
      </div>
      <div className="mb-4 flex items-center gap-1.5">
        <span className="block w-fit rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-900">
          SMM
        </span>
       
      </div>
      <span className="relative mb-1.5 inline-block text-lg font-medium">
        Reach more Grow more
        <span className="inline-block scale-150 animate-pulse text-green-600">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-green-600" />
      </span>
      <br />
      <span className="relative text-xs text-zinc-600 sm:text-sm">
      Whether you're launching a new business or rebranding an existing one, we create a strong foundation that tells your story, builds trust, and connects with your audience.
.{" "}
        <span className="inline-block scale-150 animate-pulse text-[#86CFEC]">
          |
        </span>
        <BsFillCursorFill className="inline-block translate-y-full -rotate-90 text-3xl text-[#86CFEC]" />
      </span>
    </div>
  );
};



















export const data = [
  {
    id: 1,
    title: "Search Engine Optimization",
    Component: IssuesComponent,
    cardTitle: "SEO",
    cardSubtitle:
      "Get found on Google with smart strategies that improve visibility and drive organic traffic.",
  },
  {
    id: 2,
    title: "Website Designing",
    Component: KanbanComponent,
    cardTitle: "Full stack websites",
    cardSubtitle:
      "Modern, responsive, and user-friendly websites that reflect your brand and convert visitors into customers.",
  },
  {
    id: 3,
    title: "Ad Shoots",
    Component: GanttComponent,
    cardTitle: "Advertisements",
    cardSubtitle:
      "Creative and professional video and photo content tailored for your digital campaigns.",
  },
  {
    id: 4,
    title: "Photography & Videography",
    Component: DocumentationComponent,
    cardTitle: "Improving quality of content",
    cardSubtitle:
      "High-quality visuals that capture your brand's essence and engage your audience.",
  },
  {
    id: 5,
    title: "Meta Ads",
    Component: Metaads,
    cardTitle: "Reaching audience",
    cardSubtitle:
      "Performance-driven campaigns to reach your ideal audience and maximize ROI.",
  },
  {
    id: 6,
    title: "Social Media Marketing",
    Component: SMM,
    cardTitle: "Grow more",
    cardSubtitle:
      "Build your community, grow your followers, and turn engagement into leads across all major platforms.",
  }
];
