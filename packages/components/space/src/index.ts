import Space from "./space";
import SpaceCompact from "./space-compact";

// Attach Compact as static property
const SpaceWithCompact = Space as typeof Space & {
  Compact: typeof SpaceCompact;
};

SpaceWithCompact.Compact = SpaceCompact;

// export types
export type {SpaceProps} from "./space";
export type {SpaceCompactProps} from "./space-compact";
export type {SpaceSize} from "./use-space";

// export hooks
export {useSpace} from "./use-space";
export {useSpaceCompact} from "./use-space-compact";

// export component
export {SpaceWithCompact as Space};
