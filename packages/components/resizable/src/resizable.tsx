import {forwardRef} from "@cloudstack-design/system";

import { UseResizableProps, useResizable } from "./use-resizable";

export interface ResizableProps extends UseResizableProps {}

const Resizable = forwardRef<"div", ResizableProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useResizable({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Resizable.displayName = "CloudStackDesign.Resizable";

export default Resizable;