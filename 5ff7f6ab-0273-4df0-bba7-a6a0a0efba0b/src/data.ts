import { Project } from './types';

export const projects: Project[] = [
{
  id: 'g7-residential-building',
  number: '01',
  title: 'G+7 Residential Building',
  category: 'Architecture / Planning',
  year: '2024',
  location: 'Dhaka, BD',
  status: 'Completed',
  description: 'Developed complete 2D architectural drawings including floor plans, elevations, and sections...',
  thumbnailUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  aspectRatio: 'tall',
  colSpan: 5,
  gallery: [
  // এখানে আপনার টেকনিক্যাল ড্রয়িংগুলো যোগ করা হয়েছে
  { url: 'https://i.ibb.co.com/vx688Rpq/Screenshot-2025-07-01-120401.png', caption: 'DETAILED FLOOR PLAN' },
  { url: 'https://i.ibb.co.com/Lzhf7g17/Screenshot-2026-04-07-002552.png', caption: 'STRUCTURAL PART ANALYSIS' },
  { url: 'https://i.ibb.co.com/Y40P6QSJ/Dinning-1.jpg', caption: 'INTERIOR RENDERING' },
  { url: 'https://i.ibb.co.com/F47h3sW0/living-room1.png', caption: 'INTERIOR RENDERING' },
  { url: 'https://i.ibb.co.com/TqgHWq98/bedroom-interior-10.png', caption: 'INTERIOR RENDERING' }]

},
{
  id: 'mosque-complex-design',
  number: '02',
  title: 'Mosque Complex Design',
  category: 'Religious Architecture',
  year: '2025',
  location: 'Mymensingh, BD',
  status: 'Completed',
  description: 'A spiritual design project involving a prayer hall, ablution area, dome, and minaret...',
  thumbnailUrl: 'https://i.ibb.co.com/QvZ8DWFX/image-1766332294875.png',
  aspectRatio: 'wide',
  colSpan: 7,
  gallery: [
  // মসজিদের ড্রয়িংগুলো এখানে যোগ করা হয়েছে
  { url: 'https://i.ibb.co.com/vx9pmW9X/Mosque-s-f.jpg', caption: 'SECTIONAL STUDY' },
  { url: 'https://i.ibb.co.com/bRqvqr2n/Screenshot-2026-04-07-015945.png', caption: 'MINARET DETAIL DRAFT' },
  { url: 'https://i.ibb.co.com/adcac778/image-1766332294875.jpg', caption: 'INTERIOR VIEW' }]

},
{
  id: 'duplex-residential-house',
  number: '03',
  title: 'Duplex Residential House',
  category: 'Interior & Exterior',
  year: '2025',
  location: 'Dhaka, BD',
  status: 'Completed',
  description: 'A comprehensive duplex design focusing on architectural planning and facade aesthetics...',
  thumbnailUrl: 'https://i.ibb.co.com/6cFhgp0X/myarchitectai-m7avsyhe5-sd.png',
  aspectRatio: 'wide',
  colSpan: 7,
  gallery: [
  // ডুপ্লেক্সের ড্রয়িংগুলো এখানে যোগ করা হয়েছে
  { url: 'https://i.ibb.co.com/B2pS4XV1/Screenshot-2026-04-07-021850.png', caption: 'FACADE PLANNING' },
  { url: 'https://i.ibb.co.com/6cfWfXMz/Screenshot-2026-04-07-023234.png', caption: 'ELEVATION LAYOUT' },
  { url: 'https://i.ibb.co.com/kVFybxnV/bed-room01.png', caption: 'INTERIOR VIEW' },
  { url: 'https://i.ibb.co.com/VWMsxhb9/KITCHEN.jpg', caption: 'INTERIOR VIEW' }]


}];