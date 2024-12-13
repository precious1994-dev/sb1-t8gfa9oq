import { LucideIcon } from 'lucide-react';

export interface Ministry {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

export interface Schedule {
  day: string;
  time: string;
  activity: string;
}

export interface Activity {
  title: string;
  description: string;
}

export interface Leader {
  name: string;
  role: string;
  image: string;
}

export interface MinistryContent {
  title: string;
  subtitle: string;
  description: string;
  vision: string;
  schedule: Schedule[];
  activities: Activity[];
  leaders: Leader[];
}