"use client";

import { useTheme } from "@/providers";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/const";
import { useSectionInView } from "@/hooks/useSectionInView";

export default function Projects() {
  const { theme } = useTheme();
  const { ref } = useSectionInView("Projects", 0.25);

  return (
    <section id="projects" ref={ref} className="mx-auto mb-20 max-w-[900px] scroll-mt-24">
      <h3 className="section-title mb-14 md:mb-20">Projects</h3>
      <div className="flex flex-col gap-16">
        {projects.map(({ image, ...project }, index) => {
          const direction: Direction = index % 2 === 0 ? "rtl" : "ltr";
          const currentImage = theme === "dark" ? image.dark : image.light;

          return (
            <ProjectCard
              key={index}
              {...project}
              image={currentImage}
              direction={direction}
            />
          );
        })}
      </div>
    </section>
  );
}
