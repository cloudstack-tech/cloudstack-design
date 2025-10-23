import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Steps wrapper **Tailwind Variants** component
 */
const steps = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type StepsVariantProps = VariantProps<typeof steps>;

export {steps};
