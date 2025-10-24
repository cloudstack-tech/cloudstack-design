import {forwardRef} from "@cloudstack-design/system";
import {Flex} from "@cloudstack-design/flex";

import {StackProps} from "./stack";
import {useStack} from "./use-stack";

export interface HStackProps extends Omit<StackProps, "direction"> {}

/**
 * HStack 组件（水平堆叠）
 *
 * 是 Stack 的快捷方式，direction 固定为 horizontal。
 * 适用于需要水平排列元素的场景。
 *
 * @example
 * ```tsx
 * <HStack spacing="medium">
 *   <Button>Cancel</Button>
 *   <Button>Confirm</Button>
 * </HStack>
 * ```
 */
const HStack = forwardRef<"div", HStackProps>((props, ref) => {
  const {
    Component,
    flexProps,
    ref: stackRef,
    children,
    ...otherProps
  } = useStack({
    ...props,
    direction: "horizontal",
    ref,
  });

  // HStack 通过 Flex 实现底层布局
  return (
    <Flex as={Component} ref={stackRef as any} {...flexProps} {...otherProps}>
      {children}
    </Flex>
  );
});

HStack.displayName = "CloudStackDesign.HStack";

export default HStack;
