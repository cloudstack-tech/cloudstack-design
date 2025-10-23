import {forwardRef} from "@cloudstack-design/system";

import { UseStepsProps, useSteps } from "./use-steps";

export interface StepsProps extends UseStepsProps {}

const Steps = forwardRef<"div", StepsProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useSteps({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Steps.displayName = "CloudStackDesign.Steps";

export default Steps;