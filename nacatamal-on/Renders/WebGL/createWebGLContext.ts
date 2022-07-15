// Obtenemos el contexto de la aplicación
type TCreateWebGLContextConfig = {
    parent: string,
    width: number,
    height: number,
}
const createWebGlContext = ({parent, width, height}: TCreateWebGLContextConfig) => {
    const canvas = document.querySelector(`#${parent}`) as HTMLCanvasElement;
    canvas.width = width;
    canvas.height = height;
    canvas.style.backgroundColor = "#1e272e";
    const gl = canvas.getContext('webgl');
    if(!gl) {
        console.error('WebGL is not supported');
    } else {
        console.log("%c %c %c %c - %c %s",  "background: #0067c6", "background: #ffffff", "background: #0067c6", "background: none", "background: #8e44ad; color: ; font-size: 1.1em;", " Nacatamalon started with WebGL2");
        return gl;
    }
}

export default createWebGlContext;