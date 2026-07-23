import { Component } from '@angular/core';
import { AssetPanelComponent } from './components/asset-panel/asset-panel.component';
import { CanvasPreviewComponent }from './components/canvas-preview/canvas-preview.component';
import { TimelineComponent }from './components/timeline/timeline.component';
import { PropertiesPanelComponent }from './components/properties-panel/properties-panel.component';
import { Subscription } from 'rxjs';
import { EditorService } from '../../core/services/editor.service';

@Component({

selector:'app-editor',

standalone:true,

imports:[

AssetPanelComponent,

CanvasPreviewComponent,

TimelineComponent,

PropertiesPanelComponent

],

templateUrl:'./editor.component.html',

styleUrl:'./editor.component.css'

})


export class EditorComponent {
private actionSubscription!: Subscription;
constructor(  private editorService: EditorService) {}
ngOnInit(): void {


  this.actionSubscription =
  this.editorService.action$
  .subscribe(action => {


    console.log(
      'Toolbar Action Received:',
      action.type
    );


  });


}
}