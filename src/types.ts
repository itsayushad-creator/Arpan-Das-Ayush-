export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'fullstack' | 'opensource' | 'security' | 'creative';
  tags: string[];
  metrics?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  iconName: string;
  highlights: string[];
  architecture?: string;
}

export interface SkillItem {
  name: string;
  level: number; // 1 to 100
  category: 'frontend' | 'backend' | 'tools' | 'knowledge' | 'security';
  icon: string;
  experienceYears?: string;
  description: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  badge?: string;
  description: string;
  bullets: string[];
  tags: string[];
  type: 'opensource' | 'dev' | 'media' | 'education';
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  readTime: string;
  date: string;
  tags: string[];
  category: string;
}

export interface QuickStat {
  label: string;
  value: string;
  sublabel: string;
}
