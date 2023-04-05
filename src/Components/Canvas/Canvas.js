import {useEffect, useRef} from "react";

export const Canvas = ({wrong}) =>{
    const canvasRef = useRef(null);
    useEffect(()=>{
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        if(wrong === 2){
            context.fillStyle= 'red';
            context.fillRect(0,0,50,50)
        }
        if(wrong === 3){
            context.fillStyle= 'black';
            context.fillRect(50, 0, 50,50)
        }
        if(wrong === 4){
            context.fillStyle= 'orange';
            context.fillRect(100, 0, 50,50)
        }
        if(wrong === 5){
            context.fillStyle= 'yellow';
            context.fillRect(150, 0, 50,50)
        }
        if(wrong === 6){
            context.fillStyle= 'white';
            context.fillRect(200, 0, 50,50)
        }

    },[wrong])
    return(<canvas ref={canvasRef}/>)
}