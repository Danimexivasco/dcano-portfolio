import { TechnologyItem } from "@/types";

export const filterMatchingTechnologies = (projectTechnologies: Array<string>, allTechnologies: Array<TechnologyItem>) => {
  if (!projectTechnologies?.length || !allTechnologies?.length) return []
  return allTechnologies.filter(tech => projectTechnologies?.includes(tech.name));
};