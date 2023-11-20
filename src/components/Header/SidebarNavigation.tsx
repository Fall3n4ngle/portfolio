import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui";
import { navigation } from "@/lib/const";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/providers";
import { Menu } from "lucide-react";
import Link from "next/link";
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
      delay: index === 0 ? 0.2 : 0.04 * index + 0.2,
    },
  }),
};

export default function SidebarNavigation() {
  const { activeSection } = useActiveSection();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button>
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent className="flex w-full items-center justify-center bg-bg-secondary min-[440px]:max-w-[384px]">
        <nav>
          <ul className="flex flex-col items-center gap-3">
            {navigation.map(({ href, name }, index) => {
              const isActive = name === activeSection;

              return (
                <motion.li
                  key={href}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: false,
                  }}
                  custom={index}
                >
                  <Link href={href}>
                    <SheetClose
                      className={cn(
                        "inline-block rounded-3xl px-14 py-3 text-xl text-text-primary/70 transition-all",
                        isActive && "bg-bg-primary text-text-primary",
                      )}
                    >
                      {name}
                    </SheetClose>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
