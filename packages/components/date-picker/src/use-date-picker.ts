import type {DatePickerVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {datePicker as DatePickerComponent} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseDatePickerProps = Props & DatePickerVariantProps;

export function useDatePicker(originalProps: UseDatePickerProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, DatePickerComponent.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
    () =>
      DatePickerComponent({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  return {Component, styles, domRef, ...otherProps};
}

export type UseDatePickerReturn = ReturnType<typeof useDatePicker>;
