import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {input, InputVariantProps, InputSlots} from "@cloudstack-design/theme";
import {
  useState,
  useCallback,
  useMemo,
  useImperativeHandle,
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
} from "react";

export interface InputRef {
  focus: () => void;
  blur: () => void;
  select: () => void;
  input: HTMLInputElement | null;
}

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  /**
   * Ref to the input element
   */
  ref?: ReactRef<InputRef | null>;
  /**
   * Whether to show clear button
   */
  allowClear?: boolean;
  /**
   * Prefix content
   */
  prefix?: ReactNode | null;
  /**
   * Suffix content
   */
  suffix?: ReactNode;
  /**
   * Whether the input is invalid
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

export type UseInputProps = Props & InputVariantProps;

export const useInput = (props: UseInputProps) => {
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
    prefix,
    suffix,
    classNames,
    wrapperClassName,
    variant,
    size,
    fullWidth,
    className,
    ...restProps
  } = props;

  const inputRef = useDOMRef<HTMLInputElement>(null);
  const [internalValue, setInternalValue] = useState<
    string | number | readonly string[] | undefined
  >(defaultValue || "");
  const [isFocused, setIsFocused] = useState(false);

  // Determine if controlled
  const isControlled = controlledValue !== undefined;
  const currentValue = isControlled ? controlledValue : internalValue;

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    blur: () => inputRef.current?.blur(),
    select: () => inputRef.current?.select(),
    input: inputRef.current,
  }));

  const slots = useMemo(
    () =>
      input({
        variant,
        size,
        isDisabled,
        isInvalid,
        isFocused,
        fullWidth,
      }),
    [variant, size, isDisabled, isInvalid, isFocused, fullWidth],
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      if (!isControlled) {
        setInternalValue(newValue);
      }

      onChange?.(e);
    },
    [isControlled, onChange],
  );

  const handleFocus = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e: FocusEvent<HTMLInputElement>) => {
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
    } as ChangeEvent<HTMLInputElement>;

    if (!isControlled) {
      setInternalValue("");
    }

    onChange?.(event);
    inputRef.current?.focus();
  }, [isDisabled, isControlled, onChange]);

  const hasValue = useCallback(() => {
    return currentValue != null && String(currentValue).length > 0;
  }, [currentValue]);

  const showClearIcon = allowClear && hasValue() && !isDisabled && isFocused;

  const getBaseProps = useCallback(
    () => ({
      className: slots.base({class: [classNames?.base, wrapperClassName]}),
    }),
    [slots, classNames, wrapperClassName],
  );

  const getInputWrapperProps = useCallback(
    () => ({
      className: slots.inputWrapper({class: classNames?.inputWrapper}),
    }),
    [slots, classNames],
  );

  const getInputProps = useCallback(
    () => ({
      ...restProps,
      ref: inputRef,
      value: currentValue,
      onChange: handleChange,
      onFocus: handleFocus,
      onBlur: handleBlur,
      disabled: isDisabled,
      className: slots.input({class: [classNames?.input, className]}),
    }),
    [
      restProps,
      currentValue,
      handleChange,
      handleFocus,
      handleBlur,
      isDisabled,
      slots,
      classNames,
      className,
    ],
  );

  const getClearButtonProps = useCallback(
    () => ({
      onClick: handleClear,
      className: slots.clearButton({class: classNames?.clearButton}),
    }),
    [handleClear, slots, classNames],
  );

  const getPrefixProps = useCallback(
    () => ({
      className: slots.prefix({class: classNames?.prefix}),
    }),
    [slots, classNames],
  );

  const getSuffixProps = useCallback(
    () => ({
      className: slots.suffix({class: classNames?.suffix}),
    }),
    [slots, classNames],
  );

  return {
    prefix,
    suffix,
    showClearIcon,
    slots,
    classNames,
    getBaseProps,
    getInputWrapperProps,
    getInputProps,
    getClearButtonProps,
    getPrefixProps,
    getSuffixProps,
  };
};

export type UseInputReturn = ReturnType<typeof useInput>;
