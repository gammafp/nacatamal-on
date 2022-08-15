import { createProgram, createWebGlContext, gameLoop, getAttribLocation } from "../renders/WebGL";
import { setProgram, setRenderContext } from "./engineStore";
import { TCreateScenesReturn } from "nacatamal-on/scenes/sceneManager";

// Vertext and fragment section import
import fragmentShaderSource from "nacatamal-on/renders/shaders/fragment/varyingColor.frag";
import vertexShaderSource from "nacatamal-on/renders/shaders/vertex/varyingColor.vert";
import { gameDraw } from "nacatamal-on/renders/WebGL/gameLoop";

type TCreateEngineConfig = {
    parent: string,
    width: number,
    height: number,
}

export const createEngine = ({ parent, width, height }: TCreateEngineConfig) => {
    const canvas = document.querySelector(`#${parent}`) as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    canvas.style.backgroundColor = "#1e272e";

    const gl = createWebGlContext(canvas);

    // Create Program
    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    setProgram(program);

    // Create position vertext buffer
    getAttribLocation(gl, program, "a_position");

    // TODO: Move this to, setResolution
    const uResolution = gl.getUniformLocation(program, "u_resolution");
    gl.uniform2f(uResolution, gl.canvas.width, gl.canvas.height);

    // Set Viewport
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    // This is not correct, only testing
    setRenderContext(gl);

    // Return if device and canvas is ready
    return (callback: () => TCreateScenesReturn | any) => {
        document.addEventListener("DOMContentLoaded", () => {
            if (gl && callback) {
                const scenes = callback();
                gameDraw(() => {
                    if (program !== null && scenes !== undefined) {
                        scenes.getCurrentScene()();
                    }
                });
            }
        });
    }
}