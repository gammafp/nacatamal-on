import { createEngine } from 'nacatamal-on/Engine';
import { changeScenes, createScenes } from 'nacatamal-on/scenes/sceneManager';
import { SceneMain } from './Scenes/SceneMain';
import { SceneMain2 } from './Scenes/SceneMain2';

const game = createEngine({
    parent: 'canvas-with-yuka',
    width: 600,
    height: 600,
});

game(() => {
    
    setTimeout(() => {
        changeScenes(SceneMain2);
    }, 3000);

    setTimeout(() => {
        changeScenes(SceneMain);
    }, 6000);

    return createScenes([
        SceneMain,
        SceneMain2
    ]);
});
