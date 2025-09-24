import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/packages/utilities";

export const alertVariants = cva(
  "alert text-default flex items-start gap-2 px-4 py-2 text-xs",
  {
    variants: {
      color: {
        primary: "",
        default: "",
        success: "",
        error: "",
        warning: "",
      },
      variant: {
        flat: "",
        outline: "",
      },
    },
    compoundVariants: [
      {
        color: "primary",
        variant: "flat",
        class: cn("text-primary-color bg-alert-primary-bg"),
      },
      {
        color: "primary",
        variant: "outline",
        class: cn("text-primary-color bg-transparent border border-btn-border"),
      },
      {
        color: "default",
        variant: "flat",
        class: cn("text-default-color bg-alert-default-bg"),
      },
      {
        color: "default",
        variant: "outline",
        class: cn("text-default-color bg-transparent border border-btn-border"),
      },
      {
        color: "success",
        variant: "flat",
        class: cn("text-success-color bg-alert-success-bg"),
      },

      {
        color: "success",
        variant: "outline",
        class: cn("text-success-color bg-transparent border border-btn-border"),
      },

      {
        color: "error",
        variant: "flat",
        class: cn("text-error-color bg-alert-error-bg"),
      },

      {
        color: "error",
        variant: "outline",
        class: cn("text-error-color bg-transparent border border-btn-border"),
      },

      {
        color: "warning",
        variant: "flat",
        class: cn("text-warning-color bg-alert-warning-bg"),
      },

      {
        color: "warning",
        variant: "outline",
        class: cn("text-warning-color bg-transparent border border-btn-border"),
      },
    ],
  }
);

export type AlertVariants = VariantProps<typeof alertVariants>;
