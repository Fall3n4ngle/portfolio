import Image, { StaticImageData } from "next/image";
import { Badge, Button } from "@/components/ui";
import Link from "next/link";
import { Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

type Props = Omit<Project, "image"> & {
  direction: Direction;
  image: StaticImageData;
};

export default function ProjectCard({
  categories,
  description,
  githubLink,
  image,
  siteLink,
  title,
  direction,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.article
      className="flex flex-col items-center gap-7 sm:flex-row"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <div
        className={cn("relative aspect-[9/6] w-full sm:basis-1/2", {
          "sm:order-2": direction === "ltr",
          "sm:order-1": direction === "rtl",
        })}
      >
        <Image src={image} alt={title} fill className="rounded-xl" />
      </div>
      <div
        className={cn("text-center sm:basis-1/2 sm:text-left", {
          "sm:order-1": direction === "ltr",
          "sm:order-2": direction === "rtl",
        })}
      >
        <div className="mb-4 flex items-center justify-center gap-3 sm:justify-start lg:mb-5">
          {categories.map((category) => (
            <Badge key={category}>{category}</Badge>
          ))}
        </div>
        <h4 className="mb-1">{title}</h4>
        <p className="mb-5 text-sm text-text-primary/70 md:text-base lg:mb-6">
          {description}
        </p>
        <div className=" flex items-center justify-center gap-3 sm:justify-start">
          <Link href={siteLink} target="_blank">
            <Button>View site</Button>
          </Link>
          <Link href={githubLink} target="_blank">
            <Button variant="icon">
              <Github className="h-6 w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
