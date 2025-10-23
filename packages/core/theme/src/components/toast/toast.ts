import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Toast wrapper **Tailwind Variants** component
 */
const toast = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type ToastVariantProps = VariantProps<typeof toast>;

export {toast};
