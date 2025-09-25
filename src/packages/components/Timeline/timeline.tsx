"use client";

import React from "react";
import { TimelineProps } from "./type";
import { TimelineItem } from "./timeline-item";
import { cn } from "@/packages/utilities";

export const Timeline = React.forwardRef<HTMLUListElement, TimelineProps>(
  (props, ref) => {
    const {
      mode = "left",
      reverse = false,
      showLabel = false,
      className,
      children,
      ...rest
    } = props;

    // 处理子元素，添加必要的属性
    const processChildren = (children: React.ReactNode) => {
      const childArray = React.Children.toArray(children);

      if (reverse) {
        childArray.reverse();
      }

      return childArray.map((child, index) => {
        if (!React.isValidElement(child)) {
          return child;
        }

        // 确定是否为最后一个元素
        const isLast = index === childArray.length - 1;

        // 在交替模式下确定位置
        let position: "left" | "right" = "left";
        if (mode === "alternate") {
          position = index % 2 === 0 ? "left" : "right";
        } else if (mode === "right") {
          position = "right";
        }

        // 克隆元素并添加属性
        return React.cloneElement(child, {
          ...child.props,
          isLast,
          position,
          key: child.key || index,
        });
      });
    };

    return (
      <ul
        ref={ref}
        className={cn(
          "timeline",
          `mode-${mode}`,
          {
            reverse,
            "show-label": showLabel,
          },
          className
        )}
        {...rest}
      >
        {processChildren(children)}
      </ul>
    );
  }
);

Timeline.displayName = "Timeline";

// 创建复合组件
const TimelineWithItem = Timeline as typeof Timeline & {
  Item: typeof TimelineItem;
};

TimelineWithItem.Item = TimelineItem;

export { TimelineWithItem as TimelineComponent, TimelineItem };
export default TimelineWithItem;
