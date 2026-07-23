import { TestBed } from '@angular/core/testing';

import { TimelineRenderService } from './timeline-render.service';

describe('TimelineRenderService', () => {
  let service: TimelineRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
