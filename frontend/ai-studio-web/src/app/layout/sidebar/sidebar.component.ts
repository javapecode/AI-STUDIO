import { Component } from '@angular/core';
import { MENU_ITEMS } from '../../core/constants/menu';
import { RouterLink, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 menuItems = MENU_ITEMS;
}
