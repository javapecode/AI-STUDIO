import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineRenderService {

  drawGrid(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    pixelsPerSecond: number
  ): void {

    ctx.clearRect(0, 0, width, height);

    ctx.strokeStyle = '#dcdcdc';

    for (let x = 0; x <= width; x += pixelsPerSecond) {

      ctx.beginPath();

      ctx.moveTo(x, 0);

      ctx.lineTo(x, height);

      ctx.stroke();

    }

  }

}