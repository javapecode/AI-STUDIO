import { Injectable } from '@angular/core';

import { DashboardStat } 
from '../../shared/interfaces/dashboard-stat.interface';

import { ProjectSummary } from '../../shared/interfaces/project-summary.interface';
import { Project } from '../../shared/interfaces/project.interface';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {


  constructor() { }



  getStats(): DashboardStat[] {


    return [

      {
        title:'Projects',
        value:'12',
        icon:'folder'
      },


      {
        title:'Videos',
        value:'48',
        icon:'movie'
      },


      {
        title:'Images',
        value:'320',
        icon:'image'
      },


      {
        title:'Storage',
        value:'15 GB',
        icon:'storage'
      }

    ];

  }



  getRecentProjects(): ProjectSummary[] {


    return [

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
      },


      {
        id:4,
        name:'Birthday Video',
        type:'Photo Video',
        icon:'🎂',
        status:'Draft'
      }

    ];

  }


}