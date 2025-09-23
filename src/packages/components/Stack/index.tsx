import Stack from "./stack";
import HStack from "./hstack";
import VStack from "./vstack";

// 将 H 和 V 作为 Stack 的静态属性
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

export default StackWithVariants;
export { HStack, VStack };
export type { StackProps, HStackProps, VStackProps } from "./type";
