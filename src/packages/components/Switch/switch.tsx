"use client";

import React, { useState } from "react";
import { SwitchProps } from "./type";
import { cn } from "@/packages/utilities";

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (props, ref) => {
    const {
      checked: controlledChecked,
      defaultChecked = false,
      onChange,
      disabled = false,
      size = "default",
      loading = false,
      label,
      checkedChildren,
      unCheckedChildren,
      className,
      classNames,
      children,
      ...rest
    } = props;

    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled || loading) return;

      const newChecked = event.target.checked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onChange?.(newChecked, event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (!disabled && !loading && ref && "current" in ref && ref.current) {
          ref.current.click();
        }
      }
    };

    // 渲染滑块内容
    const renderThumbContent = () => {
      if (loading) {
        return (
          <div className="switch-loading absolute inset-0 flex items-center justify-center">
            <div
              className={cn(
                "switch-loading-spinner animate-spin rounded-full border-2 border-white border-t-transparent",
                {
                  "w-2 h-2": size === "small",
                  "w-3 h-3": size === "default",
                  "w-4 h-4": size === "large",
                }
              )}
            />
          </div>
        );
      }

      return null;
    };

    // 渲染轨道内容
    const renderTrackContent = () => {
      const content = checked ? checkedChildren : unCheckedChildren;
      if (!content) return null;

      return (
        <div
          className={cn(
            "switch-content absolute inset-0 flex items-center justify-center text-white font-medium",
            {
              "text-[0.5rem]": size === "small",
              "text-[0.625rem]": size === "default",
              "text-xs": size === "large",
            }
          )}
        >
          {content}
        </div>
      );
    };

    const content = label || children;

    return (
      <label
        className={cn(
          "switch-wrapper inline-flex items-center cursor-pointer select-none group",
          "focus-within:outline-none",
          {
            "cursor-not-allowed opacity-50": disabled,
            "cursor-wait": loading,
          },
          classNames?.root,
          className
        )}
        tabIndex={disabled || loading ? -1 : 0}
        onKeyDown={handleKeyDown}
        role="switch"
        aria-checked={checked}
        aria-disabled={disabled || loading}
        aria-label={typeof content === "string" ? content : undefined}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled || loading}
          className="switch-input absolute hidden h-0 w-0 cursor-pointer opacity-0"
          {...rest}
        />

        <div
          className={cn(
            "switch-track relative inline-flex items-center rounded-full transition-all duration-200 ease-in-out",
            // 尺寸样式
            {
              "h-4 w-7 px-0.5": size === "small",
              "h-6 w-11 px-0.5": size === "default",
              "h-8 w-14 px-1": size === "large",
            },
            // 交互效果
            {
              "hover:shadow-md": !disabled && !loading,
            },
            // Focus 状态 - 使用 group 来处理 focus-within
            "group-focus-within:ring-2 group-focus-within:ring-offset-2",
            classNames?.track
          )}
          style={
            {
              backgroundColor: checked
                ? disabled
                  ? "var(--color-disabled-text)"
                  : "var(--color-primary)"
                : disabled
                ? "var(--color-disabled-bg)"
                : "rgba(0, 0, 0, 0.25)",
              "--tw-ring-color": "var(--color-primary)",
            } as React.CSSProperties
          }
        >
          {/* 轨道内容（选中/未选中状态文本） */}
          {renderTrackContent()}

          {/* 滑块 */}
          <div
            className={cn(
              "switch-thumb absolute bg-white rounded-full shadow-sm transition-all duration-200 ease-in-out transform",
              // 尺寸样式
              {
                "w-3 h-3": size === "small",
                "w-5 h-5": size === "default",
                "w-6 h-6": size === "large",
              },
              // 位置样式
              {
                "translate-x-full": checked,
              },
              // 交互效果
              {
                "group-hover:shadow-lg": !disabled && !loading,
                "group-active:scale-110": !disabled && !loading,
              },
              classNames?.thumb
            )}
            style={{
              boxShadow: disabled
                ? "0 1px 2px rgba(0, 0, 0, 0.1)"
                : "0 2px 4px rgba(0, 0, 0, 0.15)",
              backgroundColor: disabled ? "var(--color-disabled-bg)" : "white",
            }}
          >
            {renderThumbContent()}
          </div>
        </div>

        {/* 标签 */}
        {content && (
          <span
            className={cn(
              "switch-label ml-2 text-sm leading-none cursor-pointer select-none",
              classNames?.label
            )}
            style={{
              color: disabled
                ? "var(--color-disabled-text)"
                : "var(--color-default)",
            }}
          >
            {content}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";
