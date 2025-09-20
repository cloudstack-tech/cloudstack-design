import React from "react";
import { BadgeProps } from "./type";

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Badge.displayName = "Badge";
