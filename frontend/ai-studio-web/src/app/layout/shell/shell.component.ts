import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { LayoutService } from '../../core/services/layout.service';
import { QuickToolbarComponent } from "../quick-toolbar/quick-toolbar.component";

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    RouterOutlet,
    QuickToolbarComponent
],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.css'
})
export class ShellComponent {

  constructor(public layoutService: LayoutService){}
}