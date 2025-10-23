import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Switch wrapper **Tailwind Variants** component
 */
const switchComponent = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type SwitchVariantProps = VariantProps<typeof switchComponent>;

export {switchComponent};
