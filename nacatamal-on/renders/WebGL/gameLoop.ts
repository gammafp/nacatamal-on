import { getRenderContext } from "nacatamal-on/Engine";

export const gameLoop = (loop_callback?: () => void) => {

    const gl = getRenderContext();

    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.flush();

    if (loop_callback !== undefined) {
        loop_callback();
    }
    window.requestAnimationFrame(() => {
        gameLoop(loop_callback);
    });
}