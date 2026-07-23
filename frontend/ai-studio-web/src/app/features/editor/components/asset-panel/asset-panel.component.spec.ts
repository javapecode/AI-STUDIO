import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetPanelComponent } from './asset-panel.component';

describe('AssetPanelComponent', () => {
  let component: AssetPanelComponent;
  let fixture: ComponentFixture<AssetPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
