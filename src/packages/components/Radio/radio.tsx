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
          "radio-wrapper",
          {
            disabled: disabled,
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
          className="radio-input"
          {...rest}
        />
        <span
          className={cn("radio-indicator", {
            checked: checked,
          })}
        />
        {content && <span className="radio-label">{content}</span>}
      </label>
    );
  }
);

Radio.displayName = "Radio";
