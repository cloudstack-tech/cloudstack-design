import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Typography wrapper **Tailwind Variants** component
 *
 * @example
 * ```tsx
 * const styles = typography({...})
 *
 * <div className={styles}>
 *   Typography Text
 * </div>
 * ```
 */
const typography = tv({
  base: ["transition-colors"],
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-sm",
      md: "text-lg",
      lg: "text-xl",
      xl: "text-2xl",
      "2xl": "text-3xl",
      "3xl": "text-4xl",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    color: {
      default: "text-gray-900",
      primary: "text-primary",
      secondary: "text-purple-600",
      success: "text-green-600",
      warning: "text-yellow-600",
      danger: "text-red-600",
      muted: "text-gray-500",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    italic: {
      true: "italic",
      false: "",
    },
    underline: {
      true: "underline",
      false: "",
    },
    strikethrough: {
      true: "line-through",
      false: "",
    },
    truncate: {
      true: "truncate overflow-hidden whitespace-nowrap text-ellipsis",
      false: "",
    },
    transform: {
      uppercase: "uppercase",
      lowercase: "lowercase",
      capitalize: "capitalize",
      normal: "normal-case",
    },
    lineHeight: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
  },
  defaultVariants: {
    size: "base",
    weight: "normal",
    color: "default",
    italic: false,
    underline: false,
    strikethrough: false,
    truncate: false,
  },
  compoundVariants: [
    // disabled + color combinations
    {
      color: "default",
      class: "hover:text-gray-700",
    },
    {
      color: "primary",
      class: "hover:text-blue-700",
    },
  ],
});

export type TypographyVariantProps = VariantProps<typeof typography>;

export {typography};
