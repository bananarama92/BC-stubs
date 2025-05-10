declare namespace ElementHelp {
  type ElementOrId = HTMLElement | string; 
  type AnchorY = 'top' | 'bottom';
  type AnchorX = 'left' | 'right';
  type AnchorXY = `${AnchorY}-${AnchorX}`;
}
