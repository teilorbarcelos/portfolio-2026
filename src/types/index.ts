export interface PersonalInfoProps {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string | null;
  location: string;
  avatar: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string | null;
  technologies: string[];
  github?: string | null;
  demo?: string | null;
  category: string;
  period?: string;
}

export interface SkillProps {
  name: string;
  level: number;
}

export interface SkillCategoryProps {
  category: string;
  items: SkillProps[];
}

export interface ExperienceProps {
  id: number;
  company: string;
  position: string;
  period: string | null;
  description: string;
  technologies: string[];
  website?: string | null;
}

export interface EducationProps {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
  website?: string | null;
  status?: "completed" | "in_progress";
}

