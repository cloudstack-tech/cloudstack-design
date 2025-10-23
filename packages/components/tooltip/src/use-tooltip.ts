import type {TooltipVariantProps} from "@cloudstack-design/theme";
import type {Placement, ReferenceType} from "@floating-ui/react";

import {HTMLCloudStackDesignProps} from "@cloudstack-design/system";
import {tooltip} from "@cloudstack-design/theme";
import {ReactRef} from "@cloudstack-design/react-utils";
import {useMemo, useState, useRef, cloneElement, ReactNode, ReactElement} from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  arrow as floatingArrow,
  UseInteractionsReturn,
  UseFloatingReturn,
} from "@floating-ui/react";

interface Props extends Omit<HTMLCloudStackDesignProps, "content" | "ref"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * 触发 tooltip 的元素
   */
  children: React.ReactElement;
  /**
   * Tooltip 的内容
   */
  content?: ReactNode;
  /**
   * Tooltip 的位置
   * @default "top"
   */
  placement?: Placement;
  /**
   * 是否显示箭头
   * @default true
   */
  showArrow?: boolean;
  /**
   * 延迟显示时间（毫秒）
   * @default 0
   */
  delay?: number | {open?: number; close?: number};
  /**
   * 是否禁用 tooltip
   * @default false
   */
  isDisabled?: boolean;
  /**
   * 偏移距离
   * @default 8
   */
  offset?: number;
  /**
   * 是否默认显示
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * 受控模式：是否显示
   */
  isOpen?: boolean;
  /**
   * 受控模式：显示状态改变时的回调
   */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * 自定义类名（应用到 tooltip 内容）
   */
  className?: string;
}

export type UseTooltipProps = Props & TooltipVariantProps;

export function useTooltip(props: UseTooltipProps) {
  const {
    children,
    content,
    placement = "top",
    showArrow = true,
    delay = 0,
    isDisabled = false,
    offset: offsetValue = 8,
    defaultOpen = false,
    isOpen: controlledOpen,
    onOpenChange,
    className,
    ...rest
  } = props;

  // 内部状态管理
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isOpen = controlledOpen ?? uncontrolledOpen;

  // 箭头引用
  const arrowRef = useRef<HTMLDivElement>(null);

  // Floating UI setup
  const {refs, floatingStyles, context}: UseFloatingReturn = useFloating({
    open: isOpen,
    onOpenChange: onOpenChange ?? setUncontrolledOpen,
    placement,
    middleware: [
      offset(offsetValue + (showArrow ? 6 : 0)),
      flip(),
      shift({padding: 8}),
      showArrow ? floatingArrow({element: arrowRef, padding: 4}) : undefined,
    ].filter(Boolean),
    whileElementsMounted: autoUpdate,
  });

  // Interactions
  const hover = useHover(context, {
    enabled: !isDisabled,
    delay,
  });
  const focus = useFocus(context, {enabled: !isDisabled});
  const dismiss = useDismiss(context);
  const role = useRole(context, {role: "tooltip"});

  const {getReferenceProps, getFloatingProps}: UseInteractionsReturn = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  // 样式计算
  const styles = useMemo(() => tooltip({...props}), [props]);

  // Clone children with ref and props
  const trigger = cloneElement(
    children,
    getReferenceProps({
      ref: refs.setReference,
      ...(children.props as React.HTMLAttributes<HTMLElement>),
    }),
  );

  return {
    trigger,
    content,
    isOpen,
    floatingStyles,
    arrowRef,
    showArrow,
    styles,
    className,
    getFloatingProps,
    isDisabled,
    setFloating: refs.setFloating,
  };
}

export type UseTooltipReturn = ReturnType<typeof useTooltip>;
