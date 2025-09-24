import { cva, type VariantProps } from "class-variance-authority";

export const accordionVariants = cva(["w-full"], {
  variants: {
    size: {
      sm: "",
      base: "",
      lg: "",
    },
    variant: {
      default: "",
      filled: "",
      bordered: "",
      shadow: "",
    },
    bordered: {
      true: "border border-border-default rounded-lg overflow-hidden",
      false: "",
    },
  },
  compoundVariants: [
    // Default variant
    {
      variant: "default",
      class: "bg-transparent",
    },
    // Filled variant
    {
      variant: "filled",
      class: "bg-gray-50",
    },
    // Bordered variant
    {
      variant: "bordered",
      bordered: true,
      class: "border border-border-default",
    },
    // Shadow variant
    {
      variant: "shadow",
      class: "shadow-lg bg-white rounded-lg overflow-hidden",
    },
  ],
  defaultVariants: {
    size: "base",
    variant: "default",
    bordered: false,
  },
});

export const accordionItemVariants = cva(
  ["group", "transition-all duration-200"],
  {
    variants: {
      size: {
        sm: "",
        base: "",
        lg: "",
      },
      variant: {
        default: "",
        filled: "",
        bordered: "",
        shadow: "",
      },
      bordered: {
        true: "border-b border-border-default last:border-b-0",
        false: "",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    compoundVariants: [
      // Default variant - 清洁无边框
      {
        variant: "default",
        class: "",
      },
      // Filled variant - 填充背景，无边框
      {
        variant: "filled",
        class: "bg-white",
      },
      // Bordered variant - 容器有边框，项目间用分隔线
      {
        variant: "bordered",
        class: "border-b border-border-default last:border-b-0",
      },
      // Shadow variant - 阴影样式，项目间用分隔线
      {
        variant: "shadow",
        class: "border-b border-gray-100 last:border-b-0",
      },
    ],
    defaultVariants: {
      size: "base",
      variant: "default",
      bordered: false,
      disabled: false,
    },
  }
);

export const accordionHeaderVariants = cva(
  [
    "flex items-center justify-between w-full text-left",
    "transition-all duration-200",
    "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2",
    "hover:bg-gray-50/50",
    "group-data-[disabled=true]:cursor-not-allowed group-data-[disabled=true]:hover:bg-transparent",
  ],
  {
    variants: {
      size: {
        sm: "px-3 py-2 text-sm",
        base: "px-4 py-3 text-base",
        lg: "px-5 py-4 text-lg",
      },
      isActive: {
        true: "bg-primary/5",
        false: "",
      },
    },
    defaultVariants: {
      size: "base",
      isActive: false,
    },
  }
);

export const accordionContentVariants = cva(
  ["overflow-hidden transition-all duration-200 ease-in-out"],
  {
    variants: {
      size: {
        sm: "px-3 pb-2",
        base: "px-4 pb-3",
        lg: "px-5 pb-4",
      },
      isActive: {
        true: "opacity-100",
        false: "opacity-0 max-h-0",
      },
    },
    defaultVariants: {
      size: "base",
      isActive: false,
    },
  }
);

export const accordionIconVariants = cva(
  [
    "transition-transform duration-200 text-gray-500",
    "group-data-[disabled=true]:opacity-50",
  ],
  {
    variants: {
      position: {
        start: "mr-2",
        end: "ml-2",
      },
      isActive: {
        true: "rotate-180",
        false: "rotate-0",
      },
    },
    defaultVariants: {
      position: "end",
      isActive: false,
    },
  }
);

export type AccordionVariants = VariantProps<typeof accordionVariants>;
export type AccordionItemVariants = VariantProps<typeof accordionItemVariants>;
export type AccordionHeaderVariants = VariantProps<
  typeof accordionHeaderVariants
>;
export type AccordionContentVariants = VariantProps<
  typeof accordionContentVariants
>;
export type AccordionIconVariants = VariantProps<typeof accordionIconVariants>;
