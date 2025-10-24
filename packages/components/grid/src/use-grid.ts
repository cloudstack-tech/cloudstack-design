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
   * Can be a single value or [rowGap, colGap] for different gaps
   * @default 0
   */
  gap?: number | [number, number];
  /**
   * Column gap between grid items (in pixels, will be multiplied by 4)
   * Has higher priority than gap
   * @default undefined
   */
  gapX?: number;
  /**
   * Row gap between grid items (in pixels, will be multiplied by 4)
   * Has higher priority than gap
   * @default undefined
   */
  gapY?: number;
}

export type UseGridProps = Props & GridVariantProps;

export function useGrid(originalProps: UseGridProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, grid.variantKeys);

  const {ref, as, className, children, gap = 0, gapX, gapY, style, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  // Get cols from originalProps for CSS variable (used by Grid.Item push/pull)
  const cols = originalProps.cols || 12;

  const styles = useMemo(
    () =>
      grid({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  // Build inline styles for gap
  // Priority: gapX/gapY > gap array > gap number
  const gridStyle: CSSProperties = useMemo(() => {
    const computedStyle: CSSProperties = {};

    // Add CSS variable for grid columns (used by Grid.Item push/pull)
    (computedStyle as any)["--grid-cols"] = cols;

    // First, handle the base gap prop
    if (gap !== 0) {
      if (Array.isArray(gap)) {
        // gap is [rowGap, colGap]
        const [rowGap, colGap] = gap;

        computedStyle.rowGap = rowGap * 4;
        computedStyle.columnGap = colGap * 4;
      } else {
        // gap is a single number
        computedStyle.gap = gap * 4;
      }
    }

    // Then, override with gapX and gapY if provided (higher priority)
    if (gapX !== undefined) {
      computedStyle.columnGap = gapX * 4;
      // Remove general gap if we're setting specific gaps
      if (computedStyle.gap !== undefined) {
        delete computedStyle.gap;
        // Ensure rowGap is set if it wasn't already
        if (computedStyle.rowGap === undefined) {
          computedStyle.rowGap = Array.isArray(gap) ? gap[0] * 4 : gap * 4;
        }
      }
    }

    if (gapY !== undefined) {
      computedStyle.rowGap = gapY * 4;
      // Remove general gap if we're setting specific gaps
      if (computedStyle.gap !== undefined) {
        delete computedStyle.gap;
        // Ensure columnGap is set if it wasn't already
        if (computedStyle.columnGap === undefined) {
          computedStyle.columnGap = Array.isArray(gap) ? gap[1] * 4 : gap * 4;
        }
      }
    }

    return {
      ...computedStyle,
      ...style,
    };
  }, [gap, gapX, gapY, cols, style]);

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
