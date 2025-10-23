import type { BreadcrumbVariantProps } from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import { breadcrumb } from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseBreadcrumbProps = Props & BreadcrumbVariantProps;

export function useBreadcrumb(originalProps: UseBreadcrumbProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, breadcrumb.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
  () =>
    breadcrumb({
      ...variantProps,
      className,
    }),
  [objectToDeps(variantProps), className],
);

  return {Component, styles, domRef, ...otherProps};
}

export type UseBreadcrumbReturn = ReturnType<typeof useBreadcrumb>;