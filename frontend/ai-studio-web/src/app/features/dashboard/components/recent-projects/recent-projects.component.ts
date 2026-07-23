import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Project } from '../../../../shared/interfaces/project.interface';
import { ProjectSummary } from '../../../../shared/interfaces/project-summary.interface';

@Component({
  selector: 'app-recent-projects',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './recent-projects.component.html',
  styleUrl: './recent-projects.component.css'
})
export class RecentProjectsComponent {
 projects: ProjectSummary[] = [

    {
      id:1,
      name:'Wedding Intro',
      type:'Video Project',
      icon:'🎬',
      status:'Completed'
    },

    {
      id:2,
      name:'YouTube Shorts',
      type:'Short Video',
      icon:'📱',
      status:'Editing'
    },

    {
      id:3,
      name:'Company Promo',
      type:'Marketing Video',
      icon:'🏢',
      status:'Completed'
    }

 ];
}
