// Obtenemos el contexto de la aplicación
const createWebGlContext = (parent: HTMLCanvasElement) => {
    const gl = parent.getContext('webgl');
    if(!gl) {
        console.error('WebGL is not supported');
    } else {
        console.log("%c %c %c %c - %c %s ",  "background: #0067c6", "background: #ffffff", "background: #0067c6", "background: none", "background: #8e44ad; color: ; font-size: 1.1em;", " Nacatamalon started with WebGL2");
        return gl;
    }
}

export default createWebGlContext;
