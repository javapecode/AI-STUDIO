export interface ToolbarItem {

  type: 'button' | 'divider';

  icon?: string;

  tooltip?: string;
  action?:string;
}