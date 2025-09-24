"use client";

import React from "react";
import { TimelineItemProps } from "./type";
import { cn } from "@/packages/utils";

export const TimelineItem = React.forwardRef<HTMLLIElement, TimelineItemProps>(
  (props, ref) => {
    const {
      status = "finish",
      title,
      description,
      label,
      dot,
      color,
      isLast = false,
      position = "left",
      className,
      children,
      ...rest
    } = props;

    // 渲染时间轴点
    const renderDot = () => {
      if (dot) {
        return (
          <div className={cn("timeline-dot custom", `status-${status}`)}>
            {dot}
          </div>
        );
      }

      const dotStyle = color ? { backgroundColor: color } : {};

      return (
        <div
          className={cn("timeline-dot", `status-${status}`)}
          style={dotStyle}
        />
      );
    };

    return (
      <li
        ref={ref}
        className={cn(
          "timeline-item",
          {
            "is-last": isLast,
            [`position-${position}`]: position,
          },
          className
        )}
        {...rest}
      >
        {renderDot()}

        <div className="timeline-content">
          {title && <div className="timeline-title">{title}</div>}

          {description && (
            <div className="timeline-description">{description}</div>
          )}

          {children}

          {label && <div className="timeline-label">{label}</div>}
        </div>
      </li>
    );
  }
);

TimelineItem.displayName = "TimelineItem";
