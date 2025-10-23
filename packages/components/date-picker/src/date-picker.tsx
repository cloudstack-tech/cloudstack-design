import {forwardRef} from "@cloudstack-design/system";

import {UseDatePickerProps, useDatePicker} from "./use-date-picker";

export interface DatePickerProps extends UseDatePickerProps {}

const DatePicker = forwardRef<"div", DatePickerProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} = useDatePicker({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

DatePicker.displayName = "CloudStackDesign.DatePicker";

export default DatePicker;
