import { values } from "ramda";
import { TVec2 } from "./Types";

export const Vec2ToArray = (Vector2A: TVec2): Array<number> => {
    return values(Vector2A);
}