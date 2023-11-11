import LanguageToggle from "./LanguageToggle";
import Logo from "./Logo";
import Navigation from "./Navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="py-3">
      <div className=" container flex items-center justify-between">
        <Logo />
        <Navigation />
        <div>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
