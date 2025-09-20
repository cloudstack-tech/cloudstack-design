import React from "react";
import { ToastProps } from "./type";

export const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (props, ref) => {
    const { children, ...rest } = props;
    return (
      <div ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Toast.displayName = "Toast";
