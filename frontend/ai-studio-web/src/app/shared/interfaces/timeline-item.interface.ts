export interface TimelineItem {

  id: string;

  assetId: string;

  elementId?: string;

  trackId: string;

  type: 'image' | 'video' | 'audio' | 'text';

  name: string;

  layer: number;

  startTime: number;

  duration: number;

  selected: boolean;

}