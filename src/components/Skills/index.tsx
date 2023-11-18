import { skills } from "@/lib/const";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section className="mb-20">
      <h3 className="section-title mb-14 md:mb-20">Skills</h3>
      <ul className="mx-auto flex max-w-[650px] flex-wrap items-center justify-center gap-3">
        {skills.map((skill, index) => (
          <SkillCard key={index} title={skill} index={index} />
        ))}
      </ul>
    </section>
  );
}
