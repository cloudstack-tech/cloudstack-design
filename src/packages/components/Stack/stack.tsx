"use client";

import React, { useMemo } from "react";
import { cn } from "@/packages/utilities";
import {
  StackProps,
  alignItemsMap,
  justifyContentMap,
  stackSizeMap,
} from "./type";

const Stack = React.forwardRef<HTMLDivElement, StackProps>((props, ref) => {
  const {
    className,
    style,
    children,
    direction = "vertical",
    spacing = "medium",
    align = "stretch",
    justify = "start",
    wrap = false,
    divider,
    as: Component = "div",
    ...rest
  } = props;

  // 计算间距大小
  const getSpacingSize = (spacingValue: StackProps["spacing"]): number => {
    if (typeof spacingValue === "number") {
      return spacingValue;
    }
    return stackSizeMap[spacingValue!] || stackSizeMap.medium;
  };

  const spacingSize = getSpacingSize(spacing);

  // 过滤有效的子元素
  const childrenArray = React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) ||
      typeof child === "string" ||
      typeof child === "number"
  );

  // 构建容器类名
  const stackClassName = cn(
    "flex",
    {
      "flex-col": direction === "vertical",
      "flex-row": direction === "horizontal",
      "flex-wrap": wrap,
    },
    alignItemsMap[align] || "items-stretch",
    justifyContentMap[justify] || "justify-start",
    className
  );

  // 构建样式
  const stackStyle: React.CSSProperties = {
    gap: `${spacingSize * 4}px`,
    ...style,
  };

  // 如果有分隔符，需要在子元素间插入分隔符
  const renderChildren = useMemo(() => {
    if (!divider) {
      return childrenArray;
    }

    const result: React.ReactNode[] = [];
    childrenArray.forEach((child, index) => {
      result.push(child);
      if (index < childrenArray.length - 1) {
        result.push(
          <span
            key={`divider-${index}`}
            className={cn("flex-shrink-0", {
              "w-full h-px": direction === "vertical",
              "h-full w-px": direction === "horizontal",
            })}
          >
            {divider}
          </span>
        );
      }
    });
    return result;
  }, [childrenArray, divider, direction]);

  if (childrenArray.length === 0) {
    return null;
  }

  return (
    <Component
      ref={ref}
      className={stackClassName}
      style={stackStyle}
      {...rest}
    >
      {renderChildren}
    </Component>
  );
});

if (process.env.NODE_ENV !== "production") {
  Stack.displayName = "Stack";
}

export default Stack;
