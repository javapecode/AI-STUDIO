import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

import { TimelineRenderService } from '../../services/timeline-render.service';

@Component({
  selector: 'app-timeline-ruler',
  standalone: true,
  templateUrl: './timeline-ruler.component.html',
  styleUrl: './timeline-ruler.component.css'
})
export class TimelineRulerComponent implements AfterViewInit {

  @ViewChild('timelineCanvas')
  canvas!: ElementRef<HTMLCanvasElement>;

  constructor(
    private renderer: TimelineRenderService
  ) {}

  ngAfterViewInit(): void {

    const canvas = this.canvas.nativeElement;

    canvas.width = canvas.offsetWidth;

    canvas.height = 32;

    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    this.renderer.drawGrid(
      ctx,
      canvas.width,
      canvas.height,
      40
    );

  }

}