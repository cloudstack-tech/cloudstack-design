import type {AccordionVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants} from "@cloudstack-design/system";
import {accordion} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, useState, useCallback} from "react";

export interface AccordionItemProps {
  /**
   * 面板的唯一标识符
   */
  key: string;
  /**
   * 面板标题
   */
  label: React.ReactNode;
  /**
   * 面板内容
   */
  children: React.ReactNode;
  /**
   * 是否禁用该面板
   */
  disabled?: boolean;
  /**
   * 额外的类名
   */
  className?: string;
  /**
   * 额外的样式
   */
  style?: React.CSSProperties;
  /**
   * 自定义展开图标
   */
  expandIcon?: React.ReactNode;
  /**
   * 是否显示箭头图标
   */
  showArrow?: boolean;
  /**
   * 额外的内容
   */
  extra?: React.ReactNode;
}

interface Props extends HTMLCloudStackDesignProps<"div"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * 手风琴面板数据
   */
  items?: AccordionItemProps[];
  /**
   * 当前激活的面板key（受控）
   */
  activeKey?: string | string[];
  /**
   * 默认激活的面板key（非受控）
   */
  defaultActiveKey?: string | string[];
  /**
   * 是否为手风琴模式（只能展开一个面板）
   */
  accordion?: boolean;
  /**
   * 面板切换回调
   */
  onChange?: (key: string | string[]) => void;
  /**
   * 展开图标位置
   */
  expandIconPosition?: "start" | "end";
  /**
   * 自定义展开图标
   */
  expandIcon?: (panelProps: {isActive: boolean; disabled?: boolean}) => React.ReactNode;
  /**
   * 可折叠方式
   */
  collapsible?: "header" | "icon" | "disabled";
}

export type UseAccordionProps = Props & Omit<AccordionVariantProps, "isActive" | "isDisabled">;

export function useAccordion(originalProps: UseAccordionProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, accordion.variantKeys);

  const {
    ref,
    as,
    className,
    items = [],
    activeKey: controlledActiveKey,
    defaultActiveKey,
    accordion: isAccordion = false,
    onChange,
    expandIconPosition = "end",
    expandIcon,
    collapsible = "header",
    ...otherProps
  } = props;

  const Component = as || "div";
  const domRef = useDOMRef(ref);

  // 内部状态管理
  const [internalActiveKey, setInternalActiveKey] = useState<string | string[]>(() => {
    if (controlledActiveKey !== undefined) {
      return controlledActiveKey;
    }
    if (defaultActiveKey !== undefined) {
      return defaultActiveKey;
    }
    return isAccordion ? "" : [];
  });

  const activeKey = controlledActiveKey !== undefined ? controlledActiveKey : internalActiveKey;

  // 处理面板切换
  const handleToggle = useCallback(
    (key: string) => {
      let newActiveKey: string | string[];

      if (isAccordion) {
        // 手风琴模式：只能展开一个
        newActiveKey = (activeKey as string) === key ? "" : key;
      } else {
        // 非手风琴模式：可以展开多个
        const currentKeys = Array.isArray(activeKey) ? activeKey : [activeKey].filter(Boolean);
        if (currentKeys.includes(key)) {
          newActiveKey = currentKeys.filter((k) => k !== key);
        } else {
          newActiveKey = [...currentKeys, key];
        }
      }

      if (controlledActiveKey === undefined) {
        setInternalActiveKey(newActiveKey);
      }

      onChange?.(newActiveKey);
    },
    [activeKey, isAccordion, controlledActiveKey, onChange],
  );

  // 检查面板是否激活
  const isItemActive = useCallback(
    (key: string): boolean => {
      if (isAccordion) {
        return activeKey === key;
      } else {
        const keys = Array.isArray(activeKey) ? activeKey : [activeKey].filter(Boolean);
        return keys.includes(key);
      }
    },
    [activeKey, isAccordion],
  );

  const slots = useMemo(
    () =>
      accordion({
        ...variantProps,
        indicatorPosition: expandIconPosition,
      }),
    [objectToDeps(variantProps), expandIconPosition],
  );

  const baseStyles = slots.base({className});

  return {
    Component,
    domRef,
    slots,
    baseStyles,
    items,
    activeKey,
    handleToggle,
    isItemActive,
    expandIconPosition,
    expandIcon,
    collapsible,
    classNames: {
      base: baseStyles,
      item: slots.item,
      header: slots.header,
      trigger: slots.trigger,
      content: slots.content,
      indicator: slots.indicator,
    },
    ...otherProps,
  };
}

export type UseAccordionReturn = ReturnType<typeof useAccordion>;
