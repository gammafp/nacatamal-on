import { getRenderContext } from "nacatamal-on/Engine";
import { rectangle } from "nacatamal-on/shapes";

export const SceneMain2 = () => {
    console.log("SceneMain 2");

    const GL = getRenderContext();

    const rectangleG = rectangle(GL, 0, 0, 100, 100)
    rectangleG.draw();

    return {
        name: "SceneMain2"
    }

}