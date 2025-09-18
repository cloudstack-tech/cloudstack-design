import React from "react";
import Base, { BaseTypographyProps } from "./base";

export type TextProps = Omit<BaseTypographyProps, "as">;

const Text: React.ForwardRefRenderFunction<HTMLSpanElement, TextProps> = (
  props,
  ref
) => {
  const { ...rest } = props;
  return <Base {...rest} as={"span"} ref={ref} />;
};

export default React.forwardRef(Text);
