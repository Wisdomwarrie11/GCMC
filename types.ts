export type Language = 'en' | 'pidgin';

export interface ContentText {
  en: string;
  pidgin: string;
}

export interface ServiceData {
  id: string;
  title: ContentText;
  description: ContentText;
  iconName: string;
  image: string;
}

export interface SymptomCategory {
  id: string;
  label: ContentText;
  symptoms: {
    name: ContentText;
    recommendedService: string; // ID of the service
  }[];
}

export interface LocationData {
  id: string;
  name: string;
  address: string;
  phone: string;
  mapLink: string;
  availableServices: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: ContentText;
  text: ContentText;
}

export interface BlogPost {
  id: number;
  title: ContentText;
  summary: ContentText;
  date: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}