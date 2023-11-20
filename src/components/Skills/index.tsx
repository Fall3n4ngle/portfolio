"use client";

import { skills } from "@/lib/const";
import SkillCard from "./SkillCard";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Skills() {
  const { ref } = useSectionInView("Skills", 1);

  return (
    <section id="skills" ref={ref} className="mb-20 scroll-mt-24">
      <h3 className="section-title mb-14 md:mb-20">Skills</h3>
      <ul className="mx-auto flex max-w-[650px] flex-wrap items-center justify-center gap-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill} index={index} />
        ))}
      </ul>
    </section>
  );
}
