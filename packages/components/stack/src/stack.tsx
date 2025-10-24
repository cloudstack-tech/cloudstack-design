import {forwardRef} from "@cloudstack-design/system";
import {Flex} from "@cloudstack-design/flex";

import {UseStackProps, useStack} from "./use-stack";

export interface StackProps extends UseStackProps {}

/**
 * Stack 组件
 *
 * 用于快速创建单方向堆叠布局的组件。
 * Stack 基于 Flex 组件实现，但提供了更简洁的 API 和额外的功能（如分隔符）。
 *
 * @example
 * ```tsx
 * <Stack spacing="medium" direction="vertical">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Stack>
 * ```
 */
const Stack = forwardRef<"div", StackProps>((props, ref) => {
  const {Component, flexProps, ref: stackRef, children, ...otherProps} = useStack({...props, ref});

  // Stack 通过 Flex 实现底层布局
  return (
    <Flex as={Component} ref={stackRef as any} {...flexProps} {...otherProps}>
      {children}
    </Flex>
  );
});

Stack.displayName = "CloudStackDesign.Stack";

export default Stack;
