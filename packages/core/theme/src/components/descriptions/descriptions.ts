import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Descriptions wrapper **Tailwind Variants** component
 */
const descriptions = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type DescriptionsVariantProps = VariantProps<typeof descriptions>;

export {descriptions};
