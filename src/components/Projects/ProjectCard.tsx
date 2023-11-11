type Props = {
  image: string;
  categories: string[];
  title: string;
  description: string;
  siteLink: string;
  githubLink: string;
};

export default function ProjectCard({
  categories,
  description,
  githubLink,
  image,
  siteLink,
  title,
}: Props) {
  return <div>ProjectCard</div>;
}
