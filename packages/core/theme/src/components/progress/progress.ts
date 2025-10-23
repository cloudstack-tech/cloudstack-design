import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Progress wrapper **Tailwind Variants** component
 */
const progress = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type ProgressVariantProps = VariantProps<typeof progress>;

export {progress};
