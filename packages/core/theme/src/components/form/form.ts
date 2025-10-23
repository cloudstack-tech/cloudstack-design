import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Form wrapper **Tailwind Variants** component
 */
const form = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type FormVariantProps = VariantProps<typeof form>;

export {form};
