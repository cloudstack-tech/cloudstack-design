"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import { cn } from "@/packages/utils";
import {
  AccordionProps,
  AccordionItemProps,
  AccordionItemInternalProps,
} from "./type";
import {
  accordionVariants,
  accordionItemVariants,
  accordionHeaderVariants,
  accordionContentVariants,
  accordionIconVariants,
} from "./variants";
import "./accordion.theme.css";

// 默认展开图标
const DefaultExpandIcon = ({ isActive }: { isActive: boolean }) => (
  <svg
    className={cn("w-4 h-4 transition-transform duration-200", {
      "rotate-180": isActive,
    })}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

// 手风琴面板项组件
const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemInternalProps
>((props, ref) => {
  const {
    itemKey,
    label,
    children,
    disabled = false,
    className,
    style,
    expandIcon,
    showArrow = true,
    extra,
    isActive,
    onToggle,
    accordionProps,
  } = props;

  const {
    size = "base",
    variant = "default",
    expandIconPosition = "end",
    expandIcon: globalExpandIcon,
    collapsible = "header",
    bordered = false,
  } = accordionProps;

  const contentRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  // 计算并更新内容高度
  useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver(() => {
        if (contentRef.current) {
          setContentHeight(contentRef.current.scrollHeight);
        }
      });

      resizeObserver.observe(contentRef.current);
      setContentHeight(contentRef.current.scrollHeight);

      return () => resizeObserver.disconnect();
    }
  }, [children]);

  const handleToggle = useCallback(() => {
    if (disabled || collapsible === "disabled") return;
    onToggle(itemKey);
  }, [disabled, collapsible, onToggle, itemKey]);

  const handleHeaderClick = useCallback(() => {
    if (collapsible === "header" || collapsible === "icon") {
      handleToggle();
    }
  }, [collapsible, handleToggle]);

  const handleIconClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      if (collapsible === "icon") {
        handleToggle();
      }
    },
    [collapsible, handleToggle]
  );

  // 渲染展开图标
  const renderExpandIcon = () => {
    if (!showArrow) return null;

    const iconElement =
      expandIcon ||
      (globalExpandIcon ? (
        globalExpandIcon({ isActive, disabled })
      ) : (
        <DefaultExpandIcon isActive={isActive} />
      ));

    return (
      <span
        className={cn(
          accordionIconVariants({
            position: expandIconPosition,
            isActive,
          }),
          "accordion-icon",
          {
            "cursor-pointer": collapsible === "icon",
          }
        )}
        onClick={collapsible === "icon" ? handleIconClick : undefined}
      >
        {iconElement}
      </span>
    );
  };

  const itemClassName = cn(
    accordionItemVariants({
      size,
      variant,
      bordered,
      disabled,
    }),
    "accordion-item",
    {
      "is-active": isActive,
      "is-disabled": disabled,
    },
    className
  );

  const headerClassName = cn(
    accordionHeaderVariants({
      size,
      isActive,
    }),
    "accordion-header",
    {
      "is-active": isActive,
      "is-disabled": disabled,
      "cursor-pointer": collapsible === "header" && !disabled,
    }
  );

  const contentClassName = cn(
    accordionContentVariants({
      size,
      isActive,
    }),
    "accordion-content"
  );

  return (
    <div
      ref={ref}
      className={itemClassName}
      style={style}
      data-disabled={disabled}
      data-active={isActive}
    >
      {/* 头部 */}
      <div
        className={headerClassName}
        onClick={handleHeaderClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isActive}
        aria-disabled={disabled}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleHeaderClick();
          }
        }}
      >
        <div className="flex items-center flex-1 min-w-0">
          {expandIconPosition === "start" && renderExpandIcon()}
          <div className="flex-1 min-w-0">{label}</div>
          {extra && <div className="ml-2 flex-shrink-0">{extra}</div>}
        </div>
        {expandIconPosition === "end" && renderExpandIcon()}
      </div>

      {/* 内容 */}
      <div
        ref={wrapperRef}
        className="overflow-hidden"
        style={{
          height: isActive ? `${contentHeight}px` : "0px",
          transition: "height 300ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div ref={contentRef} className={contentClassName}>
          {children}
        </div>
      </div>
    </div>
  );
});

AccordionItem.displayName = "AccordionItem";

// 主手风琴组件
const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    const {
      items = [],
      activeKey: controlledActiveKey,
      defaultActiveKey,
      accordion = false,
      onChange,
      size = "base",
      variant = "default",
      bordered = false,
      expandIconPosition = "end",
      expandIcon,
      collapsible = "header",
      className,
      style,
      as: Component = "div",
    } = props;

    // 内部状态管理
    const [internalActiveKey, setInternalActiveKey] = useState<
      string | string[]
    >(() => {
      if (controlledActiveKey !== undefined) {
        return controlledActiveKey;
      }
      if (defaultActiveKey !== undefined) {
        return defaultActiveKey;
      }
      return accordion ? "" : [];
    });

    const activeKey =
      controlledActiveKey !== undefined
        ? controlledActiveKey
        : internalActiveKey;

    // 处理面板切换
    const handleToggle = useCallback(
      (key: string) => {
        let newActiveKey: string | string[];

        if (accordion) {
          // 手风琴模式：只能展开一个
          newActiveKey = (activeKey as string) === key ? "" : key;
        } else {
          // 非手风琴模式：可以展开多个
          const currentKeys = Array.isArray(activeKey)
            ? activeKey
            : [activeKey].filter(Boolean);
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
      [activeKey, accordion, controlledActiveKey, onChange]
    );

    // 检查面板是否激活
    const isItemActive = useCallback(
      (key: string): boolean => {
        if (accordion) {
          return activeKey === key;
        } else {
          const keys = Array.isArray(activeKey)
            ? activeKey
            : [activeKey].filter(Boolean);
          return keys.includes(key);
        }
      },
      [activeKey, accordion]
    );

    const accordionClassName = cn(
      accordionVariants({
        size,
        variant,
        bordered,
      }),
      "accordion-container",
      {
        [`variant-${variant}`]: variant,
      },
      className
    );

    const accordionConfig = {
      size,
      variant,
      expandIconPosition,
      expandIcon,
      collapsible,
      bordered,
    };

    if (items.length === 0) {
      return null;
    }

    return (
      <Component ref={ref} className={accordionClassName} style={style}>
        {items.map((item) => {
          const { key: itemKey, ...itemProps } = item;
          return (
            <AccordionItem
              key={itemKey}
              {...itemProps}
              itemKey={itemKey}
              isActive={isItemActive(itemKey)}
              onToggle={handleToggle}
              accordionProps={accordionConfig}
            />
          );
        })}
      </Component>
    );
  }
);

Accordion.displayName = "Accordion";

export { Accordion, AccordionItem };
export type { AccordionProps, AccordionItemProps };
