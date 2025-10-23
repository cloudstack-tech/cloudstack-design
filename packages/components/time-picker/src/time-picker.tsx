import {forwardRef} from "@cloudstack-design/system";

import { UseTimePickerProps, useTimePicker } from "./use-time-picker";

export interface TimePickerProps extends UseTimePickerProps {}

const TimePicker = forwardRef<"div", TimePickerProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useTimePicker({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

TimePicker.displayName = "CloudStackDesign.TimePicker";

export default TimePicker;