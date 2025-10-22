import Stack from "./stack";
import HStack from "./hstack";
import VStack from "./vstack";

// Attach H, V, Horizontal, Vertical as static properties
const StackWithVariants = Stack as typeof Stack & {
  H: typeof HStack;
  V: typeof VStack;
  Horizontal: typeof HStack;
  Vertical: typeof VStack;
};

StackWithVariants.H = HStack;
StackWithVariants.V = VStack;
StackWithVariants.Horizontal = HStack;
StackWithVariants.Vertical = VStack;

// export types
export type {StackProps} from "./stack";
export type {HStackProps} from "./hstack";
export type {VStackProps} from "./vstack";
export type {StackSize} from "./use-stack";

// export hooks
export {useStack} from "./use-stack";

// export components
export {StackWithVariants as Stack, HStack, VStack};
