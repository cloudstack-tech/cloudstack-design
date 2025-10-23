import type {CardVariantProps, CardSlots} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants, PropGetter} from "@cloudstack-design/system";
import {card} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, useState, useCallback, ReactNode} from "react";

interface Props extends Omit<HTMLCloudStackDesignProps<"div">, "title"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Card title
   */
  title?: ReactNode;
  /**
   * Whether the card is collapsible
   */
  collapsible?: boolean;
  /**
   * Default collapsed state
   */
  defaultCollapsed?: boolean;
  /**
   * Callback when collapse state changes
   */
  onCollapseChange?: (collapsed: boolean) => void;
  /**
   * Custom class names for different slots
   */
  classNames?: Partial<Record<CardSlots, string>>;
}

export type UseCardProps = Props & CardVariantProps;

export function useCard(originalProps: UseCardProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, card.variantKeys);

  const {
    ref,
    as,
    className,
    title,
    collapsible = false,
    defaultCollapsed = false,
    onCollapseChange,
    classNames,
    children,
    ...otherProps
  } = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const shouldShowHeader = !!title || collapsible;
  const hasTitle = !!title;

  const handleCollapse = useCallback(() => {
    if (!collapsible) return;
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onCollapseChange?.(newCollapsed);
  }, [collapsible, isCollapsed, onCollapseChange]);

  const slots = useMemo(
    () =>
      card({
        ...variantProps,
        isCollapsible: collapsible,
        isCollapsed,
        hasTitle,
      }),
    [objectToDeps(variantProps), collapsible, isCollapsed, hasTitle],
  );

  const getBaseProps: PropGetter = useCallback(
    (props = {}) => ({
      ref: domRef,
      className: slots.base({class: [classNames?.base, className]}),
      ...otherProps,
      ...props,
    }),
    [domRef, slots, classNames?.base, className, otherProps],
  );

  const getHeaderProps: PropGetter = useCallback(
    (props = {}) => ({
      className: slots.header({class: classNames?.header}),
      onClick: handleCollapse,
      ...props,
    }),
    [slots, classNames?.header, handleCollapse],
  );

  const getTitleProps: PropGetter = useCallback(
    (props = {}) => ({
      className: slots.title({class: classNames?.title}),
      ...props,
    }),
    [slots, classNames?.title],
  );

  const getBodyProps: PropGetter = useCallback(
    (props = {}) => ({
      className: slots.body({class: classNames?.body}),
      ...props,
    }),
    [slots, classNames?.body],
  );

  const getCollapseIconProps: PropGetter = useCallback(
    (props = {}) => ({
      className: slots.collapseIcon({class: classNames?.collapseIcon}),
      ...props,
    }),
    [slots, classNames?.collapseIcon],
  );

  return {
    Component,
    slots,
    domRef,
    title,
    collapsible,
    isCollapsed,
    shouldShowHeader,
    children,
    getBaseProps,
    getHeaderProps,
    getTitleProps,
    getBodyProps,
    getCollapseIconProps,
  };
}

export type UseCardReturn = ReturnType<typeof useCard>;
