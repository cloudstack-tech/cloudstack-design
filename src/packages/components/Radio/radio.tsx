"use client";

import React, { useState } from "react";
import { RadioProps } from "./type";
import { cn } from "@/packages/utilities";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const {
      checked: controlledChecked,
      defaultChecked,
      value,
      label,
      disabled = false,
      onChange,
      className,
      children,
      name,
      ...rest
    } = props;

    const [internalChecked, setInternalChecked] = useState(
      defaultChecked || false
    );

    const isControlled = controlledChecked !== undefined;
    const checked = isControlled ? controlledChecked : internalChecked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      const newChecked = event.target.checked;

      if (!isControlled) {
        setInternalChecked(newChecked);
      }

      onChange?.(event);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (!disabled && ref && "current" in ref && ref.current) {
          ref.current.click();
        }
      }
    };

    const content = label || children;

    return (
      <label
        className={cn(
          "radio-wrapper inline-flex items-center relative cursor-pointer select-none",
          "focus-within:outline-none",
          {
            "cursor-not-allowed opacity-50": disabled,
          },
          className
        )}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled}
      >
        <input
          ref={ref}
          type="radio"
          checked={checked}
          value={value}
          name={name}
          onChange={handleChange}
          disabled={disabled}
          className="radio-input absolute hidden h-0 w-0 cursor-pointer opacity-0"
          {...rest}
        />
        <span
          className={cn(
            "radio-indicator relative flex items-center justify-center w-4 h-4 border-2 rounded-full transition-all duration-200 ease-in-out",
            // Focus 状态
            "focus-within:ring-2 focus-within:ring-offset-1",
            // Hover 状态
            {
              "hover:border-blue-600": !disabled,
            },
            {
              checked: checked,
            }
          )}
          style={
            {
              borderColor: checked
                ? "var(--color-primary)"
                : disabled
                ? "var(--color-disabled-border)"
                : "var(--color-border-default)",
              backgroundColor: disabled ? "var(--color-disabled-bg)" : "white",
              "--tw-ring-color": "var(--color-primary)",
            } as React.CSSProperties
          }
          onMouseEnter={(e) => {
            if (!disabled && !checked) {
              e.currentTarget.style.backgroundColor =
                "rgba(59, 130, 246, 0.05)";
            }
          }}
          onMouseLeave={(e) => {
            if (!disabled) {
              e.currentTarget.style.backgroundColor = disabled
                ? "var(--color-disabled-bg)"
                : "white";
            }
          }}
        >
          {/* 选中状态的内部圆点 */}
          {checked && (
            <span
              className="absolute w-2 h-2 rounded-full"
              style={{
                backgroundColor: disabled
                  ? "var(--color-disabled-text)"
                  : "var(--color-primary)",
              }}
            />
          )}
        </span>
        {content && (
          <span
            className="radio-label ml-2 text-sm leading-none cursor-pointer select-none"
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

Radio.displayName = "Radio";
