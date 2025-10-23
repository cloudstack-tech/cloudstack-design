import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Empty wrapper **Tailwind Variants** component
 */
const empty = tv({
  slots: {
    base: "flex flex-col items-center justify-center gap-2 p-8",
    icon: "text-default-400",
    description: "text-sm text-default-500",
  },
  variants: {
    size: {
      sm: {
        icon: "h-12 w-12",
        description: "text-xs",
      },
      md: {
        icon: "h-16 w-16",
        description: "text-sm",
      },
      lg: {
        icon: "h-20 w-20",
        description: "text-base",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export type EmptyVariantProps = VariantProps<typeof empty>;

export {empty};
