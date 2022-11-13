import { getRenderContext } from "nacatamal-on/Engine";

export const gameDraw = (callback?: () => void) => {
    const GL = getRenderContext();
    GL.clear(GL.COLOR_BUFFER_BIT);
    GL.flush();

    if (callback) {
        callback();
    }
}

export const gameLoop = (loop_callback?: () => void) => {
    gameDraw(loop_callback);
    requestAnimationFrame(() => gameLoop(loop_callback));
}
