export interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  tools: string[];
  image: string;
  category: string; // HTML / CSS, JavaScript, ReactJS, Laravel, ASP.NET
  status?: 'completed' | 'upcoming';
  liveUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  tech: string[];
  type: 'Full Time' | 'Part Time' | 'Internship' | 'Project Based';
}

export interface Skill {
  name: string;
  logo: string;
}

export interface Certificate {
  id: string;
  name: string;
  platform: string;
  year: string;
  image: string;
  url?: string;
}
