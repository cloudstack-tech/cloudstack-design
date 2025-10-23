import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Resizable wrapper **Tailwind Variants** component
 */
const resizable = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type ResizableVariantProps = VariantProps<typeof resizable>;

export {resizable};
