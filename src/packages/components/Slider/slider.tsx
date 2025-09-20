import React from "react";
import { SliderProps } from "./type";

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Slider.displayName = "Slider";
