import { Component } from '@angular/core';
import { MENU_ITEMS } from '../../core/constants/menu';
import { RouterLink, RouterLinkActive, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../core/services/layout.service';
import { HostBinding } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, CommonModule, RouterModule,MatIconModule,RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  menuItems = MENU_ITEMS;
  constructor(public layoutService: LayoutService) { }

  @HostBinding('class.collapsed')
  get collapsed() {

    return this.layoutService.sidebarCollapsed();

  }
}
