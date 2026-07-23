import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineToolbarComponent } from './timeline-toolbar.component';

describe('TimelineToolbarComponent', () => {
  let component: TimelineToolbarComponent;
  let fixture: ComponentFixture<TimelineToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimelineToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TimelineToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
