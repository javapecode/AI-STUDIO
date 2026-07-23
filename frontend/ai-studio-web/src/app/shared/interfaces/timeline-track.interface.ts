import { TimelineItem } from './timeline-item.interface';

export interface TimelineTrack {

  id: string;

  name: string;

  type: 'video' | 'image' | 'text' | 'audio';

  order: number;

  locked: boolean;

  visible: boolean;

  muted?: boolean;

  expanded?: boolean;

  items: TimelineItem[];

}