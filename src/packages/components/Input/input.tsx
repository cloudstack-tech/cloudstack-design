"use client";

import {
  forwardRef,
  InputHTMLAttributes,
  useState,
  useRef,
  useImperativeHandle,
} from "react";
import { cn } from "@/packages/utils";
import { X } from "lucide-react";

export interface InputRef {
  focus: () => void;
  blur: () => void;
  select: () => void;
  input: HTMLInputElement | null;
}

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  /**
   * 变体
   */
  variant?: "default" | "outline";
  /**
   * 是否显示清除按钮
   */
  allowClear?: boolean;
  /**
   * 前缀内容
   */
  prefix?: React.ReactNode;
  /**
   * 后缀内容
   */
  suffix?: React.ReactNode;
  /**
   * 输入框容器的类名
   */
  wrapperClassName?: string;
};

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const {
    className,
    wrapperClassName,
    allowClear = false,
    prefix,
    suffix,
    value: controlledValue,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    disabled,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const [focused, setFocused] = useState(false);

  // 判断是否为受控组件
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    select: () => inputRef.current?.select(),
    input: inputRef.current,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleClear = () => {
    if (disabled) return;

    const event = {
      target: { value: "" },
      currentTarget: { value: "" },
    } as React.ChangeEvent<HTMLInputElement>;

    if (!isControlled) {
      setInternalValue("");
    }

    onChange?.(event);
    inputRef.current?.focus();
  };

  const hasValue = () => {
    return currentValue && String(currentValue).length > 0;
  };

  const showClearIcon = allowClear && hasValue() && !disabled;

  return (
    <div
      className={cn(
        "border-input-border flex h-full min-h-8 w-full min-w-fit items-center gap-2 border px-2 text-xs transition-all duration-150",
        {
          "border-primary": focused && !disabled,
          "cursor-not-allowed opacity-50": disabled,
        },
        wrapperClassName
      )}
    >
      {prefix && (
        <div className="flex items-center text-gray-500">{prefix}</div>
      )}

      <input
        {...rest}
        ref={inputRef}
        value={currentValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        className={cn(
          "text-default placeholder:select-none flex-1 bg-transparent outline-none",
          {
            "cursor-not-allowed": disabled,
          },
          className
        )}
      />

      {showClearIcon && (
        <div className="flex items-center">
          <X
            className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-150"
            size={16}
            onClick={handleClear}
          />
        </div>
      )}

      {suffix && (
        <div className="flex items-center text-gray-500">{suffix}</div>
      )}
    </div>
  );
});

Input.displayName = "Input";

export default Input;
