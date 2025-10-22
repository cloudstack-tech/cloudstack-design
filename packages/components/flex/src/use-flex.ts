import type {FlexVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {flex} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, CSSProperties} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Gap between flex items (in pixels, will be multiplied by 4)
   * @default 0
   */
  gap?: number;
  /**
   * CSS flex property for the flex container
   */
  flex?: CSSProperties["flex"];
}

export type UseFlexProps = Props & FlexVariantProps;

export function useFlex(originalProps: UseFlexProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, flex.variantKeys);

  const {ref, as, className, children, gap = 0, flex: flexProp, style, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
    () =>
      flex({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  // Build inline styles for gap and flex
  const flexStyle: CSSProperties = useMemo(
    () => ({
      ...(gap && {gap: gap * 4}),
      ...(flexProp && {flex: flexProp}),
      ...style,
    }),
    [gap, flexProp, style],
  );

  return {
    Component,
    styles,
    domRef,
    children,
    style: Object.keys(flexStyle).length > 0 ? flexStyle : undefined,
    ...otherProps,
  };
}

export type UseFlexReturn = ReturnType<typeof useFlex>;
