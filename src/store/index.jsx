import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#1D0976',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './dotcom.png',
  fullDecal: './dotcom.png',
});

export default state;