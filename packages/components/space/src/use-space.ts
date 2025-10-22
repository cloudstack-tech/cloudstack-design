import type {SpaceVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {space} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, CSSProperties, ReactNode, Children, isValidElement} from "react";

/**
 * Space size type
 */
export type SpaceSize = "small" | "middle" | "large" | number;

/**
 * Space size mapping (multiplied by 4 to get pixel value)
 */
const spaceSizeMap: Record<string, number> = {
  small: 2, // 8px
  middle: 4, // 16px
  large: 6, // 24px
};

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Space size, can be a preset string, number, or an array of [horizontal, vertical]
   * @default "small"
   */
  size?: SpaceSize | [SpaceSize, SpaceSize];
  /**
   * Separator element to be inserted between space items
   */
  split?: ReactNode;
}

export type UseSpaceProps = Props & SpaceVariantProps;

export function useSpace(originalProps: UseSpaceProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, space.variantKeys);

  const {ref, as, className, children, size = "small", split, style, ...otherProps} = props;

  const direction = (variantProps as any).direction || "horizontal";

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  // Calculate gap size
  const getGapSize = (sizeValue: SpaceSize): number => {
    if (typeof sizeValue === "number") {
      return sizeValue;
    }

    return spaceSizeMap[sizeValue] || spaceSizeMap.small;
  };

  // Process size (can be single value or [horizontal, vertical])
  const [horizontalGap, verticalGap] = useMemo(() => {
    if (Array.isArray(size)) {
      const [horizontal, vertical] = size;

      return [getGapSize(horizontal), getGapSize(vertical)];
    }

    const gap = getGapSize(size);

    return [gap, gap];
  }, [size]);

  // Filter valid children
  const childrenArray = useMemo(
    () =>
      Children.toArray(children).filter(
        (child) => isValidElement(child) || typeof child === "string" || typeof child === "number",
      ),
    [children],
  );

  // Insert separator between children if split is provided
  const processedChildren = useMemo(() => {
    if (!split || childrenArray.length === 0) {
      return childrenArray;
    }

    const result: ReactNode[] = [];

    childrenArray.forEach((child, index) => {
      result.push(child);
      if (index < childrenArray.length - 1) {
        result.push(split);
      }
    });

    return result;
  }, [childrenArray, split]);

  const styles = useMemo(
    () =>
      space({
        ...variantProps,
        direction,
        className,
      }),
    [objectToDeps(variantProps), direction, className],
  );

  // Build inline styles for gap
  const spaceStyle: CSSProperties = useMemo(
    () => ({
      gap: direction === "vertical" ? `${verticalGap * 4}px` : `${horizontalGap * 4}px`,
      ...style,
    }),
    [direction, horizontalGap, verticalGap, style],
  );

  return {
    Component,
    styles,
    domRef,
    children: processedChildren,
    style: spaceStyle,
    ...otherProps,
  };
}

export type UseSpaceReturn = ReturnType<typeof useSpace>;
