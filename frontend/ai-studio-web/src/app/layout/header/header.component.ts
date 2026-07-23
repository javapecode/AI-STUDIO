import { Component } from '@angular/core';
import { LayoutService } from '../../core/services/layout.service';
import { ThemeService } from '../../core/services/theme.service';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public layoutService: LayoutService, public themeService: ThemeService) {}

  toggleSidebar() {
    this.layoutService.toggleSidebar();
  }
}
