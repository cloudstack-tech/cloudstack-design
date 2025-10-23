import type {SwitchVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {switchComponent} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseSwitchProps = Props & SwitchVariantProps;

export function useSwitch(originalProps: UseSwitchProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, switchComponent.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
    () =>
      switchComponent({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  return {Component, styles, domRef, ...otherProps};
}

export type UseSwitchReturn = ReturnType<typeof useSwitch>;
