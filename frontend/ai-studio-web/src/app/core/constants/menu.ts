import { MenuItem } from '../models/menu-item.model';

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    route: '/'
  },
  {
    title: 'Projects',
    icon: 'folder',
    route: '/projects'
  },
  {
    title: 'Video Editor',
    icon: 'movie',
    route: '/editor'
  },
  {
    title: 'Templates',
    icon: 'grid_view',
    route: '/templates'
  },
  {
    title: 'Settings',
    icon: 'settings',
    route: '/settings'
  }
];