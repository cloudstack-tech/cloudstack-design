import { cva, type VariantProps } from "class-variance-authority";

export const affixVariants = cva(["transition-all duration-200"], {
  variants: {
    variant: {
      default: "",
      shadow: "shadow-lg",
      bordered: "border border-border-default",
      elevated: "shadow-xl bg-white",
    },
    position: {
      top: "top-0",
      bottom: "bottom-0",
    },
    affixed: {
      true: "fixed z-50",
      false: "",
    },
  },
  compoundVariants: [
    // Default variant
    {
      variant: "default",
      affixed: true,
      class: "bg-white/95 backdrop-blur-sm",
    },
    // Shadow variant
    {
      variant: "shadow",
      affixed: true,
      class: "bg-white shadow-lg",
    },
    // Bordered variant
    {
      variant: "bordered",
      affixed: true,
      class: "bg-white border border-border-default",
    },
    // Elevated variant
    {
      variant: "elevated",
      affixed: true,
      class: "bg-white shadow-xl",
    },
  ],
  defaultVariants: {
    variant: "default",
    position: "top",
    affixed: false,
  },
});

export const affixPlaceholderVariants = cva(["invisible"], {
  variants: {
    active: {
      true: "block",
      false: "hidden",
    },
  },
  defaultVariants: {
    active: false,
  },
});

export type AffixVariants = VariantProps<typeof affixVariants>;
export type AffixPlaceholderVariants = VariantProps<
  typeof affixPlaceholderVariants
>;
