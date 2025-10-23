import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Affix wrapper **Tailwind Variants** component
 */
const affix = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type AffixVariantProps = VariantProps<typeof affix>;

export {affix};
