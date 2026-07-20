import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShellComponent } from "./layout/shell/shell.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ai-studio-web';
}
