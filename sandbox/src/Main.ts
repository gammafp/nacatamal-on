import { createEngine } from "nacatamal-on/Engine";
import { createScenes } from "nacatamal-on/scenes/sceneManager";
import { SceneMain } from "./Scenes/SceneMain";

const engine = createEngine({
    width: 600,
    height: 600,
    parent: "canvas-with-yuka"
});
engine(() => {
    return createScenes([SceneMain])
});