"use client";

import {
  forwardRef,
  TextareaHTMLAttributes,
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
} from "react";
import { cn } from "@/packages/utilities";
import { X } from "lucide-react";

export interface TextareaRef {
  focus: () => void;
  blur: () => void;
  select: () => void;
  textarea: HTMLTextAreaElement | null;
}

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  /**
   * 变体
   */
  variant?: "default" | "outline";
  /**
   * 是否允许清除
   */
  allowClear?: boolean;
  /**
   * 是否允许调整大小
   */
  allowResize?: boolean;
  /**
   * 自动调整大小
   */
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  /**
   * 输入框容器的类名
   */
  wrapperClassName?: string;
};

const Textarea = forwardRef<TextareaRef, TextareaProps>((props, ref) => {
  const {
    className,
    wrapperClassName,
    allowClear = false,
    allowResize = false,
    value: controlledValue,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    disabled,
    autoSize = false,
    rows = 3,
    ...rest
  } = props;

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [internalValue, setInternalValue] = useState(defaultValue || "");
  const [focused, setFocused] = useState(false);

  // 判断是否为受控组件
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    focus: () => textareaRef.current?.focus(),
    blur: () => textareaRef.current?.blur(),
    select: () => textareaRef.current?.select(),
    textarea: textareaRef.current,
  }));

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (textarea && autoSize) {
      const { minRows, maxRows } = typeof autoSize === "object" ? autoSize : {};

      // 重置高度以获取正确的scrollHeight
      textarea.style.height = "auto";

      // 计算新高度
      const lineHeight = 20; // 假设行高为20px
      const padding = 12; // 上下padding总和
      const minHeight = minRows
        ? minRows * lineHeight + padding
        : lineHeight + padding;
      const maxHeight = maxRows ? maxRows * lineHeight + padding : Infinity;

      let newHeight = Math.max(textarea.scrollHeight, minHeight);
      if (maxHeight !== Infinity) {
        newHeight = Math.min(newHeight, maxHeight);
      }

      textarea.style.height = `${newHeight}px`;
    }
  };

  useEffect(() => {
    adjustHeight();
  }, [currentValue, autoSize]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    if (!isControlled) {
      setInternalValue(newValue);
    }

    onChange?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false);
    onBlur?.(e);
  };

  const handleClear = () => {
    if (disabled) return;

    const event = {
      target: { value: "" },
      currentTarget: { value: "" },
    } as React.ChangeEvent<HTMLTextAreaElement>;

    if (!isControlled) {
      setInternalValue("");
    }

    onChange?.(event);
    textareaRef.current?.focus();
  };

  const hasValue = () => {
    return currentValue && String(currentValue).length > 0;
  };

  const showClearIcon = allowClear && hasValue() && !disabled;

  return (
    <div
      className={cn(
        "border-input-border relative flex w-full border px-2 py-1.5 text-xs transition-all duration-150",
        {
          "border-primary": focused && !disabled,
          "cursor-not-allowed opacity-50": disabled,
        },
        wrapperClassName
      )}
    >
      <textarea
        {...rest}
        ref={textareaRef}
        value={currentValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        disabled={disabled}
        rows={autoSize ? undefined : rows}
        className={cn(
          "text-default placeholder:select-none w-full bg-transparent outline-none",
          {
            "cursor-not-allowed": disabled,
            "resize-y": allowResize && !autoSize,
            "resize-none": !allowResize || autoSize,
          },
          className
        )}
      />

      {showClearIcon && (
        <div className="absolute top-2 right-2 flex items-center">
          <X
            className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-150"
            size={16}
            onClick={handleClear}
          />
        </div>
      )}
    </div>
  );
});

Textarea.displayName = "Textarea";

export default Textarea;
