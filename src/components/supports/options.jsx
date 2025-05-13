import { MotionConfig, motion } from "framer-motion";

const Testimonial = ({ imgSrc, name, title, company, content }) => (
  <MotionConfig
    transition={{
      duration: 0.2,
      ease: "easeInOut",
    }}
  >
    <motion.div
      initial={{
        y: 0,
      }}
      animate={{
        y: -8,
      }}
      exit={{
        y: 0,
      }}
      className="w-full overflow-hidden rounded-lg border-2 border-zinc-900 bg-white p-8 md:p-12"
    >
      <div className="mb-6 flex items-center gap-6">
        <div className="rounded-lg bg-zinc-900">
          <motion.img
            initial={{
              rotate: "0deg",
              opacity: 0,
            }}
            animate={{
              rotate: "3deg",
              opacity: 1,
            }}
            exit={{
              rotate: "0deg",
              opacity: 0,
            }}
            src={imgSrc}
            alt="avatar"
            className="size-24 rounded-lg border-2 border-zinc-900 bg-[#A7D2AA]"
          />
        </div>
        <motion.div
          initial={{
            y: 12,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -12,
            opacity: 0,
          }}
        >
          <span className="mb-1.5 block text-3xl font-medium">{name}</span>
          <span className="text-zinc-600">
            {title} – <span className="text-[#86CFEC]">{company}</span>
          </span>
        </motion.div>
      </div>
      <motion.p
        initial={{
          y: 12,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: -12,
          opacity: 0,
        }}
        className="text-xl leading-relaxed"
      >
        {content}
      </motion.p>
    </motion.div>
  </MotionConfig>
);

export const OPTIONS = [
  {
    title: "Startups",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Jeff"
        name="Amrendra W."
        title="CEO"
        company="The Company"
        content="Generate buzz around product launches, build early user communities, attract investors, and validate ideas with real-time feedback and engagement."
      />
    ),
  },
  {
    title: "YouTubers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dan"
        name="Dan S."
        title="YouTuber"
        company="@TheChannel"
        content="Tease upcoming videos, repurpose clips into reels/shorts, and engage subscribers through comments, polls, and community posts."
      />
    ),
  },
  {
    title: "Bloggers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Carey"
        name="Rahul sharma."
        title="Writer"
        company="theblog.com"
        content="Promote blog posts, attract readers,
         and grow email lists by sharing catchy headlines and helpful snippets 
         across platforms."
      />
    ),
  },
  {
    title: "Authors",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Dani"
        name="Moriah H."
        title="Author"
        company="Books About Things"
        content="Build anticipation for book launches, share behind-the-scenes writing processes, and interact with readers for better reach and loyalty."
      />
    ),
  },
  {
    title: "Designers",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Phil"
        name="Phil K."
        title="UI/UX Design"
        company="The Other Company"
        content="Share portfolio pieces, design tips, and process videos to attract freelance gigs, brand deals, and creative collaborations."
      />
    ),
  },
  {
    title: "Consultants",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Stetson"
        name="Stetson R."
        title="Consultant"
        company="The Company Company"
        content="Showcase expertise with tips, case studies, and testimonials. Social proof builds trust and converts followers into paying clients."
      />
    ),
  },

  {
    title: "Local Business",
    Content: () => (
      <Testimonial
        imgSrc="https://api.dicebear.com/8.x/notionists/svg?seed=Joanne"
        name="Joanne F."
        title="Business Owner"
        company="The Local Company"
        content="Attract nearby customers with geo-targeted promotions, customer reviews, behind-the-scenes content, and local partnerships."
      />
    ),
  },
];
