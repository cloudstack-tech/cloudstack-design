"use client";

import { cn } from "@/packages/utilities";
import { Checkbox } from "./checkbox";
import { useEffect, useState } from "react";

export type CheckboxGroupProps<T> = {
  options?: {
    label: React.ReactNode;
    value: T;
  }[];
  children?: React.ReactNode;
  className?: string;
  classNames?: {
    root?: string;
    label?: string;
    checkbox?: string;
  };
  defaultValue?: T[];
  value?: T[];
  onChange?: (value: T[]) => void;
  disabled?: boolean;
  loading?: boolean;
};

export const CheckboxGroup = <T,>({
  options,
  children,
  className,
  classNames,
  defaultValue,
  value,
  onChange,
  disabled,
  loading,
}: CheckboxGroupProps<T>) => {
  const [internalValue, setInternalValue] = useState<T[]>(defaultValue ?? []);

  const isControlled = value !== undefined;
  const controlledValue = isControlled ? value : internalValue;

  const isChecked = (value: T) => controlledValue.includes(value);

  const handleChange = (value: T) => {
    const newChecked = isChecked(value);
    const newValue = newChecked
      ? controlledValue.filter((v) => v !== value)
      : [...controlledValue, value];

    if (isControlled) {
      onChange?.(newValue);
    }
    setInternalValue(newValue);
  };

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
    }
  }, [isControlled, value]);

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {options?.map((option) => (
        <Checkbox
          key={option.value as string}
          value={isChecked(option.value)}
          label={option.label}
          onChange={(e) => {
            handleChange(option.value);
          }}
        />
      ))}
      {children}
    </div>
  );
};
