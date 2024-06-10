import { TextureLoader } from 'three';

import { dirtImg, groundImg, woodImg, grassImg } from './images';

const dirtTexture = new TextureLoader().load(dirtImg);
const groundTexture = new TextureLoader().load(groundImg);
const woodTexture = new TextureLoader().load(woodImg);
const grassTexture = new TextureLoader().load(grassImg);

export { dirtTexture, groundTexture, woodTexture, grassTexture };