import {forwardRef} from "@cloudstack-design/system";

import { UseProgressProps, useProgress } from "./use-progress";

export interface ProgressProps extends UseProgressProps {}

const Progress = forwardRef<"div", ProgressProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useProgress({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Progress.displayName = "CloudStackDesign.Progress";

export default Progress;