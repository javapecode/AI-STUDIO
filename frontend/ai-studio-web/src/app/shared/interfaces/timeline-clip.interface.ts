export interface TimelineClip {

  id: string;

  assetId: string;

  elementId: string;

  track: 'image' | 'video' | 'audio' | 'text';

  start: number;

  duration: number;

  selected: boolean;

}