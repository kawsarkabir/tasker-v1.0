export const defaultTasks = [
  {
    id: crypto.randomUUID(),
    title: "Complete Assignment 02",
    description: "Complete the assignment 02 before the deadline",
    tags: ["lws", "react", "assignment"],
    priority: "high",
    isFavorite: true,
  },
  {
    id: crypto.randomUUID(),
    title: "Write Blog Post on React",
    description: "Write a detailed blog post about React Hooks and useState.",
    tags: ["react", "hooks", "blog"],
    priority: "medium",
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Fix CSS Bug in Footer",
    description:
      "Fix the footer layout issue in the project for mobile responsiveness.",
    tags: ["css", "bug", "footer"],
    priority: "low",
    isFavorite: false,
  },
  {
    id: crypto.randomUUID(),
    title: "Update Portfolio Website",
    description:
      "Add new projects and update the design of the portfolio website.",
    tags: ["portfolio", "web development", "personal"],
    priority: "high",
    isFavorite: false,
  },
];
