import {useMemo} from "react";
import type {EmptyVariantProps} from "@cloudstack-design/theme";
import {empty} from "@cloudstack-design/theme";
import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * The description text to show below the icon
   */
  description?: React.ReactNode;
}

export type UseEmptyProps = Props & EmptyVariantProps;

export function useEmpty(originalProps: UseEmptyProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, empty.variantKeys);

  const {ref, as, className, description, children, ...otherProps} = props;

  const Component = as || "div";

  const domRef = useDOMRef(ref);

  const slots = useMemo(
    () =>
      empty({
        ...variantProps,
      }),
    [objectToDeps(variantProps)],
  );

  const baseStyles = useMemo(() => slots.base({className}), [slots.base, className]);

  const iconStyles = useMemo(() => slots.icon(), [slots.icon]);

  const descriptionStyles = useMemo(() => slots.description(), [slots.description]);

  return {
    Component,
    domRef,
    description,
    children,
    slots,
    baseStyles,
    iconStyles,
    descriptionStyles,
    ...otherProps,
  };
}

export type UseEmptyReturn = ReturnType<typeof useEmpty>;
