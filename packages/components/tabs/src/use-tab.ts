import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {HTMLCloudStackDesignProps, type PropGetter} from "@cloudstack-design/system";
import {dataAttr} from "@cloudstack-design/shared-utils";
import {useCallback, ReactNode, ElementType} from "react";

interface Props extends Omit<HTMLCloudStackDesignProps<"button">, "onClick"> {
  /**
   * Ref to the tab element
   */
  ref?: ReactRef<HTMLButtonElement | null>;
  /**
   * Additional element type to render as
   */
  as?: ElementType;
  /**
   * The content of the tab
   */
  children?: ReactNode;
  /**
   * The unique key for this tab
   */
  tabKey: string | number;
  /**
   * Whether this tab is active
   */
  isActive?: boolean;
  /**
   * Whether this tab is disabled
   */
  isDisabled?: boolean;
  /**
   * Click handler
   */
  onClick?: (key: string | number) => void;
  /**
   * Icon to display before the content
   */
  icon?: ReactNode;
  /**
   * Additional className
   */
  className?: string;
}

export type UseTabProps = Props;

export const useTab = (props: UseTabProps) => {
  const {
    ref,
    as: Component = "button",
    children,
    tabKey,
    isActive = false,
    isDisabled = false,
    onClick,
    icon,
    className,
    ...restProps
  } = props;

  const domRef = useDOMRef(ref);

  const handleClick = useCallback(() => {
    if (isDisabled) return;
    onClick?.(tabKey);
  }, [isDisabled, onClick, tabKey]);

  const getTabProps: PropGetter = useCallback(
    (props = {}) => {
      return {
        ...props,
        "data-active": dataAttr(isActive),
        "data-disabled": dataAttr(isDisabled),
        "data-key": tabKey,
        className: className,
        onClick: handleClick,
        disabled: isDisabled,
      };
    },
    [isActive, isDisabled, tabKey, className, handleClick],
  );

  return {
    Component,
    domRef,
    children,
    icon,
    isActive,
    isDisabled,
    getTabProps,
  };
};

export type UseTabReturn = ReturnType<typeof useTab>;
