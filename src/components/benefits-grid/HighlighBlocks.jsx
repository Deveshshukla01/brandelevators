import React from "react";
import { Block } from "./Block";
import {
  FiArrowUpRight,
  FiClipboard,
  FiCoffee,
  FiDollarSign,
  FiFeather,
  FiInbox,
  FiMove,
  FiRepeat,
  FiSmile,
} from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import { CardTitle } from "./CardTitle";
import { CardSubtitle } from "./CardSubtitle";

export const HighlighBlocks = () => {
  return (
    <>
      <HighlightBlock
        Icon={FiDollarSign}
        iconClassName="text-green-500"
        title="Strategy & Planning"
        subtitle="We create a tailored social media strategy based on your goals, audience,
         and industry trends."
      />
      <HighlightBlock
        Icon={FiArrowUpRight}
        iconClassName="text-pink-500"
        title=" Content Creation & Management"
        subtitle="Engaging content designed for your brand, including graphics, videos,
         stories, and posts — professionally managed and scheduled."
      />
      <HighlightBlock
        Icon={FiSmile}
        iconClassName="text-blue-500"
        title=" Wider Audience Reach"
        subtitle="Target local, national, or global audiences across multiple
         digital channels — cost-effectively and efficiently."
      />
      <HighlightBlock
        Icon={FiCoffee}
        iconClassName="text-orange-500"
        title="Paid Social Media Advertising"
        subtitle="Get immediate reach and results through Facebook, 
        Instagram, LinkedIn, and more. We create and manage ad campaigns that convert.
        "
      />
      <HighlightBlock
        Icon={FiFeather}
        iconClassName="text-zinc-500"
        title="Community Engagement"
        subtitle="We manage your interactions — responding to comments, messages,
         and reviews to build relationships with your audience."
      />
      <HighlightBlock
        Icon={FiInbox}
        iconClassName="text-purple-500"
        title=" Analytics & Reporting"
        subtitle="Stay informed with regular performance reports and insights to track growth,
         engagement, and ROI."
      />
      <HighlightBlock
        Icon={FiMove}
        iconClassName="text-fuchsia-500"
        title="Social Media Advertising"
        subtitle="Get immediate reach and results through Facebook, Instagram, LinkedIn, and more.
         We create and manage ad campaigns that convert."
      />
      <HighlightBlock
        Icon={FiClipboard}
        iconClassName="text-red-500"
        title="Content Creation & Management"
        subtitle="Engaging content designed for your brand, including graphics, videos, stories,
         and posts — professionally managed and scheduled."
      />
      <HighlightBlock
        Icon={FiRepeat}
        iconClassName="text-yellow-500"
        title=" Community Engagement"
        subtitle="We manage your interactions — responding to comments, messages, 
        and reviews to build relationships with your audience."
      />
    </>
  );
};

const HighlightBlock = ({ iconClassName, Icon, title, subtitle }) => (
  <Block className="col-span-3 space-y-1.5 md:col-span-1">
    <Icon className={twMerge("text-3xl text-indigo-600", iconClassName)} />
    <CardTitle>{title}</CardTitle>
    <CardSubtitle>{subtitle}</CardSubtitle>
  </Block>
);
