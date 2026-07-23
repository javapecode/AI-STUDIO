import { Injectable, signal } from '@angular/core';

import { TimelineTrack } from '../../shared/interfaces/timeline-track.interface';
import { TimelineItem } from '../../shared/interfaces/timeline-item.interface';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  //-----------------------------
  // Timeline Tracks
  //-----------------------------

  private readonly tracksSignal = signal<TimelineTrack[]>([]);

  readonly tracks = this.tracksSignal.asReadonly();

  //-----------------------------
  // Playhead
  //-----------------------------

  private readonly currentTimeSignal = signal(0);

  readonly currentTime = this.currentTimeSignal.asReadonly();

  //-----------------------------
  // Zoom
  //-----------------------------

  private readonly zoomSignal = signal(40);

  readonly zoom = this.zoomSignal.asReadonly();
//----------------------------------
// Playback
//----------------------------------

private readonly playingSignal = signal(false);

readonly playing = this.playingSignal.asReadonly();

private animationFrameId = 0;

private lastFrameTime = 0;
  //-----------------------------
  // Constructor
  //-----------------------------

  constructor() {

    this.createDefaultTracks();

  }

  //-----------------------------
  // Default Tracks
  //-----------------------------

  private createDefaultTracks(): void {

    this.tracksSignal.set([

      this.createTrack('Video', 'video', 0),

      this.createTrack('Image', 'image', 1),

      this.createTrack('Text', 'text', 2),

      this.createTrack('Audio', 'audio', 3)

    ]);

  }
play(): void {

  if (this.playing()) {
    return;
  }

  this.playingSignal.set(true);

  this.lastFrameTime = performance.now();

  const animate = (time: number) => {

    if (!this.playing()) {
      return;
    }

    const delta = (time - this.lastFrameTime) / 1000;

    this.lastFrameTime = time;

    this.currentTimeSignal.update(
      t => t + delta
    );

    this.animationFrameId =
      requestAnimationFrame(animate);

  };

  this.animationFrameId =
    requestAnimationFrame(animate);

}
pause(): void {

  this.playingSignal.set(false);

  cancelAnimationFrame(
    this.animationFrameId
  );

}
stop(): void {

  this.pause();

  this.currentTimeSignal.set(0);

}
selectItem(item: TimelineItem): void {

  console.log('Selected item:', item);

}
  //-----------------------------
  // Create Track
  //-----------------------------

  createTrack(
    name: string,
    type: 'video' | 'image' | 'text' | 'audio',
    order: number
  ): TimelineTrack {

    return {

      id: crypto.randomUUID(),

      name,

      type,

      order,

      locked: false,

      visible: true,

      expanded: true,

      muted: false,

      items: []

    };

  }

  //-----------------------------
  // Add Track
  //-----------------------------

  addTrack(
    type: 'video' | 'image' | 'text' | 'audio'
  ): void {

    this.tracksSignal.update(tracks => [

      ...tracks,

      this.createTrack(

        `${type.toUpperCase()} ${tracks.length + 1}`,

        type,

        tracks.length

      )

    ]);

  }

  //-----------------------------
  // Delete Track
  //-----------------------------

  removeTrack(trackId: string): void {

    this.tracksSignal.update(

      tracks => tracks.filter(

        t => t.id !== trackId

      )

    );

  }

  //-----------------------------
  // Add Clip
  //-----------------------------

  addClip(trackId: string, clip: TimelineItem): void {

    this.tracksSignal.update(tracks =>

      tracks.map(track =>

        track.id === trackId
          ? {
              ...track,
              items: [...track.items, clip]
            }
          : track

      )

    );

  }

  //-----------------------------
  // Move Playhead
  //-----------------------------

  setCurrentTime(time: number): void {

    this.currentTimeSignal.set(time);

  }

  //-----------------------------
  // Zoom
  //-----------------------------

  zoomIn(): void {

    this.zoomSignal.update(z => Math.min(z + 10, 200));

  }

  zoomOut(): void {

    this.zoomSignal.update(z => Math.max(z - 10, 20));

  }

}