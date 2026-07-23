import { Injectable } from '@angular/core';
import { Project } from '../../shared/interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  private currentProject: Project | null = null;


  createProject(project: Project){

    this.currentProject = project;

    localStorage.setItem(
      'currentProject',
      JSON.stringify(project)
    );

  }



  getCurrentProject(): Project | null {


    if(this.currentProject){

      return this.currentProject;

    }


    const savedProject = localStorage.getItem('currentProject');


    if(savedProject){

      this.currentProject = JSON.parse(savedProject);

      return this.currentProject;

    }


    return null;

  }



  clearProject(){

    this.currentProject = null;

    localStorage.removeItem('currentProject');

  }


}