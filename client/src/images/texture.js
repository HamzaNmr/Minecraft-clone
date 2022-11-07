import { TextureLoader } from 'three';

import { dirtImg, groundImg, woodImg } from './images';

const dirtTexture = new TextureLoader().load(dirtImg);
const groundTexture = new TextureLoader().load(groundImg);
const woodTexture = new TextureLoader().load(woodImg);

export { dirtTexture, groundTexture, woodTexture };