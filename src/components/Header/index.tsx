"use client";

import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SidebarNavigation from "./SidebarNavigation";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full bg-bg-primary py-3"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className=" container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="mt-1 md:hidden">
            <SidebarNavigation />
          </div>
          <Logo />
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </motion.header>
  );
}
