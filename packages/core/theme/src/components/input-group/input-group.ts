import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * InputGroup wrapper **Tailwind Variants** component
 */
const inputGroup = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type InputGroupVariantProps = VariantProps<typeof inputGroup>;

export {inputGroup};
