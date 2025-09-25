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
      className={cn("radio-group", direction, classNames?.root, className)}
      role="radiogroup"
      aria-disabled={disabled}
      {...rest}
    >
      {options?.map((option, index) => (
        <Radio
          key={`${groupName}-${option.value}-${index}`}
          name={groupName}
          value={option.value}
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
            return React.cloneElement(child, {
              ...child.props,
              key: child.key || `${groupName}-child-${index}`,
              name: groupName,
              checked: value === child.props.value,
              disabled: disabled || child.props.disabled,
              onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                handleChange(child.props.value);
                child.props.onChange?.(event);
              },
              className: cn(classNames?.radio, child.props.className),
            });
          }
          return child;
        })}
    </div>
  );
};

RadioGroup.displayName = "RadioGroup";
