import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [],
  templateUrl: './quick-actions.component.html',
  styleUrl: './quick-actions.component.css'
})
export class QuickActionsComponent {
 constructor(
    private router: Router
  ){}



  openNewProject(){

    this.router.navigate(['/projects/new']);

  }



  openEditor(){

    this.router.navigate(['/editor']);

  }



  openAI(){

    this.router.navigate(['/ai/create']);

  }



  uploadImages(){

    console.log('Open upload dialog');

  }

}
