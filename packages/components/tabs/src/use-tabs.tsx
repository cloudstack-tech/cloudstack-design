import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import type {HTMLCloudStackDesignProps} from "@cloudstack-design/system";
import {tabs, TabsVariantProps, TabsSlots} from "@cloudstack-design/theme";
import {useMemo, useState, useCallback, useRef, useEffect, ReactNode, ElementType} from "react";

interface Props {
  /**
   * Ref to the tabs element
   */
  ref?: ReactRef<HTMLDivElement | null>;
  /**
   * Additional element type to render as
   */
  as?: ElementType;
  /**
   * The children of the tabs (should be Tab components)
   */
  children?: ReactNode;
  /**
   * The default active key
   */
  defaultActiveKey?: string | number;
  /**
   * The controlled active key
   */
  value?: string | number;
  /**
   * Callback when tab changes
   */
  onTabChange?: (key: string | number) => void;
  /**
   * Class names for different slots
   */
  classNames?: Partial<Record<TabsSlots, string>>;
  /**
   * Additional className for the base element
   */
  className?: string;
}

export type UseTabsProps = Props & TabsVariantProps;

export type UseTabsReturn = {
  Component: ElementType;
  domRef: React.RefObject<HTMLDivElement | null>;
  children: ReactNode;
  slots: ReturnType<typeof tabs>;
  classNames?: Partial<Record<TabsSlots, string>>;
  activeKey: string | number | undefined;
  tabListRef: React.RefObject<HTMLDivElement | null>;
  animation: "slide" | "flash" | "none" | undefined;
  handleTabChange: (key: string | number) => void;
  getBaseProps: () => {className: string};
  getTabListProps: () => {ref: React.RefObject<HTMLDivElement | null>; className: string};
  getSliderProps: () => {className: string; style: {left: number; width: number}};
};

export const useTabs = (props: UseTabsProps): UseTabsReturn => {
  const {
    ref,
    as: Component = "div",
    children,
    className,
    classNames,
    defaultActiveKey,
    value,
    onTabChange,
    variant,
    color,
    animation,
    size,
    fullWidth,
    isDisabled,
  } = props;

  const domRef = useDOMRef(ref);
  const tabListRef = useRef<HTMLDivElement>(null);

  // Internal state for uncontrolled mode
  const [internalActiveKey, setInternalActiveKey] = useState<string | number | undefined>(
    defaultActiveKey,
  );

  // Determine the current active key (controlled or uncontrolled)
  const activeKey = value !== undefined ? value : internalActiveKey;

  // Slider position state
  const [sliderStyle, setSliderStyle] = useState<{left: number; width: number}>({
    left: 0,
    width: 0,
  });

  const slots = useMemo(
    () =>
      tabs({
        variant,
        color,
        animation,
        size,
        fullWidth,
        isDisabled,
      }),
    [variant, color, animation, size, fullWidth, isDisabled],
  );

  // Update slider position
  const updateSliderPosition = useCallback(() => {
    if (animation !== "slide" || !tabListRef.current) return;

    const activeElement = tabListRef.current.querySelector('[data-active="true"]');
    if (activeElement) {
      const {offsetLeft, offsetWidth} = activeElement as HTMLElement;
      setSliderStyle({
        left: offsetLeft,
        width: offsetWidth,
      });
    }
  }, [animation]);

  // Update slider position when active key changes
  useEffect(() => {
    updateSliderPosition();
  }, [activeKey, updateSliderPosition]);

  // Handle window resize
  useEffect(() => {
    window.addEventListener("resize", updateSliderPosition);
    return () => window.removeEventListener("resize", updateSliderPosition);
  }, [updateSliderPosition]);

  const handleTabChange = useCallback(
    (key: string | number) => {
      // Update internal state if uncontrolled
      if (value === undefined) {
        setInternalActiveKey(key);
      }
      // Call onChange callback
      onTabChange?.(key);
    },
    [value, onTabChange],
  );

  const getBaseProps = useCallback(
    () => ({
      className: slots.base({class: classNames?.base}),
    }),
    [slots, classNames],
  );

  const getTabListProps = useCallback(
    () => ({
      ref: tabListRef,
      className: slots.tabList({class: classNames?.tabList}),
    }),
    [slots, classNames],
  );

  const getSliderProps = useCallback(
    () => ({
      className: slots.slider({class: classNames?.slider}),
      style: sliderStyle,
    }),
    [slots, classNames, sliderStyle],
  );

  return {
    Component,
    domRef,
    children,
    slots,
    classNames,
    activeKey,
    tabListRef,
    animation,
    handleTabChange,
    getBaseProps,
    getTabListProps,
    getSliderProps,
  };
};
