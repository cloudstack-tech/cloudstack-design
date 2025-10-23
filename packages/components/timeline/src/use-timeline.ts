import type { TimelineVariantProps } from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import { timeline } from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo} from "react";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
}

export type UseTimelineProps = Props & TimelineVariantProps;

export function useTimeline(originalProps: UseTimelineProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, timeline.variantKeys);

  const {ref, as, className, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const styles = useMemo(
  () =>
    timeline({
      ...variantProps,
      className,
    }),
  [objectToDeps(variantProps), className],
);

  return {Component, styles, domRef, ...otherProps};
}

export type UseTimelineReturn = ReturnType<typeof useTimeline>;