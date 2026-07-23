import { Project } from '../../shared/interfaces/project.interface';

export const DEFAULT_PROJECT: Project = {

  id: 0,

  name: 'Untitled Project',

  width: 1920,

  height: 1080,

  fps: 30,

  duration: 60,

  background: '#000000',

  createdAt: new Date(),

  updatedAt: new Date()

};