import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Anchor wrapper **Tailwind Variants** component
 */
const anchor = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type AnchorVariantProps = VariantProps<typeof anchor>;

export {anchor};
