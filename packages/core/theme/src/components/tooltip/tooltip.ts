import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Tooltip wrapper **Tailwind Variants** component
 */
const tooltip = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type TooltipVariantProps = VariantProps<typeof tooltip>;

export {tooltip};
