import Space from "./space";
import SpaceCompact from "./space-compact";

// 将 Compact 作为 Space 的静态属性
const SpaceWithCompact = Space as typeof Space & {
  Compact: typeof SpaceCompact;
};

SpaceWithCompact.Compact = SpaceCompact;

export default SpaceWithCompact;
export type { SpaceProps, SpaceCompactProps } from "./type";
