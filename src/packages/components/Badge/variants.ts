import { cva, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  [
    "inline-flex items-center justify-center font-normal transition-all duration-150 select-none",
    "leading-none rounded-full whitespace-nowrap",
  ],
  {
    variants: {
      size: {
        sm: "min-h-1.5 min-w-1.5 px-1.5 py-0.5 text-xxs data-[dot=true]:h-0.25 data-[dot=true]:w-0.25 data-[dot=true]:p-0",
        base: "min-h-2 min-w-2 px-1.5 py-0.5 text-xs data-[dot=true]:h-0.5 data-[dot=true]:w-0.5 data-[dot=true]:p-0",
        lg: "min-h-2.5 min-w-2.5 px-2 py-1 text-xs data-[dot=true]:h-1 data-[dot=true]:w-1 data-[dot=true]:p-0",
      },
      variant: {
        solid: "",
        outline: "border bg-transparent",
        light: "",
        flat: "",
      },
      color: {
        default: "",
        primary: "",
        success: "",
        warning: "",
        danger: "",
      },
    },

    // 复合变体 - 处理 color 和 variant 的组合
    compoundVariants: [
      // Default variants
      {
        variant: "solid",
        color: "default",
        class:
          "bg-[rgb(247,249,250)] text-[var(--color-default)] border border-[var(--color-border-default)]",
      },
      {
        variant: "outline",
        color: "default",
        class:
          "border-[var(--color-border-default)] text-[var(--color-default)] bg-white",
      },
      {
        variant: "light",
        color: "default",
        class: "bg-[var(--color-border-default)] text-[var(--color-default)]",
      },
      {
        variant: "flat",
        color: "default",
        class:
          "bg-white text-[var(--color-default)] border border-[var(--color-border-default)]",
      },

      // Primary variants
      {
        variant: "solid",
        color: "primary",
        class: "bg-[var(--color-primary)] text-white",
      },
      {
        variant: "outline",
        color: "primary",
        class:
          "border-[var(--color-primary)] text-[var(--color-primary)] bg-white",
      },
      {
        variant: "light",
        color: "primary",
        class: "bg-[var(--color-primary)]/10 text-[var(--color-primary)]",
      },
      {
        variant: "flat",
        color: "primary",
        class:
          "bg-[var(--color-primary)]/5 text-[var(--color-primary)] border border-[var(--color-primary)]/20",
      },

      // Success variants
      {
        variant: "solid",
        color: "success",
        class: "bg-[var(--color-success)] text-white",
      },
      {
        variant: "outline",
        color: "success",
        class:
          "border-[var(--color-success)] text-[var(--color-success)] bg-white",
      },
      {
        variant: "light",
        color: "success",
        class: "bg-[var(--color-success)]/10 text-[var(--color-success)]",
      },
      {
        variant: "flat",
        color: "success",
        class:
          "bg-[var(--color-success)]/5 text-[var(--color-success)] border border-[var(--color-success)]/20",
      },

      // Warning variants
      {
        variant: "solid",
        color: "warning",
        class: "bg-[var(--color-warning)] text-white",
      },
      {
        variant: "outline",
        color: "warning",
        class:
          "border-[var(--color-warning)] text-[var(--color-warning)] bg-white",
      },
      {
        variant: "light",
        color: "warning",
        class: "bg-[var(--color-warning)]/10 text-[var(--color-warning)]",
      },
      {
        variant: "flat",
        color: "warning",
        class:
          "bg-[var(--color-warning)]/5 text-[var(--color-warning)] border border-[var(--color-warning)]/20",
      },

      // Danger variants
      {
        variant: "solid",
        color: "danger",
        class: "bg-[var(--color-danger)] text-white",
      },
      {
        variant: "outline",
        color: "danger",
        class:
          "border-[var(--color-danger)] text-[var(--color-danger)] bg-white",
      },
      {
        variant: "light",
        color: "danger",
        class: "bg-[var(--color-danger)]/10 text-[var(--color-danger)]",
      },
      {
        variant: "flat",
        color: "danger",
        class:
          "bg-[var(--color-danger)]/5 text-[var(--color-danger)] border border-[var(--color-danger)]/20",
      },
    ],

    defaultVariants: {
      variant: "solid",
      size: "base",
      color: "default",
    },
  }
);

export type BadgeVariants = VariantProps<typeof badgeVariants>;
