import { Routes } from '@angular/router';

import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ProjectListComponent } from './features/projects/project-list/project-list.component';
import { TemplateListComponent } from './features/templates/template-list/template-list.component';
import { SettingsComponent } from './features/settings/settings/settings.component';
import { NewProjectComponent } from './features/projects/new-project/new-project.component';
import { EditorComponent } from './features/editor/editor.component';
import { CreateComponent } from './features/ai/create/create.component'; 

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
    component: EditorComponent
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
    path:'projects/new',
    component:NewProjectComponent
},


{
    path:'editor',
    component:EditorComponent
},


{
    path:'ai/create',
    component:CreateComponent
},

  {
    path: '**',
    redirectTo: ''
  }
];