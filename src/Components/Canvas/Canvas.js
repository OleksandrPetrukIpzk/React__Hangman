import {useEffect, useRef} from "react";
import {WRONG_CUBES, MINIMAL_WRONG_COUNT, MAXIMUM_WRONG_COUNT} from "Constants/hangman";

export const Canvas = ({wrong}) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (wrong >= MINIMAL_WRONG_COUNT && wrong <= MAXIMUM_WRONG_COUNT) {
            const {fillStyle, fillRect} = WRONG_CUBES[wrong];
            context.fillStyle = fillStyle;
            context.fillRect(fillRect, 0, 50, 50)
        }
    }, [wrong])
    return (<canvas ref={canvasRef}/>)
}