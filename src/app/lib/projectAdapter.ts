import projectsData from "./projects.json";

export const getAllProjects = () => projectsData.projects;

export const getBasicProjectCards = () =>
  projectsData.projects.map((project) => ({
    id: project.id,
    title: project.tagline,
    Chip: project.name,
    image: project.thumbnail,
    link: `/Projects/${project.id}`,
    category: project.category, // ✅ Now supports array of categories
  }));

export const getProjectById = (id: string) =>
  projectsData.projects.find((p) => p.id === id);

// Optional: Filter helpers
export const getProjectsByCategory = (category: string) =>
  projectsData.projects.filter((p) =>
    p.category.includes(category)
  );
