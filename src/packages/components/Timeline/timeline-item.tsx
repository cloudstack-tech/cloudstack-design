"use client";

import React from "react";
import { TimelineItemProps } from "./type";
import { cn } from "@/packages/utilities";

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
      mode = "left",
      reverse = false,
      className,
      children,
      ...rest
    } = props;

    // 渲染时间轴点
    const renderDot = () => {
      if (dot) {
        return (
          <div
            className={cn(
              "timeline-dot custom absolute z-10",
              "w-auto h-auto bg-transparent border-0",
              `status-${status}`,
              // 位置样式 - 根据模式确定
              {
                "left-[-4px] top-1.5 transform translate-x-1/2":
                  mode === "left",
                "right-[-4px] top-1.5 transform -translate-x-1/2":
                  mode === "right",
                "top-1.5 left-1/2 transform -translate-x-1/2":
                  mode === "alternate",
              }
            )}
          >
            {dot}
          </div>
        );
      }

      return (
        <div
          className={cn(
            "timeline-dot absolute w-3 h-3 rounded-full border-2 border-white z-10",
            `status-${status}`,
            // 位置样式 - 根据模式确定
            {
              "left-[-4px] top-1.5 transform translate-x-1/2": mode === "left",
              "right-[-4px] top-1.5 transform -translate-x-1/2":
                mode === "right",
              "top-1.5 left-1/2 transform -translate-x-1/2":
                mode === "alternate",
            }
          )}
          style={{
            backgroundColor:
              color ||
              (status === "pending"
                ? "#d1d5db"
                : status === "process"
                ? "var(--color-primary)"
                : status === "finish"
                ? "var(--color-success)"
                : status === "error"
                ? "var(--color-error)"
                : status === "success"
                ? "var(--color-success)"
                : "#d1d5db"),
            boxShadow: "0 0 0 1px var(--color-border-default)",
          }}
        />
      );
    };

    return (
      <li
        ref={ref}
        className={cn(
          "timeline-item relative",
          // 基础间距
          {
            "pb-5": !isLast,
            "pb-0": isLast,
          },
          // 模式样式
          {
            "pl-6": mode === "left",
            "pr-6 text-right": mode === "right",
            "w-1/2": mode === "alternate",
            "pr-8 text-right": mode === "alternate" && position === "left",
            "ml-auto pl-8 text-left":
              mode === "alternate" && position === "right",
          },
          // 连接线样式 - 使用 before 伪元素
          {
            "before:content-[''] before:absolute before:w-0.5 before:bg-gray-200 before:-bottom-1":
              !isLast && !reverse,
            "before:left-1 before:top-2":
              !isLast && !reverse && mode === "left",
            "before:right-1 before:top-2":
              !isLast && !reverse && mode === "right",
            // 反向模式的连接线调整
            "before:top-auto before:bottom-2": reverse && !isLast,
            "before:hidden": isLast && !reverse,
            "before:block": reverse && !isLast,
            "first:before:hidden": reverse,
          },
          {
            "is-last": isLast,
            [`position-${position}`]: position,
          },
          className
        )}
        {...rest}
      >
        {renderDot()}

        <div className="timeline-content mb-2">
          {title && (
            <div
              className="timeline-title font-medium mb-1"
              style={{ color: "var(--color-default)" }}
            >
              {title}
            </div>
          )}

          {description && (
            <div
              className="timeline-description text-sm leading-relaxed"
              style={{ color: "var(--color-secondary)" }}
            >
              {description}
            </div>
          )}

          {children}

          {label && (
            <div
              className="timeline-label text-xs mt-1"
              style={{ color: "var(--color-secondary)" }}
            >
              {label}
            </div>
          )}
        </div>
      </li>
    );
  }
);

TimelineItem.displayName = "TimelineItem";
