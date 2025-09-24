"use client";

import React from "react";
import { BadgeProps } from "./type";
import { cn } from "@/packages/utilities";
import { badgeVariants } from "./variants";

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (props, ref) => {
    const {
      children,
      color = "danger",
      size = "base",
      variant = "solid",
      dot = false,
      count,
      overflowCount = 99,
      showZero = false,
      className,
      offset = [0, 0],
      position = "top-right",
      ...rest
    } = props;

    // 计算显示内容
    const getDisplayContent = () => {
      if (dot) return null;

      if (count !== undefined) {
        if (count === 0 && !showZero) return null;
        if (count > overflowCount) return `${overflowCount}+`;
        return count.toString();
      }

      return null;
    };

    const displayContent = getDisplayContent();

    // 如果没有内容且不是点状，不渲染徽标
    if (!dot && !displayContent) return null;

    const badgeClassName = cn(
      badgeVariants({ variant, color, size }),
      className
    );

    const badgeElement = (
      <span ref={ref} className={badgeClassName} data-dot={dot} {...rest}>
        {displayContent}
      </span>
    );

    // 获取精准定位的样式
    const getPositionStyle = () => {
      let baseStyle = {};

      switch (position) {
        case "top-right":
          baseStyle = {
            top: "0px",
            right: "0px",
            transform: `translate(50%, -50%) translate(${offset[0]}px, ${offset[1]}px)`,
          };
          break;
        case "top-left":
          baseStyle = {
            top: "0px",
            left: "0px",
            transform: `translate(-50%, -50%) translate(${offset[0]}px, ${offset[1]}px)`,
          };
          break;
        case "bottom-right":
          baseStyle = {
            bottom: "0px",
            right: "0px",
            transform: `translate(50%, 50%) translate(${offset[0]}px, ${offset[1]}px)`,
          };
          break;
        case "bottom-left":
          baseStyle = {
            bottom: "0px",
            left: "0px",
            transform: `translate(-50%, 50%) translate(${offset[0]}px, ${offset[1]}px)`,
          };
          break;
        default:
          // 默认为 top-right
          baseStyle = {
            top: "0px",
            right: "0px",
            transform: `translate(50%, -50%) translate(${offset[0]}px, ${offset[1]}px)`,
          };
      }

      return baseStyle;
    };

    // 包装模式
    if (children) {
      return (
        <div className="badge-wrapper relative inline-block leading-0">
          {children}
          <span className="absolute z-10" style={getPositionStyle()}>
            {badgeElement}
          </span>
        </div>
      );
    }

    // 独立模式
    return badgeElement;
  }
);

Badge.displayName = "Badge";
