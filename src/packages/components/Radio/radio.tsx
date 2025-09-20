import React from "react";
import { RadioProps } from "./type";

export const Radio = React.forwardRef<HTMLDivElement, RadioProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Radio.displayName = "Radio";
