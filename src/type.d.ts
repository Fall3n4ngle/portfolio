type NavigationItem = {
  label: string;
  href: string;
};

type Direction = "rtl" | "ltr"

type Project = {
  image: {
    dark: StaticImageData;
    light: StaticImageData;
  };
  categories: string[];
  title: string;
  description: string;
  siteLink: string;
  githubLink: string;
};

type Skill = {
  image: StaticImageData
  title: string;
};