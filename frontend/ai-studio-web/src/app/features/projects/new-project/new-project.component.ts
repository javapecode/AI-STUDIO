import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../../core/services/project.service';
import { Router } from '@angular/router';
import { Project } from '../../../shared/interfaces/project.interface';


@Component({
  selector: 'app-new-project',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './new-project.component.html',
  styleUrl: './new-project.component.css'
})
export class NewProjectComponent {


  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}


  project = {

    name: '',

    aspectRatio: '16:9',

    width: 1920,

    height: 1080,

    template: '',

    background: '#000000'

  };



  screenSizes = [

    {
      ratio: '16:9',
      name: 'YouTube / Desktop',
      width: 1920,
      height: 1080,
      resolution: '1920x1080'
    },

    {
      ratio: '9:16',
      name: 'Shorts / Reels',
      width: 1080,
      height: 1920,
      resolution: '1080x1920'
    },

    {
      ratio: '1:1',
      name: 'Instagram Post',
      width: 1080,
      height: 1080,
      resolution: '1080x1080'
    },

    {
      ratio: '4:5',
      name: 'Instagram Portrait',
      width: 1080,
      height: 1350,
      resolution: '1080x1350'
    }

  ];



  templates = [

    {
      id:'wedding',
      name:'Wedding',
      icon:'💍'
    },

    {
      id:'birthday',
      name:'Birthday',
      icon:'🎂'
    },

    {
      id:'youtube',
      name:'YouTube Promo',
      icon:'▶️'
    },

    {
      id:'business',
      name:'Business',
      icon:'🏢'
    }

  ];



  selectSize(size:any){

    this.project.aspectRatio = size.ratio;

    this.project.width = size.width;

    this.project.height = size.height;

  }



  selectTemplate(template:any){

    this.project.template = template.id;

  }



  createProject(){


    if(!this.project.name.trim()){

      alert('Please enter project name');

      return;

    }


    if(!this.project.template){

      alert('Please select template');

      return;

    }


const newProject: Project = {

  id: crypto.randomUUID(),

  name: this.project.name,

  width: this.project.width,

  height: this.project.height,

  fps: 30,

  duration: 0,

  background: this.project.background,

  template: this.project.template || '',

  createdAt: new Date(),

  updatedAt: new Date()

};


    this.projectService.createProject(newProject);


    this.router.navigate(['/editor']);

  }


}