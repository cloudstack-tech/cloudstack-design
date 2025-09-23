"use client";

import React, { useMemo } from "react";
import { cn } from "@/packages/utils";
import { SpaceProps, alignItemsMap, spaceSizeMap } from "./type";

const Space = React.forwardRef<HTMLDivElement, SpaceProps>((props, ref) => {
  const {
    className,
    style,
    children,
    align = "center",
    direction = "horizontal",
    size = "small",
    wrap = false,
    split,
    classNames,
    as: Component = "div",
    ...rest
  } = props;

  // 处理间距大小
  const getGapSize = (sizeValue: SpaceProps["size"]): [number, number] => {
    if (Array.isArray(sizeValue)) {
      const [horizontal, vertical] = sizeValue;
      return [
        typeof horizontal === "number"
          ? horizontal
          : spaceSizeMap[horizontal] || spaceSizeMap.small,
        typeof vertical === "number"
          ? vertical
          : spaceSizeMap[vertical] || spaceSizeMap.small,
      ];
    }

    const gap =
      typeof sizeValue === "number"
        ? sizeValue
        : spaceSizeMap[sizeValue!] || spaceSizeMap.small;
    return [gap, gap];
  };

  const [horizontalGap, verticalGap] = getGapSize(size);

  // 过滤有效的子元素
  const childrenArray = React.Children.toArray(children).filter(
    (child) =>
      React.isValidElement(child) ||
      typeof child === "string" ||
      typeof child === "number"
  );

  if (childrenArray.length === 0) {
    return null;
  }

  // 构建容器类名
  const spaceClassName = cn(
    "inline-flex",
    {
      "flex-col": direction === "vertical",
      "flex-row": direction === "horizontal",
      "flex-wrap": wrap,
    },
    alignItemsMap[align] || "items-center",
    className
  );

  // 构建样式
  const spaceStyle: React.CSSProperties = {
    gap:
      direction === "vertical"
        ? `${verticalGap * 4}px`
        : `${horizontalGap * 4}px`,
    ...style,
  };

  // 如果有分隔符，需要在子元素间插入分隔符
  const renderChildren = useMemo(() => {
    if (!split) {
      return childrenArray;
    }

    const result: React.ReactNode[] = [];
    childrenArray.forEach((child, index) => {
      result.push(child);
      if (index < childrenArray.length - 1) {
        result.push(
          <span key={`split-${index}`} className={cn("flex-shrink-0")}>
            {split}
          </span>
        );
      }
    });
    return result;
  }, [childrenArray, split]);

  return (
    <Component
      ref={ref}
      className={spaceClassName}
      style={spaceStyle}
      {...rest}
    >
      {renderChildren}
    </Component>
  );
});

if (process.env.NODE_ENV !== "production") {
  Space.displayName = "Space";
}

export default Space;
