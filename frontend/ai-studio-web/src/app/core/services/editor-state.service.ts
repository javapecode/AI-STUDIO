import { Injectable, signal } from '@angular/core';
import { EditorElement } from '../../shared/interfaces/editor-element.interface'; 
import { Asset } from '../../shared/interfaces/asset.interface';

@Injectable({
  providedIn: 'root'
})
export class EditorStateService {

  private readonly elementsSignal = signal<EditorElement[]>([]);

  readonly elements = this.elementsSignal.asReadonly();

  private readonly selectedSignal = signal<EditorElement | null>(null);

  readonly selectedElement = this.selectedSignal.asReadonly();

  addElement(element: EditorElement): void {

    this.elementsSignal.update(items => [...items, element]);

  }
createImageElement(asset: Asset): EditorElement {

  const element: EditorElement = {

    id: crypto.randomUUID(),

    assetId: asset.id,

    type: 'image',

    name: asset.name,

    src: asset.url ?? '',

    x: 100,

    y: 100,

    width: 320,

    height: 180,

    rotation: 0,

    opacity: 1,

    selected: false,

    visible: true

  };

  this.addElement(element);

  return element;

}
  selectElement(id: string): void {

    this.elementsSignal.update(items =>

      items.map(item => ({

        ...item,

        selected: item.id === id

      }))

    );

    const selected =
      this.elementsSignal().find(item => item.id === id) ?? null;

    this.selectedSignal.set(selected);

  }

  removeElement(id: string): void {

    this.elementsSignal.update(items =>
      items.filter(item => item.id !== id)
    );

    if (this.selectedSignal()?.id === id) {

      this.selectedSignal.set(null);

    }

  }
updatePosition(
  id: string,
  x: number,
  y: number
): void {

  this.elementsSignal.update(elements =>

    elements.map(element =>

      element.id === id
        ? {
            ...element,
            x,
            y
          }
        : element

    )

  );

}
updateSize(
  id: string,
  width: number,
  height: number
): void {

  this.elementsSignal.update(elements =>

    elements.map(element =>

      element.id === id
        ? {
            ...element,
            width,
            height
          }
        : element

    )

  );

}
  clear(): void {

    this.elementsSignal.set([]);

    this.selectedSignal.set(null);

  }

}