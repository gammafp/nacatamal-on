// @ts-nocheck
export const Menu: SceneType<{}> = () => {
    // Funtions section
    const sceneManager = getSceneManager();
    const { changeScene } = sceneManager;

    const acceptHandle = () => {
        changeScene("Game");
    }

    const playButton = buttonComponent({
        value: "Accept",
        onClick: acceptHandle
    });
    
    updateGame("Menu", (time, delta) => {
        if(playButton.x <= 100) {
            playButton.x += 1;
        }
    });

    return createScene("Menu", [
        playButton
    ]); // { name: "Menu", components: [ playButton ] }
}