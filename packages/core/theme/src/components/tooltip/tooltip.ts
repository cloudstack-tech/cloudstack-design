import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Tooltip wrapper **Tailwind Variants** component
 */
const tooltip = tv({
  slots: {
    base: "group relative inline-flex",
    content: [
      "z-50",
      "px-2.5",
      "py-1.5",
      "text-sm",
      "rounded-md",
      "shadow-md",
      "max-w-xs",
      "break-words",
      "opacity-0",
      "invisible",
      "transition-opacity",
      "duration-200",
      "data-[show=true]:opacity-100",
      "data-[show=true]:visible",
    ],
    arrow: "absolute w-2 h-2 rotate-45",
  },
  variants: {
    color: {
      default: {
        content: "bg-gray-900 text-white dark:bg-gray-700",
        arrow: "bg-gray-900 dark:bg-gray-700",
      },
      primary: {
        content: "bg-blue-600 text-white",
        arrow: "bg-blue-600",
      },
      success: {
        content: "bg-green-600 text-white",
        arrow: "bg-green-600",
      },
      warning: {
        content: "bg-yellow-600 text-white",
        arrow: "bg-yellow-600",
      },
      danger: {
        content: "bg-red-600 text-white",
        arrow: "bg-red-600",
      },
    },
    size: {
      sm: {
        content: "text-xs px-2 py-1",
      },
      md: {
        content: "text-sm px-2.5 py-1.5",
      },
      lg: {
        content: "text-base px-3 py-2",
      },
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});

export type TooltipVariantProps = VariantProps<typeof tooltip>;

export {tooltip};
