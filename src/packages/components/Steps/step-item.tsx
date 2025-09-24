"use client";

import React from "react";
import { StepProps } from "./type";
import { cn } from "@/packages/utils";
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

    return (
      <div
        ref={ref}
        className={cn(
          "step-item",
          `status-${status}`,
          {
            "is-last": isLast,
            clickable: isClickable,
            disabled: disabled,
          },
          className
        )}
        onClick={handleClick}
        {...rest}
      >
        <div className={cn("step-icon", `status-${status}`)}>
          {renderIcon()}
        </div>

        <div className="step-content">
          {title && <div className="step-title">{title}</div>}

          {description && <div className="step-description">{description}</div>}

          {children}
        </div>
      </div>
    );
  }
);

StepItem.displayName = "StepItem";
