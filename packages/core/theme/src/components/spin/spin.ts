import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Spin wrapper **Tailwind Variants** component
 */
const spin = tv({
  slots: {
    base: "inline-flex flex-col items-center justify-center gap-2",
    spinner: "animate-spin",
    label: "text-sm text-foreground",
  },
  variants: {
    size: {
      sm: {
        spinner: "h-4 w-4",
        label: "text-xs",
      },
      md: {
        spinner: "h-6 w-6",
        label: "text-sm",
      },
      lg: {
        spinner: "h-8 w-8",
        label: "text-base",
      },
    },
    color: {
      default: {
        spinner: "text-default-500",
      },
      primary: {
        spinner: "text-primary",
      },
      secondary: {
        spinner: "text-secondary",
      },
      success: {
        spinner: "text-success",
      },
      warning: {
        spinner: "text-warning",
      },
      danger: {
        spinner: "text-danger",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export type SpinVariantProps = VariantProps<typeof spin>;

export {spin};
