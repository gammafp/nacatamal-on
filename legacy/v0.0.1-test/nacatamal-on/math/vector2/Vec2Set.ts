import { TVec2 } from "./Types";
import { Vec2 } from "./Vec2";
/**
 * Vec2Set helps to create a set of Vec2.
 * @param {TVec2} Vec2
 * @returns {TVec2} { x: number, y: number }
 */
export const Vec2Set = ({x, y}: TVec2) => Vec2(x, y);