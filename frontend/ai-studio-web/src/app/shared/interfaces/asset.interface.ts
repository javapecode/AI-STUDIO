export interface Asset {

  id:string;

  file:File;

  name:string;

  type:'image'|'video'|'audio';

  size:number;

  url:string;

}