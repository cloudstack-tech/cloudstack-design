import type {CheckboxVariantProps, CheckboxSlots} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants, PropGetter} from "@cloudstack-design/system";
import {checkbox} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps, dataAttr} from "@cloudstack-design/shared-utils";
import {useMemo, useCallback, useState, ReactNode, ChangeEvent} from "react";

interface Props extends Omit<HTMLCloudStackDesignProps<"input">, "onChange"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLInputElement | null>;
  /**
   * The label of the checkbox
   */
  label?: ReactNode;
  /**
   * Whether the checkbox is selected
   */
  isSelected?: boolean;
  /**
   * Default selected state (uncontrolled)
   */
  defaultSelected?: boolean;
  /**
   * Whether the checkbox is in indeterminate state
   */
  isIndeterminate?: boolean;
  /**
   * Whether the checkbox is disabled
   */
  isDisabled?: boolean;
  /**
   * Whether the checkbox is required
   */
  isRequired?: boolean;
  /**
   * Whether the checkbox is invalid
   */
  isInvalid?: boolean;
  /**
   * Whether the checkbox is read-only
   */
  isReadOnly?: boolean;
  /**
   * The value of the checkbox
   */
  value?: string;
  /**
   * The name of the checkbox
   */
  name?: string;
  /**
   * Handler called when the checkbox state changes
   */
  onChange?: (isSelected: boolean) => void;
  /**
   * Custom class names for different slots
   */
  classNames?: Partial<Record<CheckboxSlots, string>>;
  /**
   * Whether to disable animations
   */
  disableAnimation?: boolean;
}

export type UseCheckboxProps = Props & CheckboxVariantProps;

export function useCheckbox(props: UseCheckboxProps) {
  // const [props, variantProps] = mapPropsVariants(originalProps, checkbox.variantKeys);

  const {
    ref,
    as,
    className,
    classNames,
    label,
    value,
    name,
    isSelected: isSelectedProp,
    defaultSelected = false,
    isIndeterminate = false,
    isDisabled = false,
    isRequired = false,
    isInvalid = false,
    isReadOnly = false,
    disableAnimation = false,
    onChange,
    children,
    ...otherProps
  } = props;

  const Component = as || "label";
  const inputRef = useDOMRef(ref);

  // Handle controlled/uncontrolled state
  const [isSelectedState, setIsSelectedState] = useState(defaultSelected);
  const isControlled = isSelectedProp !== undefined;
  const isSelected = isControlled ? isSelectedProp : isSelectedState;

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (isReadOnly || isDisabled) {
        event.preventDefault();
        return;
      }

      const newValue = isIndeterminate ? true : event.target.checked;

      if (!isControlled) {
        setIsSelectedState(newValue);
      }

      onChange?.(newValue);
    },
    [isControlled, isDisabled, isReadOnly, isIndeterminate, onChange],
  );

  const slots = useMemo(
    () =>
      checkbox({
        ...props,
      }),
    [objectToDeps(props)],
  );

  const getBaseProps: PropGetter = useCallback(
    (props = {}) => ({
      className: slots.base({class: [classNames?.base, className]}),
      "data-selected": dataAttr(isSelected),
      "data-indeterminate": dataAttr(isIndeterminate),
      "data-disabled": dataAttr(isDisabled),
      "data-readonly": dataAttr(isReadOnly),
      "data-invalid": dataAttr(isInvalid),
      ...props,
    }),
    [
      slots,
      classNames?.base,
      className,
      isSelected,
      isIndeterminate,
      isDisabled,
      isReadOnly,
      isInvalid,
    ],
  );

  const getWrapperProps: PropGetter = useCallback(
    (props = {}) => ({
      className: slots.wrapper({class: classNames?.wrapper}),
      "aria-hidden": true,
      ...props,
    }),
    [slots, classNames?.wrapper],
  );

  const getInputProps: PropGetter = useCallback(
    (props = {}) => ({
      ref: inputRef,
      type: "checkbox",
      name,
      value,
      checked: isSelected,
      disabled: isDisabled,
      readOnly: isReadOnly,
      required: isRequired,
      "aria-invalid": dataAttr(isInvalid),
      "aria-checked": isIndeterminate ? "mixed" : isSelected,
      onChange: handleChange,
      className: slots.input({class: classNames?.input}),
      ...otherProps,
      ...props,
    }),
    [
      inputRef,
      name,
      value,
      isSelected,
      isDisabled,
      isReadOnly,
      isRequired,
      isInvalid,
      isIndeterminate,
      handleChange,
      slots,
      classNames?.input,
      otherProps,
    ],
  );

  const getLabelProps: PropGetter = useCallback(
    (props = {}) => ({
      className: slots.label({class: classNames?.label}),
      ...props,
    }),
    [slots, classNames?.label],
  );

  const getIconProps: PropGetter = useCallback(
    (props = {}) => ({
      className: slots.icon({class: classNames?.icon}),
      "aria-hidden": true,
      ...props,
    }),
    [slots, classNames?.icon],
  );

  return {
    Component,
    slots,
    inputRef,
    label,
    children,
    isSelected,
    isIndeterminate,
    isDisabled,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getIconProps,
  };
}

export type UseCheckboxReturn = ReturnType<typeof useCheckbox>;
