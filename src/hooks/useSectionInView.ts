import { useActiveSection } from "@/providers/ActiveSection";
import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const useSectionInView = (
  sectionName: NavigationItem["name"],
  amount: number,
) => {
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { amount });

  useEffect(() => {
    if (isInView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [isInView, setActiveSection, sectionName, timeOfLastClick]);

  return { ref };
};
