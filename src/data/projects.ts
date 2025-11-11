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
    "name": "[pending]",
    "desc": "initializing new projects... stand by.",
    "links": { "repo": "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
  },
];