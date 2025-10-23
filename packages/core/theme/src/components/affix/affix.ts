import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Affix wrapper **Tailwind Variants** component
 *
 * @example
 * const styles = affix({...})
 *
 * <div className={styles.base()}>
 *   <div className={styles.placeholder()} />
 *   <div className={styles.content()}>Content</div>
 * </div>
 */
const affix = tv({
  slots: {
    base: "affix-wrapper",
    content: ["affix-content", "transition-all", "duration-200"],
    placeholder: ["affix-placeholder", "invisible"],
  },
  variants: {
    affixed: {
      true: {
        content: "fixed z-50",
        placeholder: "block",
      },
      false: {
        content: "relative",
        placeholder: "hidden",
      },
    },
    position: {
      top: {
        content: "",
      },
      bottom: {
        content: "",
      },
    },
    variant: {
      default: {
        content: "",
      },
      shadow: {
        content: "",
      },
      bordered: {
        content: "",
      },
      elevated: {
        content: "",
      },
    },
  },
  compoundVariants: [
    // Default variant when affixed
    {
      variant: "default",
      affixed: true,
      class: {
        content: "bg-white/95 backdrop-blur-sm",
      },
    },
    // Shadow variant when affixed
    {
      variant: "shadow",
      affixed: true,
      class: {
        content: "bg-white shadow-lg",
      },
    },
    // Bordered variant when affixed
    {
      variant: "bordered",
      affixed: true,
      class: {
        content: "bg-white border border-gray-200",
      },
    },
    // Elevated variant when affixed
    {
      variant: "elevated",
      affixed: true,
      class: {
        content: "bg-white shadow-xl",
      },
    },
  ],
  defaultVariants: {
    variant: "default",
    position: "top",
    affixed: false,
  },
});

export type AffixVariantProps = VariantProps<typeof affix>;
export type AffixSlots = keyof ReturnType<typeof affix>;

export {affix};
