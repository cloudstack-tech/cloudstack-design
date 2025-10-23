import {forwardRef} from "@cloudstack-design/system";
import {Check, Minus} from "lucide-react";

import {UseCheckboxProps, useCheckbox} from "./use-checkbox";

export interface CheckboxProps extends UseCheckboxProps {}

/**
 * Checkbox component for selecting one or multiple values
 *
 * @example
 * ```tsx
 * <Checkbox isSelected>Selected</Checkbox>
 * <Checkbox isIndeterminate>Indeterminate</Checkbox>
 * <Checkbox isDisabled>Disabled</Checkbox>
 * ```
 */
const Checkbox = forwardRef<"input", CheckboxProps>((props, ref) => {
  const {
    Component,
    label,
    children,
    isIndeterminate,
    getBaseProps,
    getWrapperProps,
    getInputProps,
    getLabelProps,
    getIconProps,
  } = useCheckbox({...props, ref});

  const content = label || children;

  return (
    <Component {...getBaseProps()}>
      <input {...getInputProps()} />
      <span {...getWrapperProps()}>
        {isIndeterminate ? <Minus {...getIconProps()} /> : <Check {...getIconProps()} />}
      </span>
      {content && <span {...getLabelProps()}>{content}</span>}
    </Component>
  );
});

Checkbox.displayName = "CloudStackDesign.Checkbox";

export default Checkbox;
