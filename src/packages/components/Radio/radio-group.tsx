"use client";

import React, { useState, useEffect } from "react";
import { RadioGroupProps } from "./type";
import { Radio } from "./radio";
import { cn } from "@/packages/utilities";

export const RadioGroup = <T extends any>({
  options,
  value: controlledValue,
  defaultValue,
  onChange,
  name,
  disabled = false,
  direction = "horizontal",
  className,
  classNames,
  children,
  ...rest
}: RadioGroupProps<T>) => {
  const [internalValue, setInternalValue] = useState<T | undefined>(
    defaultValue
  );

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const handleChange = (newValue: T) => {
    if (disabled) return;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(newValue);
  };

  useEffect(() => {
    if (isControlled) {
      setInternalValue(controlledValue);
    }
  }, [isControlled, controlledValue]);

  // 生成唯一的 name 属性，确保同一组内的 radio 互斥
  const groupName =
    name || `radio-group-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      className={cn(
        "radio-group flex gap-4",
        {
          "flex-col gap-2": direction === "vertical",
          "flex-row flex-wrap": direction === "horizontal",
          // 响应式：水平布局在小屏幕下变为垂直
          "max-sm:flex-col max-sm:gap-2": direction === "horizontal",
        },
        classNames?.root,
        className
      )}
      role="radiogroup"
      aria-disabled={disabled}
      {...rest}
    >
      {options?.map((option, index) => (
        <Radio
          key={`${groupName}-${option.value}-${index}`}
          name={groupName}
          value={option.value as string | number}
          checked={value === option.value}
          disabled={disabled || option.disabled}
          label={option.label}
          onChange={() => handleChange(option.value)}
          className={classNames?.radio}
        />
      ))}

      {children &&
        React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && child.type === Radio) {
            const childProps = child.props as any;
            return React.cloneElement(child, {
              ...childProps,
              key: child.key || `${groupName}-child-${index}`,
              name: groupName,
              checked: value === childProps.value,
              disabled: disabled || childProps.disabled,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(childProps.value);
                childProps.onChange?.(event);
              },
              className: cn(classNames?.radio, childProps.className),
            });
          }
          return child;
        })}
    </div>
  );
};

RadioGroup.displayName = "RadioGroup";
