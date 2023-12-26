import { useRef, useEffect } from "react"
const Board = () => {
    const canvasRef = useRef(null)
    useEffect(() => {
        // As soon as the page loads we want canvas to set width and height of canvas equal to viewport
        if(!canvasRef.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d')

        // when mounting
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
    }, [])
    return (
        <canvas ref={canvasRef}>
            
        </canvas>
    )
}
export default Board