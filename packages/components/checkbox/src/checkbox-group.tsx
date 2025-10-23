"use client";

import React, {useCallback, useState, useMemo} from "react";
import {forwardRef} from "@cloudstack-design/system";

import Checkbox from "./checkbox";
import type {CheckboxProps} from "./checkbox";

export interface CheckboxGroupProps<T = string>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * The checkbox group label
   */
  label?: React.ReactNode;
  /**
   * The checkbox group description
   */
  description?: React.ReactNode;
  /**
   * The checkbox options
   */
  options?: Array<{
    label: React.ReactNode;
    value: T;
    disabled?: boolean;
  }>;
  /**
   * The axis the checkbox group items should align with
   * @default "vertical"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * The currently selected values (controlled)
   */
  value?: T[];
  /**
   * The default selected values (uncontrolled)
   */
  defaultValue?: T[];
  /**
   * Whether the checkbox group is disabled
   */
  isDisabled?: boolean;
  /**
   * Whether the checkbox group is required
   */
  isRequired?: boolean;
  /**
   * Whether the checkbox group is invalid
   */
  isInvalid?: boolean;
  /**
   * Handler called when the value changes
   */
  onChange?: (value: T[]) => void;
  /**
   * The name for the checkbox group
   */
  name?: string;
  /**
   * Custom props for each checkbox
   */
  checkboxProps?: Partial<CheckboxProps>;
  /**
   * Custom class names for different parts
   */
  classNames?: {
    base?: string;
    wrapper?: string;
    label?: string;
    description?: string;
  };
}

const CheckboxGroup = forwardRef<"div", CheckboxGroupProps>((props, ref) => {
  const {
    label,
    description,
    options = [],
    orientation = "vertical",
    value: valueProp,
    defaultValue = [],
    isDisabled = false,
    isRequired = false,
    isInvalid = false,
    onChange,
    name,
    checkboxProps = {},
    classNames = {},
    className,
    children,
    ...otherProps
  } = props;

  const [internalValue, setInternalValue] = useState<typeof defaultValue>(defaultValue);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : internalValue;

  const isChecked = useCallback((itemValue: any) => value.includes(itemValue), [value]);

  const handleChange = useCallback(
    (itemValue: any) => {
      const newValue = isChecked(itemValue)
        ? value.filter((v) => v !== itemValue)
        : [...value, itemValue];

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(newValue);
    },
    [value, isChecked, isControlled, onChange],
  );

  const wrapperStyles = useMemo(
    () => ({
      display: "flex",
      flexDirection: orientation === "vertical" ? ("column" as const) : ("row" as const),
      gap: orientation === "vertical" ? "0.5rem" : "1rem",
    }),
    [orientation],
  );

  const baseClassName = `checkbox-group ${classNames.base || ""} ${className || ""}`.trim();
  const wrapperClassName = `checkbox-group-wrapper ${classNames.wrapper || ""}`.trim();

  return (
    <div ref={ref} className={baseClassName} role="group" {...otherProps}>
      {label && (
        <div className={`checkbox-group-label text-sm font-medium mb-2 ${classNames.label || ""}`}>
          {label}
          {isRequired && <span className="text-red-500 ml-1">*</span>}
        </div>
      )}
      {description && (
        <div
          className={`checkbox-group-description text-xs text-gray-600 mb-2 ${
            classNames.description || ""
          }`}
        >
          {description}
        </div>
      )}
      <div className={wrapperClassName} style={wrapperStyles}>
        {options.map((option, index) => (
          <Checkbox
            key={option.value as string | number}
            name={name}
            value={option.value as string}
            isSelected={isChecked(option.value)}
            isDisabled={isDisabled || option.disabled}
            isInvalid={isInvalid}
            onChange={() => handleChange(option.value)}
            {...checkboxProps}
          >
            {option.label}
          </Checkbox>
        ))}
        {children}
      </div>
    </div>
  );
});

CheckboxGroup.displayName = "CloudStackDesign.CheckboxGroup";

export default CheckboxGroup;
