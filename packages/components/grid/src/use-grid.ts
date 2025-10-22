import type {GridVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {grid} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, CSSProperties} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Gap between grid items (in pixels, will be multiplied by 4)
   * Can be a single value or [row, col] for different gaps
   * @default 0
   */
  gap?: number | [number, number];
}

export type UseGridProps = Props & GridVariantProps;

export function useGrid(originalProps: UseGridProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, grid.variantKeys);

  const {ref, as, className, children, gap = 0, style, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
    () =>
      grid({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  // Build inline styles for gap
  const gridStyle: CSSProperties = useMemo(() => {
    const computedStyle: CSSProperties = {};

    if (gap !== 0) {
      if (Array.isArray(gap)) {
        const [rowGap, colGap] = gap;

        computedStyle.rowGap = rowGap * 4;
        computedStyle.columnGap = colGap * 4;
      } else {
        computedStyle.gap = gap * 4;
      }
    }

    return {
      ...computedStyle,
      ...style,
    };
  }, [gap, style]);

  return {
    Component,
    styles,
    domRef,
    children,
    style: Object.keys(gridStyle).length > 0 ? gridStyle : undefined,
    ...otherProps,
  };
}

export type UseGridReturn = ReturnType<typeof useGrid>;
