import type {VariantProps} from "tailwind-variants";

import {tv} from "../../utils/tv";

/**
 * TimePicker wrapper **Tailwind Variants** component
 */
const timePicker = tv({
  base: [],
  variants: {},
  defaultVariants: {},
});

export type TimePickerVariantProps = VariantProps<typeof timePicker>;

export {timePicker};
