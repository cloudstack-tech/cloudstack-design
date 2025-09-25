"use client";

import React from "react";
import { StepProps } from "./type";
import { cn } from "@/packages/utilities";
import { CheckIcon, XIcon } from "lucide-react";

export const StepItem = React.forwardRef<HTMLDivElement, StepProps>(
  (props, ref) => {
    const {
      status = "wait",
      title,
      description,
      icon,
      disabled = false,
      isLast = false,
      stepNumber = 0,
      onClick,
      className,
      children,
      direction = "horizontal", // 从父组件传递方向
      size = "default", // 从父组件传递尺寸
      ...rest
    } = props;

    const isClickable = !disabled && onClick;

    // 渲染步骤图标
    const renderIcon = () => {
      if (icon) {
        return icon;
      }

      switch (status) {
        case "finish":
          return <CheckIcon className="w-4 h-4" />;
        case "error":
          return <XIcon className="w-4 h-4" />;
        case "process":
        case "wait":
        default:
          return stepNumber + 1;
      }
    };

    const handleClick = () => {
      if (isClickable) {
        onClick!(stepNumber);
      }
    };

    const isHorizontal = direction === "horizontal";
    const isVertical = direction === "vertical";
    const isSmall = size === "small";

    return (
      <div
        ref={ref}
        className={cn(
          "step-item relative flex items-center",
          `status-${status}`,
          // 布局方向
          {
            // 水平布局
            "flex-col items-center text-center flex-1": isHorizontal,
            // 垂直布局
            "flex-row items-start text-left mb-4 last:mb-0": isVertical,
            // 响应式：水平布局在小屏幕下变为垂直
            "max-sm:flex-row max-sm:items-start max-sm:text-left max-sm:mb-4 max-sm:last:mb-0 max-sm:flex-none":
              isHorizontal,
          },
          // 交互状态
          {
            "cursor-pointer transition-all duration-200": isClickable,
            "cursor-not-allowed opacity-50": disabled,
            "hover:[&_.step-icon]:scale-110": isClickable && !disabled,
          },
          className
        )}
        onClick={handleClick}
        {...rest}
        style={
          {
            "--step-line-color":
              status === "finish" ? "var(--color-success)" : "#e5e7eb",
          } as React.CSSProperties
        }
      >
        <div
          className={cn(
            "step-icon relative z-10 flex items-center justify-center rounded-full border-2 font-medium transition-transform duration-200",
            // 尺寸
            {
              "w-8 h-8 text-sm": !isSmall,
              "w-6 h-6 text-xs": isSmall,
            },
            `status-${status}`
          )}
          style={{
            borderColor:
              status === "wait"
                ? "var(--color-border-default)"
                : status === "process"
                ? "var(--color-primary)"
                : status === "finish"
                ? "var(--color-success)"
                : status === "error"
                ? "var(--color-error)"
                : "var(--color-border-default)",
            color: status === "wait" ? "var(--color-secondary)" : "white",
            backgroundColor:
              status === "wait"
                ? "white"
                : status === "process"
                ? "var(--color-primary)"
                : status === "finish"
                ? "var(--color-success)"
                : status === "error"
                ? "var(--color-error)"
                : "white",
          }}
        >
          {renderIcon()}
        </div>

        <div
          className={cn("step-content", {
            // 水平布局的内容间距
            "mt-2": isHorizontal,
            // 垂直布局的内容间距
            "mt-0 ml-3": isVertical,
            // 响应式间距
            "max-sm:mt-0 max-sm:ml-3": isHorizontal,
          })}
        >
          {title && (
            <div
              className={cn("step-title font-medium mb-1", {
                "text-sm": !isSmall,
                "text-xs": isSmall,
              })}
              style={{
                color:
                  status === "wait"
                    ? "var(--color-secondary)"
                    : status === "process"
                    ? "var(--color-primary)"
                    : status === "finish"
                    ? "var(--color-default)"
                    : status === "error"
                    ? "var(--color-error)"
                    : "var(--color-default)",
              }}
            >
              {title}
            </div>
          )}

          {description && (
            <div
              className="step-description text-xs leading-relaxed"
              style={{
                color: "var(--color-secondary)",
              }}
            >
              {description}
            </div>
          )}

          {children}
        </div>

        {/* 连接线 */}
        {!isLast && (
          <div
            className={cn("absolute", {
              // 水平连接线
              "top-4 h-0.5 left-[calc(50%+16px)] right-[calc(-50%+16px)]":
                isHorizontal,
              // 垂直连接线
              "w-0.5 left-4 top-[calc(2rem+4px)] h-4": isVertical,
              // 小尺寸调整
              "left-3 top-[calc(1.5rem+4px)]": isVertical && isSmall,
              // 响应式
              "max-sm:w-0.5 max-sm:left-4 max-sm:top-[calc(2rem+4px)] max-sm:h-4 max-sm:right-auto":
                isHorizontal,
              "max-sm:left-3 max-sm:top-[calc(1.5rem+4px)]":
                isHorizontal && isSmall,
            })}
            style={{
              backgroundColor:
                status === "finish" ? "var(--color-success)" : "#e5e7eb",
            }}
          />
        )}
      </div>
    );
  }
);

StepItem.displayName = "StepItem";
