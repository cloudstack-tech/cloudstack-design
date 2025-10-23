import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Label wrapper **Tailwind Variants** component
 */
const label = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type LabelVariantProps = VariantProps<typeof label>;

export {label};
