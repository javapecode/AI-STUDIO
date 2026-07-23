import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../../core/services/project.service';
import { Project } from '../../../../shared/interfaces/project.interface';
import { EditorStateService } from '../../../../core/services/editor-state.service';
import { CommonModule } from '@angular/common';
import { EditorElement } from '../../../../shared/interfaces/editor-element.interface'; 
import { Asset } from '../../../../shared/interfaces/asset.interface';
import { TimelineService } from '../../../../core/services/timeline.service';
import { TimelineItem } from '../../../../shared/interfaces/timeline-item.interface';


@Component({
  selector: 'app-canvas-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './canvas-preview.component.html',
  styleUrl: './canvas-preview.component.css'
})
export class CanvasPreviewComponent implements OnInit {
  dragging = false;
  dragElementId = '';
  offsetX = 0;
  offsetY = 0;
  width = 1920;
  height = 1080;
  project: Project | null = null;
private canvasRect!: DOMRect;
private dragStartX = 0;
private dragStartY = 0;
private elementStartX = 0;
private elementStartY = 0;
resizing = false;
resizeElementId = '';
resizeStartX = 0;
resizeStartY = 0;
startWidth = 0;
startHeight = 0;

  constructor(private projectService: ProjectService, private editorState: EditorStateService, private timelineService: TimelineService) {

  }
  elements = this.editorState.elements;
ngOnInit(): void {

  this.editorState.clear();

  this.project = this.projectService.getCurrentProject();

  console.log('Canvas Elements:', this.elements());

}

  selectElement(id: string): void {

  this.editorState.selectElement(id);

}
  getPreviewWidth(): number {

    if (!this.project) {
      return 700;
    }

    // Portrait
    if (this.project.height > this.project.width) {
      return 320;
    }

    // Square
    if (this.project.width === this.project.height) {
      return 500;
    }

    // Landscape
    return 700;
  }

  startDrag(
  event: MouseEvent,
  element: EditorElement
): void {

  event.preventDefault();

  event.stopPropagation();

  this.editorState.selectElement(element.id);

  this.dragging = true;

  this.dragElementId = element.id;

  this.canvasRect =
    (event.currentTarget as HTMLElement)
      .parentElement!
      .getBoundingClientRect();

  this.dragStartX = event.clientX;

  this.dragStartY = event.clientY;

  this.elementStartX = element.x;

  this.elementStartY = element.y;

}
drag(event: MouseEvent): void {

  if (!this.dragging) {

    return;

  }

  const dx =
    event.clientX - this.dragStartX;

  const dy =
    event.clientY - this.dragStartY;

  this.editorState.updatePosition(

    this.dragElementId,

    this.elementStartX + dx,

    this.elementStartY + dy

  );

}
resize(event: MouseEvent): void {

  if (!this.resizing) {

    return;

  }

  const width =
    this.startWidth +
    (event.clientX - this.resizeStartX);

  const height =
    this.startHeight +
    (event.clientY - this.resizeStartY);

  this.editorState.updateSize(

    this.resizeElementId,

    Math.max(width, 50),

    Math.max(height, 50)

  );

}
startResize(
  event: MouseEvent,
  element: EditorElement
): void {

  event.stopPropagation();

  event.preventDefault();

  this.resizing = true;

  this.resizeElementId = element.id;

  this.resizeStartX = event.clientX;

  this.resizeStartY = event.clientY;

  this.startWidth = element.width;

  this.startHeight = element.height;

}
stopDrag(): void {

  this.dragging = false;

  this.resizing = false;

  this.dragElementId = '';

  this.resizeElementId = '';

}
allowDrop(event: DragEvent): void {

  event.preventDefault();

  console.log('Drag Over');

}
onMouseMove(event: MouseEvent): void {

  if (this.dragging) {

    this.drag(event);

  }

  if (this.resizing) {

    this.resize(event);

  }

}
onDrop(event: DragEvent): void {

  event.preventDefault();

  const json = event.dataTransfer?.getData('application/json');

  if (!json) {
    return;
  }

  const asset: Asset = JSON.parse(json);

  const element = this.editorState.createImageElement(asset);

  const item: TimelineItem = {
  id: crypto.randomUUID(),
  assetId: asset.id,
  elementId: asset.id,
  trackId: 'image-track',
  type: 'image',

  name: asset.name,
  layer: 1,

  startTime: 0,
  duration: 5,
  selected: false
};

  this.timelineService.addClip('image-track', item);

}
}