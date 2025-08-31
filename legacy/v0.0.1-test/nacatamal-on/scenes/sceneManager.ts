const scenesStore = {
    scenes: [],
    currentScene: null,
}

export const changeScenes = (scene: any) => {
    scenesStore.currentScene = scene;
}
export type TCreateScenesReturn = {
    changeScenes;
    getScenes;
    getCurrentScene;
}
export const createScenes = (scenes: Array<any>) => {
    changeScenes(scenes[0]);
    scenesStore.scenes = scenes;
    return {
        changeScenes,
        getScenes,
        getCurrentScene
    }
}

export const getCurrentScene = () => {
    return scenesStore.currentScene;
}
export const getScenes = () => {
    return scenesStore.scenes;
}