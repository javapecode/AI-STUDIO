import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineToolbarComponent } from "./components/timeline-toolbar/timeline-toolbar.component";
import { EditorStateService } from '../../../../core/services/editor-state.service';
import { TimelineService } from '../../../../core/services/timeline.service';
import { TimelineItem } from '../../../../shared/interfaces/timeline-item.interface';
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { Asset } from '../../../../shared/interfaces/asset.interface';
import { TimelineTrack } from '../../../../shared/interfaces/timeline-track.interface';
import { effect } from '@angular/core';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [
    CommonModule,
    TimelineToolbarComponent,
    MatIcon,
MatIconModule,
],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.css'
})
export class TimelineComponent implements OnInit {

  playheadPosition = 0;

  timelineDuration = 60;

  seconds: number[] = [];

  constructor(
    public timelineService: TimelineService,
    private editorState: EditorStateService
  ) {

    effect(() => {

      this.playheadPosition =
        this.timelineService.currentTime() *
        this.timelineService.zoom();

    });

  }
getTrackIcon(type: string): string {

  switch (type) {

    case 'image':
      return 'image';

    case 'video':
      return 'movie';

    case 'audio':
      return 'music_note';

    case 'text':
      return 'text_fields';

    default:
      return 'insert_drive_file';

  }

}
  ngOnInit(): void {

    this.generateTimeline();

  }

  allowDrop(event: DragEvent): void {

    event.preventDefault();

  }

  dropAsset(event: DragEvent, track: TimelineTrack): void {

    // Clip create code

  }

  get pixelsPerSecond(): number {

    return this.timelineService.zoom();

  }
selectItem(item: TimelineItem): void {

  this.timelineService.selectItem(item);

}
  private generateTimeline(): void {

    this.seconds = Array.from(
      { length: this.timelineDuration + 1 },
      (_, i) => i
    );

  }

}