import { Component } from '@angular/core';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { CommonModule } from '@angular/common';
import { RecentProjectsComponent } from './components/recent-projects/recent-projects.component';
import { QuickActionsComponent } from './components/quick-actions/quick-actions.component';
import { DashboardStat } from '../../shared/interfaces/dashboard-stat.interface';
import { DashboardService } from '../../core/services/dashboard.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, WelcomeBannerComponent, DashboardCardComponent, RecentProjectsComponent, QuickActionsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  stats: DashboardStat[] = [];


  constructor(
    private dashboardService: DashboardService
  ) { }
  ngOnInit() {

    this.stats =
      this.dashboardService.getStats();

  }

}
