export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Layden Halcomb",
  title: "Ph.D. Student",
  institution: "University of Iowa",
  // Note that links work in the description
  description:
    "I am a first year PhD Student in Computer Science. My research spans artificial intelligence, machine learning, and reinforcement learning. I thrive on solving complex problems, relish the challenge of unraveling intricate puzzles, and consistently seek opportunities to push my skills further. ",
  email: "lhalcomb@uiowa.edu",
  imageUrl:
    "/laydenhalcomb.jpg",
  //googleScholarUrl: "https://scholar.google.com/citations?user=bWtMl_MAAAAJ",
  githubUsername: "lhalcomb",
  linkedinUsername: "lhalcomb",
  //blogUrl: "https://",
  //cvUrl: "https://",
  secretDescription: "I enjoy coffee, running, video games, and reading comic books. Check out my github projects! ",
};
