import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-timeline-toolbar',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './timeline-toolbar.component.html',
  styleUrl: './timeline-toolbar.component.css'
})
export class TimelineToolbarComponent {

}