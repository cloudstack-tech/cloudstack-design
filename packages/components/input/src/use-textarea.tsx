import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {input, InputVariantProps, InputSlots} from "@cloudstack-design/theme";
import {
  useState,
  useCallback,
  useMemo,
  useImperativeHandle,
  useEffect,
  ChangeEvent,
  FocusEvent,
  TextareaHTMLAttributes,
  ReactNode,
} from "react";

export interface TextareaRef {
  focus: () => void;
  blur: () => void;
  select: () => void;
  textarea: HTMLTextAreaElement | null;
}

interface Props extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  /**
   * Ref to the textarea element
   */
  ref?: ReactRef<TextareaRef | null>;
  /**
   * Whether to show clear button
   */
  allowClear?: boolean;
  /**
   * Whether to allow resize
   */
  allowResize?: boolean;
  /**
   * Auto adjust height
   */
  autoSize?: boolean | {minRows?: number; maxRows?: number};
  /**
   * Whether the textarea is invalid
   */
  isInvalid?: boolean;
  /**
   * Custom class names for different slots
   */
  classNames?: Partial<Record<InputSlots, string>>;
  /**
   * Additional className for the wrapper
   */
  wrapperClassName?: string;
}

export type UseTextareaProps = Props & Omit<InputVariantProps, "size">;

export const useTextarea = (props: UseTextareaProps) => {
  const {
    ref,
    value: controlledValue,
    defaultValue,
    onChange,
    onFocus,
    onBlur,
    disabled: isDisabled = false,
    isInvalid = false,
    allowClear = false,
    allowResize = false,
    autoSize = false,
    rows = 3,
    classNames,
    wrapperClassName,
    variant,
    fullWidth,
    className,
    ...restProps
  } = props;

  const textareaRef = useDOMRef<HTMLTextAreaElement>(null);
  const [internalValue, setInternalValue] = useState<
    string | number | readonly string[] | undefined
  >(defaultValue || "");
  const [isFocused, setIsFocused] = useState(false);

  // Determine if controlled
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    focus: () => textareaRef.current?.focus(),
    blur: () => textareaRef.current?.blur(),
    select: () => textareaRef.current?.select(),
    textarea: textareaRef.current,
  }));

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea && autoSize) {
      const {minRows, maxRows} = typeof autoSize === "object" ? autoSize : {};

      // Reset height to get correct scrollHeight
      textarea.style.height = "auto";

      // Calculate new height
      const lineHeight = 20; // Assume line height is 20px
      const padding = 12; // Total padding (top + bottom)
      const minHeight = minRows ? minRows * lineHeight + padding : lineHeight + padding;
      const maxHeight = maxRows ? maxRows * lineHeight + padding : Infinity;

      let newHeight = Math.max(textarea.scrollHeight, minHeight);
      if (maxHeight !== Infinity) {
        newHeight = Math.min(newHeight, maxHeight);
      }

      textarea.style.height = `${newHeight}px`;
    }
  }, [autoSize]);

  useEffect(() => {
    adjustHeight();
  }, [currentValue, autoSize, adjustHeight]);

  const slots = useMemo(
    () =>
      input({
        variant,
        size: "md", // Textarea always uses md size
        isDisabled,
        isInvalid,
        isFocused,
        fullWidth,
      }),
    [variant, isDisabled, isInvalid, isFocused, fullWidth],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(e);
    },
    [isControlled, onChange],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    },
    [onBlur],
  );

  const handleClear = useCallback(() => {
    if (isDisabled) return;

    const event = {
      target: {value: ""},
      currentTarget: {value: ""},
    } as ChangeEvent<HTMLTextAreaElement>;

    if (!isControlled) {
      setInternalValue("");
    }

    onChange?.(event);
    textareaRef.current?.focus();
  }, [isDisabled, isControlled, onChange]);

  const hasValue = useCallback(() => {
    return currentValue != null && String(currentValue).length > 0;
  }, [currentValue]);

  const showClearIcon = allowClear && hasValue() && !isDisabled;

  const getBaseProps = useCallback(
    () => ({
      className: slots.base({class: [classNames?.base, wrapperClassName]}),
    }),
    [slots, classNames, wrapperClassName],
  );

  const getInputWrapperProps = useCallback(
    () => ({
      className: slots.inputWrapper({
        class: [
          classNames?.inputWrapper,
          "!px-0 !py-0 !items-stretch", // Remove wrapper padding and center alignment for textarea
        ],
      }),
    }),
    [slots, classNames],
  );

  const getTextareaProps = useCallback(
    () => ({
      ...restProps,
      ref: textareaRef,
      value: currentValue,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      disabled: isDisabled,
      rows: autoSize ? undefined : rows,
      className: slots.input({
        class: [
          classNames?.input,
          className,
          allowResize && !autoSize ? "resize-y" : "resize-none",
          "min-h-[60px]",
          "px-3 py-2", // Add padding to textarea element itself
        ],
      }),
    }),
    [
      restProps,
      currentValue,
      handleChange,
      handleFocus,
      handleBlur,
      isDisabled,
      autoSize,
      rows,
      allowResize,
      slots,
      classNames,
      className,
    ],
  );

  const getClearButtonProps = useCallback(
    () => ({
      onClick: handleClear,
      className: slots.clearButton({
        class: [classNames?.clearButton, "absolute top-3 right-3"],
      }),
    }),
    [handleClear, slots, classNames],
  );

  return {
    showClearIcon,
    slots,
    classNames,
    getBaseProps,
    getInputWrapperProps,
    getTextareaProps,
    getClearButtonProps,
  };
};

export type UseTextareaReturn = ReturnType<typeof useTextarea>;
