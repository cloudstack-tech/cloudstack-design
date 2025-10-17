import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import type {HTMLCloudStackDesignProps, PropGetter} from "@cloudstack-design/system";
import {button, ButtonVariantProps} from "@cloudstack-design/theme";
import {dataAttr} from "@cloudstack-design/shared-utils";
import {useCallback, useMemo} from "react";

interface Props extends HTMLCloudStackDesignProps<"button"> {
  /**
   * Ref to the button element
   */
  ref?: ReactRef<HTMLButtonElement | null>;
}

export type UseButtonProps = Props & Omit<ButtonVariantProps, "isInGroup">;

export const useButton = (props: UseButtonProps) => {
  const {
    ref,
    as: Component = "button",
    children,
    className,
    size,
    color,
    variant,
    ...restProps
  } = props;

  const domRef = useDOMRef(ref);

  const isDisabled = restProps.disabled;

  const styles = useMemo(
    () =>
      button({
        size,
        color,
        variant,
        className,
      }),
    [size, color, variant, className],
  );

  const getButtonProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        "data-disabled": dataAttr(isDisabled),
        className: styles,
      };
    },
    [styles, isDisabled],
  );

  return {
    Component,
    domRef,
    styles,
    getButtonProps,
  };
};

export type UseButtonReturn = ReturnType<typeof useButton>;
