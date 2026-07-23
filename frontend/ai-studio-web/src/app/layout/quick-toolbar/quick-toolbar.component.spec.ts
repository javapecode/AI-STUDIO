import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickToolbarComponent } from './quick-toolbar.component';

describe('QuickToolbarComponent', () => {
  let component: QuickToolbarComponent;
  let fixture: ComponentFixture<QuickToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuickToolbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
