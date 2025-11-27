export interface PersonalInfoProps {
  name: string;
  role: string;
  bio: string;
  email: string;
  phone: string;
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
  image: string;
  technologies: string[];
  github?: string;
  demo?: string | null;
  category: string;
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
  period: string;
  description: string;
  technologies: string[];
}

export interface EducationProps {
  id: number;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

