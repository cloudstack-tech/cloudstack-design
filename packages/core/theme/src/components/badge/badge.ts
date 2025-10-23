import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Badge wrapper **Tailwind Variants** component
 */
const badge = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type BadgeVariantProps = VariantProps<typeof badge>;

export {badge};
