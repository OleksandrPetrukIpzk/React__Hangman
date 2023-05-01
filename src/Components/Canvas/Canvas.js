import {useEffect, useRef} from "react";

export const Canvas = ({wrong}) => {
    const canvasRef = useRef(null);
    const wrongCubes = {
        2: {
            fillStyle: 'red',
            fillRect: 0,
        },
        3: {
            fillStyle: 'black',
            fillRect: 50,
        },
        4: {
            fillStyle: 'orange',
            fillRect: 100,
        },
        5: {
            fillStyle: 'yellow',
            fillRect: 150,
        },
        6: {
            fillStyle: 'white',
            fillRect: 200,
        }
    }
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.fillStyle = wrongCubes[wrong]?.fillStyle;
        context.fillRect(wrongCubes[wrong]?.fillRect, 0, 50, 50)
    }, [wrong])
    return (<canvas ref={canvasRef}/>)
}