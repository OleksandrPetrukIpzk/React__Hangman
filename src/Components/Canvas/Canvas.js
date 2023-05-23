import {useEffect, useRef} from "react";
import {WRONG_CUBES} from "Components/Constants/Constants";

export const Canvas = ({wrong}) => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if (wrong >= 2 && wrong <= 5) {
            const {fillStyle, fillRect} = WRONG_CUBES[wrong];
            context.fillStyle = fillStyle;
            context.fillRect(fillRect, 0, 50, 50)
        }
    }, [wrong])
    return (<canvas ref={canvasRef}/>)
}