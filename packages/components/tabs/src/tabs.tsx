import {Children, cloneElement, isValidElement, ReactElement, forwardRef, ReactNode} from "react";

import {useTabs} from "./use-tabs";
import {TabProps} from "./tab";
import {TabsVariantProps, TabsSlots} from "@cloudstack-design/theme";

export interface TabsProps extends TabsVariantProps {
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

const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    slots,
    activeKey,
    animation,
    handleTabChange,
    getBaseProps,
    getTabListProps,
    getSliderProps,
  } = useTabs({...props, ref});

  // Process children to inject active state and click handlers
  const processedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      const tabChild = child as ReactElement<TabProps>;
      const childKey = tabChild.key;

      if (childKey !== null && childKey !== undefined) {
        const isActive = String(childKey) === String(activeKey);

        return cloneElement(tabChild, {
          ...tabChild.props,
          isActive,
          onClick: (key: string | number) => {
            handleTabChange(key);
            tabChild.props.onClick?.(key);
          },
          className: slots.tab({class: tabChild.props.className}),
        });
      }
    }
    return child;
  });

  return (
    <Component ref={domRef} {...getBaseProps()}>
      <div {...getTabListProps()}>
        {processedChildren}
        {animation === "slide" && <div {...getSliderProps()} />}
      </div>
    </Component>
  );
});

Tabs.displayName = "CloudStackDesign.Tabs";

export default Tabs;
