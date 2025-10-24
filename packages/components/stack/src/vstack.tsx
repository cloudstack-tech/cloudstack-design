import {forwardRef} from "@cloudstack-design/system";
import {Flex} from "@cloudstack-design/flex";

import {StackProps} from "./stack";
import {useStack} from "./use-stack";

export interface VStackProps extends Omit<StackProps, "direction"> {}

/**
 * VStack 组件（垂直堆叠）
 *
 * 是 Stack 的快捷方式，direction 固定为 vertical。
 * 适用于需要垂直排列元素的场景。
 *
 * @example
 * ```tsx
 * <VStack spacing="large">
 *   <Card>Card 1</Card>
 *   <Card>Card 2</Card>
 *   <Card>Card 3</Card>
 * </VStack>
 * ```
 */
const VStack = forwardRef<"div", VStackProps>((props, ref) => {
  const {
    Component,
    flexProps,
    ref: stackRef,
    children,
    ...otherProps
  } = useStack({
    ...props,
    direction: "vertical",
    ref,
  });

  // VStack 通过 Flex 实现底层布局
  return (
    <Flex as={Component} ref={stackRef as any} {...flexProps} {...otherProps}>
      {children}
    </Flex>
  );
});

VStack.displayName = "CloudStackDesign.VStack";

export default VStack;
