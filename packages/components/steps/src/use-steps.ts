import type { StepsVariantProps } from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import { steps } from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseStepsProps = Props & StepsVariantProps;

export function useSteps(originalProps: UseStepsProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, steps.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
  () =>
    steps({
      ...variantProps,
      className,
    }),
  [objectToDeps(variantProps), className],
);

  return {Component, styles, domRef, ...otherProps};
}

export type UseStepsReturn = ReturnType<typeof useSteps>;