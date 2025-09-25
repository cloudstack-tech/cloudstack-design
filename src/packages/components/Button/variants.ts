import { cn } from "@/packages/utilities";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  [
    "outline-none whitespace-nowrap inline-flex cursor-pointer items-center justify-center gap-1 text-xs font-medium transition-all duration-150 select-none",
    "disabled:shadow-none disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-border",
  ],
  {
    variants: {
      size: {
        sm: "min-h-6 px-3 data-[icon-only=true]:min-h-6 data-[icon-only=true]:min-w-6 data-[icon-only=true]:p-0 data-[icon-only=true]:aspect-square",
        base: "min-h-8 px-4 data-[icon-only=true]:min-h-8 data-[icon-only=true]:min-w-8 data-[icon-only=true]:p-0 data-[icon-only=true]:aspect-square",
        lg: "min-h-9 px-4.5 data-[icon-only=true]:min-h-10 data-[icon-only=true]:min-w-10 data-[icon-only=true]:p-0 data-[icon-only=true]:aspect-square",
        icon: "",
      },
      variant: {
        solid: "",
        text: "min-h-0 px-0",
        light: "",
        flat: "",
        outline: "",
      },
      color: {
        primary: "",
        default: "",
        danger: "",
      },
    },

    // 复合变体 - 处理 color 和 variant 的组合
    compoundVariants: [
      // Primary + Solid
      {
        variant: "solid",
        color: "primary",
        class: cn(
          "bg-btn-primary-solid-bg text-btn-primary-solid-text hover:bg-btn-primary-solid-hover-bg active:bg-btn-primary-solid-active-bg",
          "disabled:border",
          "data-[loading=true]:bg-btn-primary-solid-bg data-[loading=true]:text-btn-primary-solid-text",
          "hover:shadow-btn-primary-solid-hover active:shadow-btn-primary-solid-active"
        ),
      },
      // Primary + Outline
      {
        variant: "outline",
        color: "primary",
        class: cn(
          "border border-btn-border hover:border-btn-primary-solid-hover-bg active:border-btn-primary-solid-active-bg",
          "data-[loading=true]:bg-btn-primary-solid-text data-[loading=true]:border-disabled-border",
          "hover:shadow-btn-primary-solid-hover active:shadow-btn-primary-solid-active"
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
      // Primary + Text
      {
        variant: "text",
        color: "primary",
        class: cn(
          "text-btn-primary-solid-bg hover:text-btn-primary-solid-hover-bg active:text-btn-primary-solid-active-bg",
          "disabled:bg-transparent",
          "data-[loading=true]:text-btn-primary-solid-bg data-[loading=true]:bg-transparent"
        ),
      },
      // Default + Solid
      {
        variant: "solid",
        color: "default",
        class: cn(
          "bg-btn-default-solid-bg text-btn-default-solid-text active:bg-btn-default-solid-active-bg",
          "border border-btn-default-solid-border hover:border-btn-default-solid-hover-border active:border-btn-default-solid-active-border",
          "hover:shadow-btn-default-solid-hover active:shadow-btn-default-solid-active"
        ),
      },
      // Default + Outline
      {
        variant: "outline",
        color: "default",
        class: cn(
          "text-btn-default-solid-text hover:text-btn-default-solid-hover-text hover:bg-btn-default-solid-hover-bg active:text-btn-default-solid-active-text active:bg-btn-default-solid-active-bg",
          "border border-btn-border hover:border-btn-default-solid-hover-border active:border-btn-default-solid-active-border",
          "hover:shadow-btn-default-solid-hover active:shadow-btn-default-solid-active"
        ),
      },
      // Default + Flat
      {
        variant: "flat",
        color: "default",
        class: cn(
          "text-btn-default-solid-text bg-btn-default-flat-bg",
          "hover:text-btn-default-solid-hover-text hover:bg-btn-default-flat-hover-bg",
          "active:text-btn-default-solid-active-text active:bg-btn-default-flat-active-bg"
        ),
      },
      // Default + Light
      {
        variant: "light",
        color: "default",
        class: cn(
          "text-btn-default-solid-text hover:text-btn-default-solid-hover-text hover:bg-btn-default-solid-hover-bg active:text-btn-default-solid-active-text active:bg-btn-default-solid-active-bg"
        ),
      },
      // Default + Text
      {
        variant: "text",
        color: "default",
        class: cn(
          "text-btn-default-solid-text hover:text-btn-default-solid-hover-text/200 active:text-btn-default-solid-active-bg/200",
          "disabled:bg-transparent",
          "data-[loading=true]:text-btn-default-solid-bg data-[loading=true]:bg-transparent"
        ),
      },
      // Danger + Solid
      {
        variant: "solid",
        color: "danger",
        class: cn(
          "bg-btn-danger-solid-bg text-btn-danger-solid-text hover:bg-btn-danger-solid-hover-bg active:bg-btn-danger-solid-active-bg",
          "border border-btn-danger-solid-border hover:border-btn-danger-solid-hover-border active:border-btn-danger-solid-active-border",
          "hover:shadow-btn-danger-solid-hover active:shadow-btn-danger-solid-active",
          "data-[loading=true]:border-btn-danger-solid-active-border/50 data-[loading=true]:bg-btn-danger-solid-bg data-[loading=true]:text-btn-danger-solid-text/20"
        ),
      },
      // Danger + Outline
      {
        variant: "outline",
        color: "danger",
        class: cn(
          "text-btn-danger-solid-text hover:text-btn-danger-solid-hover-text hover:bg-btn-danger-solid-hover-bg active:text-btn-danger-solid-active-text active:bg-btn-danger-solid-active-bg",
          "border hover:border-btn-danger-solid-hover-border active:border-btn-danger-solid-active-border",
          "hover:shadow-btn-danger-solid-hover active:shadow-btn-danger-solid-active",
          "data-[loading=true]:border-btn-danger-solid-active-border/50 data-[loading=true]:bg-btn-danger-solid-bg data-[loading=true]:text-btn-danger-solid-text/20"
        ),
      },
      // Danger + Flat
      {
        variant: "flat",
        color: "danger",
        class: cn(
          "text-btn-danger-solid-text bg-btn-danger-solid-hover-bg active:text-btn-danger-solid-active-text active:bg-btn-danger-solid-active-bg",
          "data-[loading=true]:border-btn-danger-solid-active-border/50 data-[loading=true]:bg-btn-danger-solid-bg data-[loading=true]:text-btn-danger-solid-text/20"
        ),
      },
      // Danger + Light
      {
        variant: "light",
        color: "danger",
        class: cn(
          "text-btn-danger-solid-text hover:text-btn-danger-solid-hover-text hover:bg-btn-danger-solid-hover-bg active:text-btn-danger-solid-active-text active:bg-btn-danger-solid-active-bg",
          "data-[loading=true]:border-btn-danger-solid-active-border/50 data-[loading=true]:bg-btn-danger-solid-bg data-[loading=true]:text-btn-danger-solid-text/20"
        ),
      },
      // Danger + Text
      {
        variant: "text",
        color: "danger",
        class: cn(
          "text-btn-danger-solid-text hover:text-error active:text-error",
          "disabled:bg-transparent",
          "data-[loading=true]:text-btn-danger-solid-active-bg data-[loading=true]:bg-transparent"
        ),
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
