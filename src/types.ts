import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  icon: LucideIcon;
  benefits: string[];
  process: string[];
  price: string;
  time: string;
}

export interface Review {
  name: string;
  service: string;
  text: string;
  rating: number;
  date: string;
}

export interface Work {
  id: number;
  title: string;
  description: string;
  before: string;
  after: string;
  brand: string;
}

export interface TrustStat {
  icon: LucideIcon;
  label: string;
  value: string;
  color: string;
}

export interface Area {
  id: string;
  name: string;
  focus: string;
}

export type Theme = 'light' | 'dark';
