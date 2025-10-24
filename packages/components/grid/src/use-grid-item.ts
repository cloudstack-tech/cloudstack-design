import type {GridItemVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {gridItem} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, CSSProperties} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Number of columns to offset
   * Positive values: offset from the left
   * Negative values: offset from the right (experimental)
   * @default undefined
   */
  offset?: number;
  /**
   * Number of columns to push (move right)
   * Similar to offset but uses different CSS technique
   * @default undefined
   */
  push?: number;
  /**
   * Number of columns to pull (move left)
   * Moves the element to the left
   * @default undefined
   */
  pull?: number;
  /**
   * Order of the grid item
   * Items are laid out in ascending order by order value
   * Items with the same order value are laid out in source order
   * @default undefined
   */
  order?: number;
  /**
   * Column start position
   * Can be a number (1-13) or "auto"
   * Negative values count from the end
   * @default undefined
   */
  colStart?: number | "auto";
  /**
   * Column end position
   * Can be a number (1-13) or "auto"
   * Negative values count from the end
   * @default undefined
   */
  colEnd?: number | "auto";
  /**
   * Row start position
   * Can be a number (1-7) or "auto"
   * Negative values count from the end
   * @default undefined
   */
  rowStart?: number | "auto";
  /**
   * Row end position
   * Can be a number (1-7) or "auto"
   * Negative values count from the end
   * @default undefined
   */
  rowEnd?: number | "auto";
}

export type UseGridItemProps = Props & GridItemVariantProps;

export function useGridItem(originalProps: UseGridItemProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, gridItem.variantKeys);

  const {
    ref,
    as,
    className,
    children,
    offset,
    push,
    pull,
    order,
    colStart,
    colEnd,
    rowStart,
    rowEnd,
    style,
    ...otherProps
  } = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
    () =>
      gridItem({
        ...variantProps,
        className,
      }),
    [objectToDeps(variantProps), className],
  );

  // Build inline styles for offset and positioning
  const gridItemStyle: CSSProperties = useMemo(() => {
    const computedStyle: CSSProperties = {};

    // Handle offset (grid-column-start based positioning)
    if (offset !== undefined) {
      if (offset > 0) {
        // Positive offset: move right by skipping columns
        computedStyle.gridColumnStart = `${offset + 1}`;
      } else if (offset < 0) {
        // Negative offset: start from the right
        // Using negative grid line numbers to count from the end
        computedStyle.gridColumnStart = `${offset}`;
      }
    }

    // Handle push and pull (using relative positioning)
    // Priority: push/pull can work together with offset
    if (push !== undefined || pull !== undefined) {
      computedStyle.position = "relative";

      if (push !== undefined && push > 0) {
        // Push: move element to the right
        // Calculate percentage based on columns pushed
        computedStyle.left = `calc(${push} * (100% / var(--grid-cols, 12)))`;
      }

      if (pull !== undefined && pull > 0) {
        // Pull: move element to the left
        // Calculate percentage based on columns pulled
        computedStyle.right = `calc(${pull} * (100% / var(--grid-cols, 12)))`;
      }
    }

    // Handle explicit column positioning (overrides offset)
    if (colStart !== undefined) {
      computedStyle.gridColumnStart = colStart;
    }
    if (colEnd !== undefined) {
      computedStyle.gridColumnEnd = colEnd;
    }

    // Handle row positioning
    if (rowStart !== undefined) {
      computedStyle.gridRowStart = rowStart;
    }
    if (rowEnd !== undefined) {
      computedStyle.gridRowEnd = rowEnd;
    }

    // Handle order
    if (order !== undefined) {
      computedStyle.order = order;
    }

    return {
      ...computedStyle,
      ...style,
    };
  }, [offset, push, pull, order, colStart, colEnd, rowStart, rowEnd, style]);

  return {
    Component,
    styles,
    domRef,
    children,
    style: Object.keys(gridItemStyle).length > 0 ? gridItemStyle : undefined,
    ...otherProps,
  };
}

export type UseGridItemReturn = ReturnType<typeof useGridItem>;
