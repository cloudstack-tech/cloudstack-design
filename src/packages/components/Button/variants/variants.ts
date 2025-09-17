import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      solid: "",
      default: "",
      text: "",
      flat: "",
      outline: "",
    },
    color: {
      primary: "",
      default: "",
      danger: "",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
      icon: "",
    },
  },

  defaultVariants: {
    variant: "solid",
    size: "default",
    color: "primary",
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
