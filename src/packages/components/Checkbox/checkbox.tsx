"use client";

import { cn } from "@/packages/utils";
import { Check, Minus } from "lucide-react";
import React, { InputHTMLAttributes, forwardRef, useState } from "react";

export type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value"
> & {
  value?: boolean;
  defaultValue?: boolean;
  indeterminate?: boolean;
  name?: string;
  label?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      indeterminate,
      label,
      children,
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? false);

    const isControlled = controlledValue !== undefined;
    const checked = isControlled ? controlledValue : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (disabled) return;

      const newValue = indeterminate ? true : e.target.checked;

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(e);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLLabelElement>) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        if (!disabled) {
          const newValue = indeterminate ? true : !checked;

          if (!isControlled) {
            setInternalValue(newValue);
          }

          onChange?.({
            target: {
              checked: newValue,
            },
          } as React.ChangeEvent<HTMLInputElement>);
        }
      }
    };

    const checkboxClasses = cn(
      // 半选状态 - 横线
      {
        "bg-primary-color border-primary-color [&>svg]:stroke-3 [&>svg]:stroke-white":
          indeterminate,
      },
      // 选中状态 - 勾
      {
        "bg-primary-color border-primary-color [&>svg]:stroke-3 [&>svg]:stroke-white":
          checked && !indeterminate,
      },
      // 未选中状态
      "block relative w-4 h-4 border border-input-border rounded transition-all duration-200 ease-in-out",
      // 基础伪元素样式
      "[&>svg]:absolute [&>svg]:top-1/2 [&>svg]:left-1/2 [&>svg]:-translate-x-1/2 [&>svg]:-translate-y-1/2",
      "transition-all duration-200 ease-in-out",
      // 聚焦状态
      "focus-within:ring-2"
    );

    const wrapperClasses = cn(
      "inline-flex items-center relative cursor-pointer select-none",
      disabled ? "cursor-not-allowed opacity-50" : null,
      className
    );

    const content = label ? label : children;

    return (
      <label
        className={wrapperClasses}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={handleKeyDown}
        role="checkbox"
        aria-checked={indeterminate ? "mixed" : checked}
        aria-disabled={disabled}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          disabled={disabled}
          className="absolute hidden h-0 w-0 cursor-pointer opacity-0"
          ref={ref}
          {...rest}
        />
        <span className={checkboxClasses}>
          {indeterminate ? (
            <Minus size={12} />
          ) : checked ? (
            <Check size={12} />
          ) : null}
        </span>
        {content && (
          <span className="ml-2 text-xs leading-none">{content}</span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
