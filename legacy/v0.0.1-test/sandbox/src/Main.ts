import { createEngine } from "nacatamal-on/Engine";
import { changeScenes, createScenes } from "nacatamal-on/scenes/sceneManager";
import { SceneMain } from "./Scenes/SceneMain";
import { SceneMain2 } from "./Scenes/SceneMain2";

const engine = createEngine({
    width: 600,
    height: 600,
    parent: "canvas-with-yuka"
});

engine(() => {
    return createScenes([SceneMain, SceneMain2])
});