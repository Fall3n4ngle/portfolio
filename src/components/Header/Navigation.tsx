import { navigation } from "@/lib/const";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/providers";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navigation() {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <nav className="rounded-3xl bg-bg-secondary px-2.5 py-1.5">
      <ul className="flex items-center gap-2 ">
        {navigation.map(({ href, name }) => {
          const isActive = name === activeSection;

          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  "relative z-20 inline-block rounded-3xl px-[15px] py-[5px] text-text-primary/70 transition-all hover:text-text-primary",
                  isActive && "text-text-primary",
                )}
                onClick={() => scrollToSection(name)}
              >
                {name}
                {isActive && (
                  <motion.span
                    className="absolute inset-0 -z-10 rounded-3xl bg-bg-primary"
                    layoutId="activeSection"
                  />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
