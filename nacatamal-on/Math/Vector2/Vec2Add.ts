import { add, clone } from "ramda";
import { TVec2 } from "./Types";
import { Vec2 } from "./Vec2";

export const Vec2Add = (vector2A: TVec2, vector2B: TVec2): TVec2 => {
    const vecA = clone(vector2A);
    const vecB = clone(vector2B);
    
    return Vec2(
        add(vecA.x, vecB.x),
        add(vecA.y, vecB.y)
    );
}