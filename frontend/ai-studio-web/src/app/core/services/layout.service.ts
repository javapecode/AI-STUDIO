import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class LayoutService {

  sidebarCollapsed = signal(false);

  assetsVisible = signal(true);

  propertiesVisible = signal(true);

  timelineVisible = signal(true);

  toggleSidebar() {
    this.sidebarCollapsed.update(v => !v);
  }

  toggleAssets() {
    this.assetsVisible.update(v => !v);
  }

  toggleProperties() {
    this.propertiesVisible.update(v => !v);
  }

  toggleTimeline() {
    this.timelineVisible.update(v => !v);
  }

}
