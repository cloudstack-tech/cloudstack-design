import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Divider wrapper **Tailwind Variants** component
 *
 * const classNames = divider({...})
 *
 * @example
 * <div className={classNames()}>
 *   Divider content
 * </div>
 */
const divider = tv({
  base: ["shrink-0"],
  variants: {
    /**
     * The orientation of the divider
     * @default "horizontal"
     */
    orientation: {
      horizontal: "w-full h-px",
      vertical: "h-full w-px",
    },
    /**
     * The color of the divider
     * @default "default"
     */
    color: {
      default: "bg-border-default",
      primary: "bg-primary",
      secondary: "bg-secondary",
      success: "bg-success",
      warning: "bg-warning",
      danger: "bg-danger",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    color: "default",
  },
});

export type DividerVariantProps = VariantProps<typeof divider>;

export {divider};
