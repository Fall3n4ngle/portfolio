"use client";

import { Button } from "@/components/ui";
import { ArrowDown, ArrowDownToLine } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/hooks/useSectionInView";
import Link from "next/link";
import { useActiveSection } from "@/providers";

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.75);
  const { scrollToSection } = useActiveSection();

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-screen max-h-[800px] scroll-mt-24 items-center justify-center gap-24 text-center"
    >
      <div className="max-w-[750px]">
        <motion.h3
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I&apos;m Alex
        </motion.h3>
        <motion.h1
          className="mb-5"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          I&apos;m a Frontend Developer
        </motion.h1>
        <motion.p
          className="lead mb-5"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.2,
          }}
        >
          I specialize in building modern, responsive, fast, seo-friendly and
          accessible web applications using react.js and next.js
        </motion.p>
        <motion.div
          className="flex flex-wrap-reverse items-center justify-center gap-3"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
          }}
        >
          <Link href="#projects" onClick={() => scrollToSection("Projects")}>
            <Button>
              Projects <ArrowDown className="h-6 w-6" />
            </Button>
          </Link>
          <Button variant="secondary">
            Download CV <ArrowDownToLine className="h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
