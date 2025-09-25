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
          <div className="switch-loading">
            <div className={cn("switch-loading-spinner", size)} />
          </div>
        );
      }

      return null;
    };

    // 渲染轨道内容
    const renderTrackContent = () => {
      const content = checked ? checkedChildren : unCheckedChildren;
      if (!content) return null;

      return <div className={cn("switch-content", size)}>{content}</div>;
    };

    const content = label || children;

    return (
      <label
        className={cn(
          "switch-wrapper",
          size,
          {
            disabled: disabled,
            loading: loading,
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
          className="switch-input"
          {...rest}
        />

        <div
          className={cn(
            "switch-track",
            size,
            {
              checked: checked,
              loading: loading,
            },
            classNames?.track
          )}
        >
          {/* 轨道内容（选中/未选中状态文本） */}
          {renderTrackContent()}

          {/* 滑块 */}
          <div
            className={cn(
              "switch-thumb",
              size,
              {
                checked: checked,
              },
              classNames?.thumb
            )}
          >
            {renderThumbContent()}
          </div>
        </div>

        {/* 标签 */}
        {content && (
          <span className={cn("switch-label", classNames?.label)}>
            {content}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";
