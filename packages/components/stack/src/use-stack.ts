import type {StackVariantProps} from "@cloudstack-design/theme";
import type {FlexProps} from "@cloudstack-design/flex";

import {HTMLCloudStackDesignProps} from "@cloudstack-design/system";
import {ReactRef} from "@cloudstack-design/react-utils";
import {useMemo, ReactNode, Children, isValidElement} from "react";

/**
 * Stack 间距大小类型
 * - small: 8px
 * - medium: 16px
 * - large: 24px
 * - number: 自定义间距（会乘以 4）
 */
export type StackSize = "small" | "medium" | "large" | number;

/**
 * Stack 间距大小映射（会乘以 4 转换为像素值）
 */
const stackSizeMap: Record<string, number> = {
  small: 2, // 8px
  medium: 4, // 16px
  large: 6, // 24px
};

/**
 * 将 Stack 的方向映射到 Flex 的方向
 * vertical -> col
 * horizontal -> row
 */
const directionMap: Record<string, FlexProps["direction"]> = {
  vertical: "col",
  horizontal: "row",
};

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Stack spacing size
   * @default "medium"
   */
  spacing?: StackSize;
  /**
   * Divider element to be inserted between stack items
   */
  divider?: ReactNode;
}

export type UseStackProps = Props & StackVariantProps;

/**
 * useStack Hook
 *
 * Stack 组件基于 Flex 组件实现，提供更简洁的堆叠布局 API。
 * 主要特点：
 * 1. 简化的方向控制：只有 vertical 和 horizontal
 * 2. 预设间距：small/medium/large，更符合设计规范
 * 3. 分隔符支持：可在元素之间插入分隔符
 * 4. 语义化：HStack 和 VStack 让代码意图更清晰
 */
export function useStack(originalProps: UseStackProps) {
  const {
    ref,
    as,
    className,
    children,
    spacing = "medium",
    divider,
    style,
    direction: stackDirection,
    align,
    justify,
    wrap,
    ...otherProps
  } = originalProps;

  const Component = as || "div";

  // 转换 Stack 的 direction 到 Flex 的 direction
  const direction = stackDirection || "vertical";
  const flexDirection = directionMap[direction] || "col";

  // 计算间距大小（Stack 使用 spacing，Flex 使用 gap）
  const getSpacingSize = (spacingValue: StackSize): number => {
    if (typeof spacingValue === "number") {
      return spacingValue;
    }

    return stackSizeMap[spacingValue] || stackSizeMap.medium;
  };

  const gap = useMemo(() => getSpacingSize(spacing), [spacing]);

  // 过滤有效的子元素
  const childrenArray = useMemo(
    () =>
      Children.toArray(children).filter(
        (child) => isValidElement(child) || typeof child === "string" || typeof child === "number",
      ),
    [children],
  );

  // 如果有分隔符，在子元素之间插入分隔符
  const processedChildren = useMemo(() => {
    if (!divider || childrenArray.length === 0) {
      return childrenArray;
    }

    const result: ReactNode[] = [];

    childrenArray.forEach((child, index) => {
      result.push(child);
      // 在非最后一个元素后插入分隔符
      if (index < childrenArray.length - 1) {
        result.push(divider);
      }
    });

    return result;
  }, [childrenArray, divider]);

  // 构建传递给 Flex 的 props
  // Stack 通过 Flex 实现，将 Stack 的属性映射到 Flex 的属性
  const flexProps: Partial<FlexProps> = {
    direction: flexDirection,
    gap,
    align,
    justify,
    wrap: wrap ? "wrap" : "nowrap",
    className,
    style,
  };

  // 如果没有子元素，返回 null
  if (childrenArray.length === 0) {
    return {
      Component,
      flexProps,
      ref,
      children: null,
      ...otherProps,
    };
  }

  return {
    Component,
    flexProps,
    ref,
    children: processedChildren,
    ...otherProps,
  };
}

export type UseStackReturn = ReturnType<typeof useStack>;
