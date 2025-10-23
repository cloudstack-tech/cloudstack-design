import {forwardRef} from "@cloudstack-design/system";

import { UseToastProps, useToast } from "./use-toast";

export interface ToastProps extends UseToastProps {}

const Toast = forwardRef<"div", ToastProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useToast({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Toast.displayName = "CloudStackDesign.Toast";

export default Toast;