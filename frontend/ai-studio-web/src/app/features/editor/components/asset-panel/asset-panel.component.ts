import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';

import { AssetService } from '../../../../core/services/asset.service';
import { Asset } from '../../../../shared/interfaces/asset.interface';
import { EditorStateService } from '../../../../core/services/editor-state.service';



@Component({

  selector: 'app-asset-panel',

  standalone: true,

  imports: [CommonModule, MatTabsModule, MatIconModule],

  templateUrl: './asset-panel.component.html',

  styleUrl: './asset-panel.component.css'

})
export class AssetPanelComponent {
  images: Asset[] = [];
  videos: Asset[] = [];
  music: Asset[] = [];
  constructor(private assetService: AssetService, private editorState: EditorStateService) { }

  addImages(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    Array.from(input.files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const asset: Asset = {
          id: crypto.randomUUID(),
          file: file,
          name: file.name,
          url: reader.result as string,
          type: 'image',
          size: file.size
        };
        this.images.push(asset);
        this.assetService.add(asset);
        // this.editorState.createImageElement(asset);
      };
      reader.readAsDataURL(file);
    });
  }

  addVideos(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    Array.from(input.files).forEach((file) => {
      const asset: Asset = {
        id: crypto.randomUUID(),
        file: file,
        name: file.name,
        url: URL.createObjectURL(file),
        type: 'video',
        size: file.size
      };
      this.videos.push(asset);
      this.assetService.add(asset);
    });
  }
  startDrag(
  event: DragEvent,
  asset: Asset
): void {

  if (!event.dataTransfer) {
    return;
  }

  event.dataTransfer.effectAllowed = 'copy';

  event.dataTransfer.setData(

    'application/json',

    JSON.stringify(asset)

  );

}
  addMusic(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    const asset: Asset = {
      id: crypto.randomUUID(),
      file: file,
      name: file.name,
      url: URL.createObjectURL(file),
      type: 'audio',
      size: file.size
    };
    this.music.push(asset);
    this.assetService.add(asset);
  }
  removeImage(index: number) {
    const asset = this.images[index];
    this.images.splice(index, 1);
    this.assetService.remove(asset.id);
  }
  removeVideo(index: number) {
    const asset = this.videos[index];
    this.videos.splice(index, 1);
    this.assetService.remove(asset.id);
  }
  removeMusic(index: number) {
    const asset = this.music[index];
    this.music.splice(index, 1);
    this.assetService.remove(asset.id);
  }
  onDragStart(event: DragEvent, asset: Asset): void {

  console.log('Drag Start:', asset);

  if (!event.dataTransfer) {
    return;
  }

  event.dataTransfer.setData(
    'application/json',
    JSON.stringify(asset)
  );

  event.dataTransfer.effectAllowed = 'copy';
}

}