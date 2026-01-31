
import { Project, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'contact', href: '/#contact' },
  { label: 'works', href: '/#works' },
  { label: 'about', href: '#/about' }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "MINIMALIST PAVILION",
    category: "Architecture / UIUX",
    year: "2024-2025",
    image: "https://images.unsplash.com/photo-1485628390555-1a7bd503f9fe?auto=format&fit=crop&q=80&w=1200&sat=-100",
    description: "A study in monochromatic forms and structural transparency, balancing void and mass."
  },
  {
    id: 2,
    title: "THE WHITE BOX",
    category: "Residential / Interior",
    year: "2024",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200&sat=-100",
    description: "Exploring the boundaries of internal living spaces through extreme minimalist geometries."
  },
  {
    id: 3,
    title: "LINEAR HORIZON",
    category: "Landscape Design",
    year: "2023-2024",
    image: "https://images.unsplash.com/photo-1506443431352-2f7f8d3d8d6c?auto=format&fit=crop&q=80&w=1200&sat=-100",
    description: "A horizontal structure designed to merge seamlessly with the desert landscape."
  },
  {
    id: 4,
    title: "OBSIDIAN CORE",
    category: "Exhibition / Brand",
    year: "2023",
    image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&q=80&w=1200&sat=-100",
    description: "Dark reflective surfaces meet sharp architectural lines in this experimental pavilion."
  }
];
