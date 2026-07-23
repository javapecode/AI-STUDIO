export interface EditorElement {

  id: string;

  assetId: string;

  type: 'image' | 'video' | 'text';

  name: string;

  src: string;

  x: number;

  y: number;

  width: number;

  height: number;

  rotation: number;

  opacity: number;

  selected: boolean;

  visible: boolean;

}