import type {DividerVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {divider} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, CSSProperties} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The thickness of the divider in pixels
   * @default 1
   */
  thickness?: number;
}

export type UseDividerProps = Props & DividerVariantProps;

export function useDivider(originalProps: UseDividerProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, divider.variantKeys);

  const {ref, as, className, thickness = 1, children, style, ...otherProps} = props;
  const variants = variantProps as DividerVariantProps;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
    () =>
      divider({
        ...variants,
        className,
      }),
    [objectToDeps(variants), className],
  );

  // Build inline styles for thickness
  const dividerStyle: CSSProperties = useMemo(() => {
    const baseStyle: CSSProperties = {...style};

    if (thickness !== 1) {
      if (variants.orientation === "vertical") {
        baseStyle.width = thickness;
      } else {
        baseStyle.height = thickness;
      }
    }

    return baseStyle;
  }, [thickness, objectToDeps(variants), style]);

  return {
    Component,
    styles,
    domRef,
    children,
    style: Object.keys(dividerStyle).length > 0 ? dividerStyle : undefined,
    ...otherProps,
  };
}

export type UseDividerReturn = ReturnType<typeof useDivider>;
