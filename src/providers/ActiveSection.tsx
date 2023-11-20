import { useSafeContext } from "@/hooks/useSafeContext";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from "react";

type SectionName = NavigationItem["name"];

type ActiveSectionContextType = {
  activeSection: NavigationItem["name"];
  timeOfLastClick: number;
  scrollToSection: (name: SectionName) => void;
  setActiveSection: Dispatch<SetStateAction<SectionName>>
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null,
);

export default function ActiveSectionContextProvider({
  children,
}: PropsWithChildren) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  const scrollToSection = (name: SectionName) => {
    setActiveSection(name);
    setTimeOfLastClick(Date.now());
  };

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        scrollToSection,
        timeOfLastClick,
        setActiveSection
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export const useActiveSection = () =>
  useSafeContext(
    ActiveSectionContext,
    "cannot access active section context outside active section provider",
  );
