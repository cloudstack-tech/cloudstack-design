import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Typography wrapper **Tailwind Variants** component
 *
 * const classNames = typography({...})
 *
 * @example
 * <div
 *  className={classNames())}
 * >
 *   Typography
 * </div>
 */
const typography = tv({
  base: ["text-foreground"],
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      default: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      warning: "text-warning",
      danger: "text-danger",
    },
    italic: {
      true: "italic",
    },
    underline: {
      true: "underline",
    },
    strikethrough: {
      true: "line-through",
    },
    ellipsis: {
      true: "truncate",
      line: "[display:-webkit-box] [-webkit-box-orient:vertical] overflow-hidden",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    color: "default",
  },
});

export type TypographyVariantProps = VariantProps<typeof typography>;

export {typography};
