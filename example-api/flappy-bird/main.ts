// @ts-nocheck
import { Menu } from "./Scenes/Menu";

const game = createGame({
    width: 800,
    height: 600,
    backgroundColor: 0x000000,
    antialias: true,
    resolution: 1,
});

game(() => {
    
    loader("Manifest.json");
    
    // Create Scenes help to register and manage the different scenes
    return createScenes([
        Menu
    ]);
});