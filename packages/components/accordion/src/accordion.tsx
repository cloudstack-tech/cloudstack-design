import {forwardRef} from "@cloudstack-design/system";

import { UseAccordionProps, useAccordion } from "./use-accordion";

export interface AccordionProps extends UseAccordionProps {}

const Accordion = forwardRef<"div", AccordionProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useAccordion({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Accordion.displayName = "CloudStackDesign.Accordion";

export default Accordion;