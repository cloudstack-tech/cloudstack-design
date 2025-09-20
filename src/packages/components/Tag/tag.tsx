import React from "react";
import { TagProps } from "./type";

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Tag.displayName = "Tag";
