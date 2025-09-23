"use client";

import React from "react";
import { cn } from "@/packages/utils";
import { SpaceCompactProps, spaceSizeMap } from "./type";

const SpaceCompact = React.forwardRef<HTMLDivElement, SpaceCompactProps>(
  (props, ref) => {
    const {
      className,
      style,
      children,
      direction = "horizontal",
      block = false,
      size = 0,
      ...rest
    } = props;

    // 过滤有效的子元素
    const childrenArray = React.Children.toArray(children).filter((child) =>
      React.isValidElement(child)
    );

    if (childrenArray.length === 0) {
      return null;
    }

    // 处理间距大小
    const getGapSize = (sizeValue: SpaceCompactProps["size"]): number => {
      if (typeof sizeValue === "number") {
        return sizeValue;
      }
      return spaceSizeMap[sizeValue!] || 0;
    };

    const gap = getGapSize(size);

    // 构建容器类名
    const compactClassName = cn(
      block ? "flex" : "inline-flex",
      {
        "flex-col": direction === "vertical",
        "flex-row": direction === "horizontal",
      },
      className
    );

    // 构建样式 - 紧凑模式主要通过负边距实现
    const compactStyle: React.CSSProperties = {
      gap: gap > 0 ? `${gap * 4}px` : undefined,
      ...style,
    };

    // 为子元素添加紧凑样式
    const renderCompactChildren = () => {
      return childrenArray.map((child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        // 为每个子元素添加紧凑样式类
        const compactChildClassName = cn(
          // 移除边框圆角以实现紧凑效果
          {
            // 水平方向的紧凑样式
            "first:rounded-r-none last:rounded-l-none [&:not(:first-child):not(:last-child)]:rounded-none":
              direction === "horizontal" && gap === 0,
            // 垂直方向的紧凑样式
            "first:rounded-b-none last:rounded-t-none [&:not(:first-child):not(:last-child)]:rounded-none":
              direction === "vertical" && gap === 0,
            // 边框处理 - 避免重复边框
            "[&:not(:first-child)]:-ml-px":
              direction === "horizontal" && gap === 0,
            "[&:not(:first-child)]:-mt-px":
              direction === "vertical" && gap === 0,
          },
          (child.props as any)?.className
        );

        return React.cloneElement(child as React.ReactElement<any>, {
          key: index,
          className: compactChildClassName,
        });
      });
    };

    return (
      <div
        ref={ref}
        className={compactClassName}
        style={compactStyle}
        {...rest}
      >
        {renderCompactChildren()}
      </div>
    );
  }
);

if (process.env.NODE_ENV !== "production") {
  SpaceCompact.displayName = "Space.Compact";
}

export default SpaceCompact;
