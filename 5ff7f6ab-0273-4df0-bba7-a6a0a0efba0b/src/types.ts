export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  location: string;
  status: string;
  description: string;
  thumbnailUrl: string;
  aspectRatio: 'tall' | 'wide' | 'square';
  colSpan: number;
}