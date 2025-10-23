import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Timeline wrapper **Tailwind Variants** component
 */
const timeline = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type TimelineVariantProps = VariantProps<typeof timeline>;

export {timeline};
