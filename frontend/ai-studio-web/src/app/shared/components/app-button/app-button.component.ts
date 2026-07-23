import { Component, Input } from '@angular/core';
import { NgClass } from "../../../../../node_modules/@angular/common/index";

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './app-button.component.html',
  styleUrl: './app-button.component.css',
  imports: [NgClass]
})
export class AppButtonComponent {

  @Input() label: string = 'Button';

  @Input() type: 
    'primary' | 
    'secondary' | 
    'danger' = 'primary';

  @Input() disabled: boolean = false;

}