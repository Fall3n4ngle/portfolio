"use client";

import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.02 * index,
    },
  }),
};

type Props = {
  title: string;
  index: number
};

export default function SkillCard({ title, index }: Props) {
  return (
    <motion.li
      className="h-[44px] whitespace-nowrap rounded-2xl bg-bg-secondary px-5 py-2.5 font-semibold sm:text-lg"
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {title}
    </motion.li>
  );
}
