export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  {
    year: "2026—Present",
    institution: "University of Iowa",
    degree: "Ph.D. in Computer Science",
    advisor: "Prof. Mehrdad Mohrammi",
  },
  {
    year: "2022—2026",
    institution: "Drury University",
    degree: "B.S. in Computer Science & B.A. in Mathematics",
    
  },
];
