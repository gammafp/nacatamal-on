type TEngineStore = {
    gl: WebGLRenderingContext,
    program: WebGLProgram,
}

const engineStore: TEngineStore = {
    gl: null,
    program: null,

};

export const setRenderContext = (gl: WebGLRenderingContext) => {
    engineStore.gl = gl;
}

export const getRenderContext = () => {
    return engineStore.gl;
}

// Program section
export const setProgram = (program: WebGLProgram) => {
    engineStore.program = program;
}

export const getProgram = () => {
    return engineStore.program;
}