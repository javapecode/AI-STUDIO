import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dashboard-card',
  standalone: true,
  imports: [ MatIconModule],
  templateUrl: './dashboard-card.component.html',
  styleUrl: './dashboard-card.component.css'
})
export class DashboardCardComponent {
 @Input() title = '';

  @Input() value = '';

  @Input() icon = '';

}
