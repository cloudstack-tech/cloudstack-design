import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Slider wrapper **Tailwind Variants** component
 */
const slider = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type SliderVariantProps = VariantProps<typeof slider>;

export {slider};
