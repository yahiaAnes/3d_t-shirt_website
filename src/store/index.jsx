import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#f53832',
  
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './dotcom.png',
  fullDecal: './dotcom.png',
});

export default state;