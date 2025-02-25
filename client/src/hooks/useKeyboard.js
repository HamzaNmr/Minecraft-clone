import { useCallback, useState, useEffect } from "react";


const actionByKey = (key) => {
    const keyActionMap = {
        KeyW: 'moveForward',
        KeyS:'moveBackward',
        KeyA:'moveLeft',
        KeyD:'moveRight',
        Space: 'jump',
        Digit1: 'dirt',
        Digit2: 'wood',
        Digit3: 'ground',
    }
    
    return keyActionMap[key];
}

export const useKeyboard = () => {

    const [actions, setActions] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,
        texture1: false,
        texture2: false,
        texture3: false
    });

    const handleKeyDown = useCallback((e) => {
        const action = actionByKey(e.code);
        if(action){
            setActions((prev) => {
                return ({
                   ...prev,
                   [action]: true
                })
            })
        }
    }, []);

    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code);
        if(action){
            setActions((prev) => {
                return ({
                   ...prev,
                   [action]: false
                })
            })
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("keyup", handleKeyUp);
        return () => {
            document.removeEventListener("keydown", handleKeyUp);
            document.removeEventListener("keyup", handleKeyDown);
        }
    }, [handleKeyDown, handleKeyUp]);

    return actions;
}