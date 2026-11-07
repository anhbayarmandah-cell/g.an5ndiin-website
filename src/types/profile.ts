export interface SkillItem {
  id: string;
  name: string;
  category: 'tech' | 'business' | 'soft';
  description: string;
  level: number;
}

export interface RoadmapStep {
  step: string;
  title: string;
  target: string;
  status: 'in-progress' | 'upcoming';
  description: string;
}

export interface FactItem {
  icon: string;
  title: string;
  detail: string;
  tag?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  tags: string[];
  features?: string[];
  category: string;
  isFeatured?: boolean;
}

export interface AnandProfileData {
  name: string;
  age: number;
  birthday: string;
  favoriteSeason: string;
  religion: string;
  height: string;
  zodiac: string;
  family: string;
  role: string;
  location: string;
  tagline: string;
  bio: string;
  studyPurpose: string;
  careerVision: {
    title: string;
    horizon: string;
    focus: string;
    rationale: string;
    targetProducts: string[];
  };
  skills: SkillItem[];
  roadmap: RoadmapStep[];
  hobbies: {
    sport: {
      title: string;
      teams: string[];
      role: string;
    };
    music: {
      artists: string[];
      favoriteSong: string;
    };
    entertainment: {
      movies: string[];
      anime: string[];
      games: string[];
    };
    food: string;
    creative: string;
  };
  secretFacts: FactItem[];
  interestingFacts: FactItem[];
  projects?: ProjectItem[];
  motivationQuote?: {
    text: string;
    emoji: string;
    translation?: string;
  };
}

