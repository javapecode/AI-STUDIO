import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-welcome-banner',
  standalone: true,
  imports: [MatIconModule,MatButtonModule],
  templateUrl: './welcome-banner.component.html',
  styleUrl: './welcome-banner.component.css'
})
export class WelcomeBannerComponent {

}
