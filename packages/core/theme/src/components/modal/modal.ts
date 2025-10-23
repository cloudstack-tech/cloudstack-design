import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * Modal wrapper **Tailwind Variants** component
 */
const modal = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type ModalVariantProps = VariantProps<typeof modal>;

export {modal};
