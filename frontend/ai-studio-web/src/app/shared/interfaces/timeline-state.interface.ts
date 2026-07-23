import { TimelineTrack } from "./timeline-track.interface";

export interface TimelineState {

  tracks: TimelineTrack[];

  zoom: number;

  playheadPosition: number;

}