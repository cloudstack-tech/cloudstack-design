import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Checkbox wrapper **Tailwind Variants** component
 */
const checkbox = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type CheckboxVariantProps = VariantProps<typeof checkbox>;

export {checkbox};
