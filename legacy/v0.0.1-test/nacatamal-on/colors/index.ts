import { colorKey } from "./colorKey";
// TODO: Convert this to functional component
export default class Color {
    color: string;
    constructor(color: string) {
        this.color = color.toLowerCase();
    }
    getColor(): number {
        return colorKey[this.color] as number;
    }
    getArrayColor(): Array<number> {
        const color = this.getColor();
        var arrBuff = new ArrayBuffer(4);
        var vw = new DataView(arrBuff);
        vw.setUint32(0, color, false);
        var arrByte = new Uint8Array(arrBuff);
      
        return [arrByte[1], arrByte[2], arrByte[3]];
    }
    /**
     * Normaliza el color en un array [r, g, b]
     */
    normalize(): Array<number> {
        const array_color = this.getArrayColor();
        return [array_color[0] / 255, this.getArrayColor()[1] / 255, this.getArrayColor()[2] / 255];
    }
}