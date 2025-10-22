import type {StackVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {stack} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, CSSProperties, ReactNode, Children, isValidElement} from "react";

/**
 * Stack spacing size type
 */
export type StackSize = "small" | "medium" | "large" | number;

/**
 * Stack spacing size mapping (multiplied by 4 to get pixel value)
 */
const stackSizeMap: Record<string, number> = {
  small: 2, // 8px
  medium: 4, // 16px
  large: 6, // 24px
};

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Stack spacing size
   * @default "medium"
   */
  spacing?: StackSize;
  /**
   * Divider element to be inserted between stack items
   */
  divider?: ReactNode;
}

export type UseStackProps = Props & StackVariantProps;

export function useStack(originalProps: UseStackProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, stack.variantKeys);

  const {ref, as, className, children, spacing = "medium", divider, style, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const direction = (variantProps as any).direction || "vertical";

  // Calculate spacing size
  const getSpacingSize = (spacingValue: StackSize): number => {
    if (typeof spacingValue === "number") {
      return spacingValue;
    }

    return stackSizeMap[spacingValue] || stackSizeMap.medium;
  };

  const spacingSize = useMemo(() => getSpacingSize(spacing), [spacing]);

  // Filter valid children
  const childrenArray = useMemo(
    () =>
      Children.toArray(children).filter(
        (child) => isValidElement(child) || typeof child === "string" || typeof child === "number",
      ),
    [children],
  );

  // Insert divider between children if divider is provided
  const processedChildren = useMemo(() => {
    if (!divider || childrenArray.length === 0) {
      return childrenArray;
    }

    const result: ReactNode[] = [];

    childrenArray.forEach((child, index) => {
      result.push(child);
      if (index < childrenArray.length - 1) {
        result.push(divider);
      }
    });

    return result;
  }, [childrenArray, divider]);

  const styles = useMemo(
    () =>
      stack({
        ...variantProps,
        direction,
        className,
      }),
    [objectToDeps(variantProps), direction, className],
  );

  // Build inline styles for spacing
  const stackStyle: CSSProperties = useMemo(
    () => ({
      gap: `${spacingSize * 4}px`,
      ...style,
    }),
    [spacingSize, style],
  );

  // Return null if no children
  if (childrenArray.length === 0) {
    return {
      Component,
      styles,
      domRef,
      children: null,
      style: stackStyle,
      ...otherProps,
    };
  }

  return {
    Component,
    styles,
    domRef,
    children: processedChildren,
    style: stackStyle,
    ...otherProps,
  };
}

export type UseStackReturn = ReturnType<typeof useStack>;
