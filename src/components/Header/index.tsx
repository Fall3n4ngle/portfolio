import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import Navigation from "./Navigation";
import SidebarNavigation from "./SidebarNavigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 w-full py-3 bg-bg-primary z-50">
      <div className=" container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="md:hidden mt-1">
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
    </header>
  );
}
