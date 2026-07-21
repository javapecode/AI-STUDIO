import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ProjectListComponent } from './features/projects/project-list/project-list.component';
import { VideoEditorComponent } from './features/editor/video-editor/video-editor.component';
import { TemplateListComponent } from './features/templates/template-list/template-list.component';
import { SettingsComponent } from './features/settings/settings/settings.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'editor',
    component: VideoEditorComponent
  },
  {
    path: 'templates',
    component: TemplateListComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];