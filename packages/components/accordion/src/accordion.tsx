"use client";

import {forwardRef} from "@cloudstack-design/system";
import {useCallback, useEffect, useRef, useState} from "react";
import {ChevronDown} from "lucide-react";

import {UseAccordionProps, useAccordion, AccordionItemProps} from "./use-accordion";

export interface AccordionProps extends UseAccordionProps {}

interface AccordionItemInternalProps extends Omit<AccordionItemProps, "key"> {
  itemKey: string;
  isActive: boolean;
  onToggle: (key: string) => void;
  size?: "sm" | "md" | "lg";
  expandIconPosition?: "start" | "end";
  expandIcon?: (panelProps: {isActive: boolean; disabled?: boolean}) => React.ReactNode;
  collapsible?: "header" | "icon" | "disabled";
  classNames: {
    item: (props?: any) => string;
    header: (props?: any) => string;
    trigger: (props?: any) => string;
    content: (props?: any) => string;
    indicator: (props?: any) => string;
  };
}

// 默认展开图标
const DefaultExpandIcon = ({isActive}: {isActive: boolean}) => (
  <ChevronDown
    className="w-4 h-4 transition-transform duration-200"
    style={{transform: isActive ? "rotate(180deg)" : "rotate(0deg)"}}
  />
);

// 手风琴面板项组件
const AccordionItem = ({
  itemKey,
  label,
  children,
  disabled = false,
  className,
  style,
  expandIcon: itemExpandIcon,
  showArrow = true,
  extra,
  isActive,
  onToggle,
  size = "md",
  expandIconPosition = "end",
  expandIcon: globalExpandIcon,
  collapsible = "header",
  classNames,
}: AccordionItemInternalProps) => {
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
    [collapsible, handleToggle],
  );

  // 渲染展开图标
  const renderExpandIcon = () => {
    if (!showArrow) return null;

    const iconElement =
      itemExpandIcon ||
      (globalExpandIcon ? (
        globalExpandIcon({isActive, disabled})
      ) : (
        <DefaultExpandIcon isActive={isActive} />
      ));

    return (
      <span
        className={classNames.indicator({
          isActive,
        })}
        onClick={collapsible === "icon" ? handleIconClick : undefined}
        style={{cursor: collapsible === "icon" ? "pointer" : undefined}}
      >
        {iconElement}
      </span>
    );
  };

  return (
    <div
      className={classNames.item({size, isDisabled: disabled, className})}
      style={style}
      data-disabled={disabled}
      data-active={isActive}
    >
      {/* 头部 */}
      <div
        className={classNames.header({size, isActive})}
        onClick={handleHeaderClick}
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-expanded={isActive}
        aria-disabled={disabled}
        style={{cursor: collapsible === "header" && !disabled ? "pointer" : undefined}}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleHeaderClick();
          }
        }}
      >
        <div className={classNames.trigger()}>
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
        <div ref={contentRef} className={classNames.content({size, isActive})}>
          {children}
        </div>
      </div>
    </div>
  );
};

// 主手风琴组件
const Accordion = forwardRef<"div", AccordionProps>((props, ref) => {
  const {
    Component,
    domRef,
    baseStyles,
    items,
    handleToggle,
    isItemActive,
    expandIconPosition,
    expandIcon,
    collapsible,
    classNames,
    size,
    ...otherProps
  } = useAccordion({...props, ref});

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <Component ref={domRef} className={baseStyles} {...otherProps}>
      {items.map((item) => {
        const {key: itemKey, ...itemProps} = item;
        return (
          <AccordionItem
            key={itemKey}
            {...itemProps}
            itemKey={itemKey}
            isActive={isItemActive(itemKey)}
            onToggle={handleToggle}
            size={size}
            expandIconPosition={expandIconPosition}
            expandIcon={expandIcon}
            collapsible={collapsible}
            classNames={classNames}
          />
        );
      })}
    </Component>
  );
});

Accordion.displayName = "CloudStackDesign.Accordion";

export default Accordion;
