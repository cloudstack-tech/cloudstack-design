import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Skeleton wrapper **Tailwind Variants** component
 */
const skeleton = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type SkeletonVariantProps = VariantProps<typeof skeleton>;

export {skeleton};
