import { usePlane } from '@react-three/cannon';
import { RepeatWrapping, NearestFilter } from 'three';
import { dirtTexture } from '../images/texture';

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, 0, 0]
    }))

    dirtTexture.magFilter = NearestFilter;
    dirtTexture.wrapS = RepeatWrapping;
    dirtTexture.wrapT = RepeatWrapping;
    dirtTexture.repeat.set(50, 50);

    return (
        <mesh ref={ref}>
            <planeGeometry attach="geometry" args={[100, 100]} />
            <meshStandardMaterial attach="material" map={dirtTexture} />
        </mesh>
    )    
}