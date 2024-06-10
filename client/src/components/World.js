
import { Canvas } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Ground } from './Ground';
import { Player } from './Player';
import { FPV } from './FPV';


export const World = () => {
   return (
    <Canvas>
      <Sky sunPosition={[100, 100, 20]}/>
      <ambientLight intensity={0.3}/>
      <FPV/>
      <Physics>
        <Player/>
        <Ground/>
      </Physics>
    </Canvas>
   )
}