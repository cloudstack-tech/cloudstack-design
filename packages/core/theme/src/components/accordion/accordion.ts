import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Accordion wrapper **Tailwind Variants** component
 */
const accordion = tv({
  slots: {
    base: ["w-full"],
    item: ["group", "transition-all", "duration-200"],
    header: [
      "flex",
      "items-center",
      "justify-between",
      "w-full",
      "text-left",
      "transition-all",
      "duration-200",
      "focus:outline-none",
      "focus:ring-2",
      "focus:ring-primary/20",
      "focus:ring-offset-2",
      "hover:bg-gray-50/50",
      "group-data-[disabled=true]:cursor-not-allowed",
      "group-data-[disabled=true]:hover:bg-transparent",
    ],
    trigger: ["flex", "items-center", "flex-1", "min-w-0"],
    content: ["overflow-hidden", "transition-all", "duration-200", "ease-in-out"],
    indicator: [
      "transition-transform",
      "duration-200",
      "text-gray-500",
      "group-data-[disabled=true]:opacity-50",
    ],
  },
  variants: {
    variant: {
      default: {
        base: "bg-transparent",
        item: "",
        header: "",
      },
      filled: {
        base: "bg-gray-50",
        item: "bg-white",
        header: "",
      },
      bordered: {
        base: "border border-default rounded-lg overflow-hidden",
        item: "border-b border-default last:border-b-0",
        header: "",
      },
      shadow: {
        base: "shadow-lg bg-white rounded-lg overflow-hidden",
        item: "border-b border-gray-100 last:border-b-0",
        header: "",
      },
    },
    size: {
      sm: {
        header: "px-3 py-2 text-sm",
        content: "px-3 pb-2",
      },
      md: {
        header: "px-4 py-3 text-base",
        content: "px-4 pb-3",
      },
      lg: {
        header: "px-5 py-4 text-lg",
        content: "px-5 pb-4",
      },
    },
    isActive: {
      true: {
        header: "bg-primary/5",
        content: "opacity-100",
      },
      false: {
        header: "",
        content: "opacity-0 max-h-0",
      },
    },
    isDisabled: {
      true: {
        item: "opacity-50 cursor-not-allowed",
      },
    },
    indicatorPosition: {
      start: {
        indicator: "mr-2",
      },
      end: {
        indicator: "ml-2",
      },
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    isActive: false,
    isDisabled: false,
    indicatorPosition: "end",
  },
});

export type AccordionVariantProps = VariantProps<typeof accordion>;
export type AccordionSlots = keyof ReturnType<typeof accordion>;

export {accordion};
