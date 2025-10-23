import {forwardRef} from "@cloudstack-design/system";

import { UseTimelineProps, useTimeline } from "./use-timeline";

export interface TimelineProps extends UseTimelineProps {}

const Timeline = forwardRef<"div", TimelineProps>((props, ref) => {
  const {Component, domRef, children, styles, ...otherProps} =  useTimeline({...props, ref});

  return (
    <Component ref={domRef} className={styles} {...otherProps}>
      {children}
    </Component>
  );
});

Timeline.displayName = "CloudStackDesign.Timeline";

export default Timeline;