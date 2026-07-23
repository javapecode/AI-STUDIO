import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ToolbarItem } from '../../shared/interfaces/quick-toolbar.component';

import { LayoutService } from '../../core/services/layout.service';
import { EditorService } from '../../core/services/editor.service';
import { AssetService } from '../../core/services/asset.service';

import { Asset } from '../../shared/interfaces/asset.interface';
import { EditorStateService } from '../../core/services/editor-state.service';
import { TimelineService } from '../../core/services/timeline.service';



@Component({

  selector: 'app-quick-toolbar',

  standalone: true,

  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule
  ],

  templateUrl: './quick-toolbar.component.html',

  styleUrl: './quick-toolbar.component.css'

})


export class QuickToolbarComponent {
  constructor(
    private layoutService: LayoutService,
    private editorService: EditorService,
    private assetService: AssetService,
    private editorState: EditorStateService,
    private timelineService: TimelineService

  ) { }
  @ViewChild('fileInput')
  fileInput!: ElementRef<HTMLInputElement>;
  toolButtons: ToolbarItem[] = [

    { type: 'button', icon: 'folder_open', tooltip: 'Open Project', action: 'open' },
    { type: 'button', icon: 'upload_file', tooltip: 'Import Media', action: 'import' },
    { type: 'button', icon: 'save', tooltip: 'Save Project', action: 'save' },
    { type: 'divider' },
    { type: 'button', icon: 'undo', tooltip: 'Undo', action: 'undo' },
    { type: 'button', icon: 'redo', tooltip: 'Redo', action: 'redo' },
    { type: 'divider' },
    { type: 'button', icon: 'tune', tooltip: 'Properties Panel', action: 'properties' },
    { type: 'button', icon: 'photo_library', tooltip: 'Assets Panel', action: 'assets' },
    { type: 'button', icon: 'timeline', tooltip: 'Timeline', action: 'timeline' },
    { type: 'button', icon: 'settings', tooltip: 'Settings', action: 'settings' },
    { type: 'divider' },
    { type: 'button', icon: 'play_arrow', tooltip: 'Play', action: 'play' },
    { type: 'button', icon: 'pause', tooltip: 'Pause', action: 'pause' },
  ];

  private getAssetType(
    mimeType: string
  ): 'image' | 'video' | 'audio' {

    if (mimeType.startsWith('image')) {

      return 'image';

    }
    if (mimeType.startsWith('video')) {

      return 'video';

    }
    return 'audio';


  }
  private createAsset(file: File): Asset {

    return {


      id: crypto.randomUUID(),

      file: file,

      name: file.name,

      type: this.getAssetType(file.type),

      size: file.size,

      url: URL.createObjectURL(file)

    };

  }
  openFilePicker(): void {

    this.fileInput.nativeElement.click();

  }

  onFileSelected(event: Event): void {
    const input =
      event.target as HTMLInputElement;
    if (!input.files) {

      return;

    }
    Array.from(input.files)
      .forEach(file => {
        const asset = this.createAsset(file);
        this.assetService.add(asset);
        // this.editorState.createImageElement(asset);
      });
    input.value = '';
  }
  onToolbarClick(action?: string): void {
    if (!action) {
      return;
    }
    switch (action) {
      case 'import':

        this.openFilePicker();

        break;

      case 'properties':

        this.layoutService.toggleProperties();

        break;

      case 'assets':

        this.layoutService.toggleAssets();

        break;

      case 'timeline':

        this.layoutService.toggleTimeline();

        break;
        
      case 'undo':

        this.editorService.undo();

        break;

      case 'redo':

        this.editorService.redo();

        break;
        case 'play':

    this.timelineService.play();

    break;

case 'pause':

    this.timelineService.pause();

    break;
      default:

        this.editorService.dispatch({

          type: action.toUpperCase()

        });
        break;

    }

  }
}