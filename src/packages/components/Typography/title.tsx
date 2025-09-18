import React from "react";
import Base, { BaseTypographyProps } from "./base";

export type TitleProps = Omit<BaseTypographyProps, "as" | "size"> & {
  /**
   * 标题等级
   */
  level?: 1 | 2 | 3 | 4 | 5;
};

const Title: React.ForwardRefRenderFunction<HTMLElement, TitleProps> = (
  props,
  ref
) => {
  const { level = 1, weight = "bold", ...rest } = props;

  const fontSize = {
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-lg",
    h5: "text-base",
  } as const;

  return (
    <Base
      {...rest}
      as={`h${level}`}
      ref={ref}
      weight={weight}
      className={fontSize[`h${level}`]}
    />
  );
};

export default React.forwardRef(Title);
