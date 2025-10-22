import type {AlertVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {alert} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, ReactNode} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Custom icon to display
   */
  icon?: ReactNode;
  /**
   * Alert type (determines default icon)
   */
  type?: "success" | "error" | "warning" | "info" | "question";
  /**
   * Custom class names for different parts
   */
  classNames?: {
    icon?: string;
    content?: string;
  };
}

export type UseAlertProps = Props & AlertVariantProps;

export function useAlert(originalProps: UseAlertProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, alert.variantKeys);

  const {ref, as, className, icon, type, classNames, children, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
    () =>
      alert({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  return {Component, styles, domRef, icon, type, classNames, children, ...otherProps};
}

export type UseAlertReturn = ReturnType<typeof useAlert>;
