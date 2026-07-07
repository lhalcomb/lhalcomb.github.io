export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "Summer 2026",
    title: "Software Engineer Intern",
    company: "Cox Health",
    description:
      "Developed new functionality for an existing application to automate tedious tasks for a client at Cox Health. Mentored by a team of Application Developers who assisted in delivering a minimum viable product."
    
  },
  
];
