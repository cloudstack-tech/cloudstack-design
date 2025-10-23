import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Accordion wrapper **Tailwind Variants** component
 */
const accordion = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type AccordionVariantProps = VariantProps<typeof accordion>;

export {accordion};
