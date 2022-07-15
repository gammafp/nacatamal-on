import { createWebGlContext } from "nacatamal-on/Renders/WebGL";
import { vertexShader } from "nacatamal-on/Renders/WebGL/shaders/vertexShader";
import { fragmentShader } from "nacatamal-on/Renders/WebGL/shaders/fragmentShader";

import fragmentShader2 from "nacatamal-on/Renders/WebGL/shaders/fragTest.frag";

// Crea WebGL context
const GL = createWebGlContext({
    parent: "canvas-with-yuka",
    width: 800,
    height: 600
});

console.log(fragmentShader2)