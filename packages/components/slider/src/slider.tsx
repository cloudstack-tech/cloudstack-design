import {forwardRef} from "@cloudstack-design/system";

import { UseSliderProps, useSlider } from "./use-slider";

export interface SliderProps extends UseSliderProps {}

const Slider = forwardRef<"div", SliderProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useSlider({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Slider.displayName = "CloudStackDesign.Slider";

export default Slider;