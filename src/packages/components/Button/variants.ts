import { cn } from "@/packages/utils";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "outline-none whitespace-nowrap inline-flex cursor-pointer items-center justify-center gap-1 text-xs font-medium transition-all duration-150 select-none",
    "disabled:shadow-none disabled:border disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border",
    "[&[data-icon-only=false]]:(min-h-8 px-4)",
    "[&[data-icon-only=true]]:(min-h-8 min-w-8 p-0 aspect-square)",
  ],
  {
    variants: {
      variant: {
        solid: "",
        text: "",
        light: "",
        flat: "",
        outline: "",
      },
      color: {
        primary: "",
        default: "",
        danger: "",
      },
      size: {
        sm: "",
        base: "min-h-8 px-4 text-xs",
        lg: "",
        icon: "",
      },
    },

    // 复合变体 - 处理 color 和 variant 的组合
    compoundVariants: [
      // Primary + Solid
      {
        variant: "solid",
        color: "primary",
        class: cn(
          "bg-btn-primary-solid-bg text-btn-primary-solid-text hover:bg-btn-primary-solid-hover-bg active:bg-btn-primary-solid-active-bg hover:shadow-btn-primary-solid-hover"
        ),
      },
      // Primary + Outline
      {
        variant: "outline",
        color: "primary",
        class: cn(
          "border border-btn-border hover:border-btn-primary-solid-hover-bg active:border-btn-primary-solid-active-bg"
        ),
      },
      // Primary + Text
      {
        variant: "text",
        color: "primary",
        class: cn(
          "text-btn-primary-solid-bg hover:text-btn-primary-solid-hover-bg active:text-btn-primary-solid-active-bg"
        ),
      },
      // Primary + Light
      {
        variant: "light",
        color: "primary",
        class: cn(
          "text-btn-primary-solid-bg hover:bg-btn-primary-solid-hover-bg/10 active:text-btn-primary-solid-active-bg"
        ),
      },
      // Primary + Flat
      {
        variant: "flat",
        color: "primary",
        class: cn(
          "text-btn-primary-solid-bg bg-btn-primary-solid-hover-bg/10 active:text-btn-primary-solid-active-bg active:bg-btn-primary-solid-active-bg/20"
        ),
      },
      // Default + Solid
      {
        variant: "solid",
        color: "default",
        class: "",
      },
      // Default + Outline
      {
        variant: "outline",
        color: "default",
        class: "",
      },
      // Default + Text
      {
        variant: "text",
        color: "default",
        class: "",
      },
      // Default + Flat
      {
        variant: "flat",
        color: "default",
        class: "",
      },

      // Danger + Solid
      {
        variant: "solid",
        color: "danger",
        class: "",
      },
      // Danger + Outline
      {
        variant: "outline",
        color: "danger",
        class: "",
      },
      // Danger + Text
      {
        variant: "text",
        color: "danger",
        class: "",
      },
      // Danger + Flat
      {
        variant: "flat",
        color: "danger",
        class: "",
      },
    ],

    defaultVariants: {
      variant: "solid",
      size: "base",
      color: "primary",
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
