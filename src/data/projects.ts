export interface Project {
  name: string;
  desc: string;
  links: {
    repo: string;
    docs?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    name: "[dotfiles]",
    desc: "Automated opinionated environment setup... for me.",
    links: { repo: "https://github.com/austryx/dotfiles" },
  },
  {
    name: "[pending]",
    desc: "initializing new projects... stand by.",
    links: { repo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
  },
];
