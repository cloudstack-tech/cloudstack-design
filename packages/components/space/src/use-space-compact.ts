import {HTMLCloudStackDesignProps} from "@cloudstack-design/system";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {useMemo, CSSProperties, ReactNode, Children, isValidElement, cloneElement} from "react";

import {SpaceSize} from "./use-space";

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
   * The direction of the compact layout
   * @default "horizontal"
   */
  direction?: "horizontal" | "vertical";
  /**
   * Whether the compact should be block level
   * @default false
   */
  block?: boolean;
  /**
   * Space size, only effective when non-compact mode
   * @default 0
   */
  size?: SpaceSize;
}

export type UseSpaceCompactProps = Props;

export function useSpaceCompact(originalProps: UseSpaceCompactProps) {
  const {
    ref,
    as,
    className,
    children,
    direction = "horizontal",
    block = false,
    size = 0,
    style,
    ...otherProps
  } = originalProps;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  // Calculate gap size
  const getGapSize = (sizeValue: SpaceSize): number => {
    if (typeof sizeValue === "number") {
      return sizeValue;
    }

    return spaceSizeMap[sizeValue] || 0;
  };

  const gap = useMemo(() => getGapSize(size), [size]);

  // Filter valid children
  const childrenArray = useMemo(
    () => Children.toArray(children).filter((child) => isValidElement(child)),
    [children],
  );

  // Build compact class name
  const compactClassName = useMemo(() => {
    const classes = [
      block ? "flex" : "inline-flex",
      direction === "vertical" ? "flex-col" : "flex-row",
      className,
    ];

    return classes.filter(Boolean).join(" ");
  }, [block, direction, className]);

  // Build compact style
  const compactStyle: CSSProperties = useMemo(
    () => ({
      ...(gap > 0 && {gap: gap * 4}),
      ...style,
    }),
    [gap, style],
  );

  // Process children to add compact styles
  const processedChildren = useMemo(() => {
    return childrenArray.map((child, index) => {
      if (!isValidElement(child)) {
        return child;
      }

      // Add compact styles to each child
      const compactChildClasses: string[] = [];

      if (gap === 0) {
        if (direction === "horizontal") {
          // Horizontal compact styles
          if (index === 0) {
            compactChildClasses.push("rounded-r-none");
          } else if (index === childrenArray.length - 1) {
            compactChildClasses.push("rounded-l-none");
          } else {
            compactChildClasses.push("rounded-none");
          }
          // Avoid duplicate borders
          if (index !== 0) {
            compactChildClasses.push("-ml-px");
          }
        } else {
          // Vertical compact styles
          if (index === 0) {
            compactChildClasses.push("rounded-b-none");
          } else if (index === childrenArray.length - 1) {
            compactChildClasses.push("rounded-t-none");
          } else {
            compactChildClasses.push("rounded-none");
          }
          // Avoid duplicate borders
          if (index !== 0) {
            compactChildClasses.push("-mt-px");
          }
        }
      }

      const childClassName = [(child.props as any)?.className, ...compactChildClasses]
        .filter(Boolean)
        .join(" ");

      return cloneElement(child as any, {
        key: index,
        className: childClassName,
      });
    });
  }, [childrenArray, direction, gap]);

  return {
    Component,
    domRef,
    children: processedChildren,
    className: compactClassName,
    style: Object.keys(compactStyle).length > 0 ? compactStyle : undefined,
    ...otherProps,
  };
}

export type UseSpaceCompactReturn = ReturnType<typeof useSpaceCompact>;
