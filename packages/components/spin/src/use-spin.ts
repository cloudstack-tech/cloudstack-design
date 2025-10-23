import {useMemo} from "react";
import type {SpinVariantProps} from "@cloudstack-design/theme";
import {spin} from "@cloudstack-design/theme";
import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The label text to show below the spinner
   */
  label?: React.ReactNode;
}

export type UseSpinProps = Props & SpinVariantProps;

export function useSpin(originalProps: UseSpinProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, spin.variantKeys);

  const {ref, as, className, label, children, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const slots = useMemo(
    () =>
      spin({
        ...variantProps,
      }),
    [objectToDeps(variantProps)],
  );

  const baseStyles = useMemo(() => slots.base({className}), [slots.base, className]);

  const spinnerStyles = useMemo(() => slots.spinner(), [slots.spinner]);

  const labelStyles = useMemo(() => slots.label(), [slots.label]);

  return {
    Component,
    domRef,
    label,
    children,
    slots,
    baseStyles,
    spinnerStyles,
    labelStyles,
    ...otherProps,
  };
}

export type UseSpinReturn = ReturnType<typeof useSpin>;
