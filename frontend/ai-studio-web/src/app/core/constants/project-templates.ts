import { ProjectTemplate } from '../../shared/interfaces/project-template.interface';

export const PROJECT_TEMPLATES: ProjectTemplate[] = [

  {
    id: 'youtube',
    name: 'YouTube',
    width: 1920,
    height: 1080,
    fps: 30,
    icon: 'smart_display'
  },

  {
    id: 'shorts',
    name: 'YouTube Shorts',
    width: 1080,
    height: 1920,
    fps: 30,
    icon: 'smartphone'
  },

  {
    id: 'instagram',
    name: 'Instagram Post',
    width: 1080,
    height: 1080,
    fps: 30,
    icon: 'photo_camera'
  },

  {
    id: 'facebook',
    name: 'Facebook Post',
    width: 1080,
    height: 1350,
    fps: 30,
    icon: 'public'
  },

  {
    id: 'custom',
    name: 'Custom',
    width: 1920,
    height: 1080,
    fps: 30,
    icon: 'tune'
  }

];