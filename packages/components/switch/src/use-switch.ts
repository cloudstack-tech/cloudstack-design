import type {SwitchVariantProps} from "@cloudstack-design/theme";

import {HTMLCloudStackDesignProps, mapPropsVariants, PropGetter} from "@cloudstack-design/system";
import {switchComponent} from "@cloudstack-design/theme";
import {ReactRef, useDOMRef} from "@cloudstack-design/react-utils";
import {objectToDeps} from "@cloudstack-design/shared-utils";
import {useMemo, useState, useCallback, ReactNode} from "react";

interface Props extends Omit<HTMLCloudStackDesignProps<"label">, "onChange"> {
  /**
   * Ref to the DOM node.
   */
  ref?: ReactRef<HTMLElement | null>;
  /**
   * Input 元素的 ref
   */
  inputRef?: ReactRef<HTMLInputElement | null>;
  /**
   * 是否选中（受控模式）
   */
  isSelected?: boolean;
  /**
   * 默认是否选中（非受控模式）
   * @default false
   */
  defaultSelected?: boolean;
  /**
   * 变化时的回调
   */
  onChange?: (isSelected: boolean) => void;
  /**
   * 是否禁用
   * @default false
   */
  isDisabled?: boolean;
  /**
   * 是否加载中
   * @default false
   */
  isLoading?: boolean;
  /**
   * 选中时显示的内容
   */
  checkedChildren?: ReactNode;
  /**
   * 未选中时显示的内容
   */
  unCheckedChildren?: ReactNode;
  /**
   * 标签文本
   */
  label?: ReactNode;
  /**
   * 子元素（作为标签）
   */
  children?: ReactNode;
  /**
   * 自定义类名
   */
  classNames?: {
    base?: string;
    track?: string;
    thumb?: string;
    label?: string;
  };
}

export type UseSwitchProps = Props & SwitchVariantProps;

/**
 * useSwitch Hook
 *
 * 实现 Switch 开关组件的状态管理和交互逻辑。
 *
 * 主要功能：
 * - 支持受控和非受控模式
 * - 处理 disabled 和 loading 状态
 * - 键盘无障碍支持（Space/Enter）
 * - 提供样式计算和 props getters
 */
export function useSwitch(originalProps: UseSwitchProps) {
  const [props, variantProps] = mapPropsVariants(originalProps, switchComponent.variantKeys);

  const {
    ref,
    inputRef,
    as,
    className,
    isSelected: controlledSelected,
    defaultSelected = false,
    onChange,
    isDisabled = false,
    isLoading = false,
    checkedChildren,
    unCheckedChildren,
    label,
    children,
    classNames,
    ...otherProps
  } = props;

  const Component = as || "label";
  const domRef = useDOMRef(ref);
  const inputDomRef = useDOMRef(inputRef);

  // 内部状态（非受控模式）
  const [internalSelected, setInternalSelected] = useState(defaultSelected);

  // 判断是否受控
  const isControlled = controlledSelected !== undefined;
  const isSelected = isControlled ? controlledSelected : internalSelected;

  // 处理变化
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled || isLoading) return;

      const newSelected = event.target.checked;

      // 非受控模式更新内部状态
      if (!isControlled) {
        setInternalSelected(newSelected);
      }

      // 触发回调
      onChange?.(newSelected);
    },
    [isControlled, isDisabled, isLoading, onChange],
  );

  // 处理键盘事件
  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLLabelElement>) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        if (!isDisabled && !isLoading && inputDomRef.current) {
          inputDomRef.current.click();
        }
      }
    },
    [isDisabled, isLoading, inputDomRef],
  );

  // 计算样式
  const slots = useMemo(
    () =>
      switchComponent({
        ...variantProps,
        isSelected,
        isDisabled,
        isLoading,
      }),
    [objectToDeps(variantProps), isSelected, isDisabled, isLoading],
  );

  // 标签内容
  const labelContent = label || children;

  // 轨道内容
  const trackContent = isSelected ? checkedChildren : unCheckedChildren;

  // 轨道背景色（根据状态动态计算）
  const getTrackBgColor = useCallback(() => {
    if (isSelected) {
      return isDisabled
        ? "var(--cloudstack-colors-default-300)"
        : "var(--cloudstack-colors-primary)";
    }
    return isDisabled ? "var(--cloudstack-colors-default-100)" : "rgba(0, 0, 0, 0.25)";
  }, [isSelected, isDisabled]);

  // 滑块背景色
  const getThumbBgColor = useCallback(() => {
    return isDisabled ? "var(--cloudstack-colors-default-200)" : "white";
  }, [isDisabled]);

  // 滑块阴影
  const getThumbShadow = useCallback(() => {
    return isDisabled ? "0 1px 2px rgba(0, 0, 0, 0.1)" : "0 2px 4px rgba(0, 0, 0, 0.15)";
  }, [isDisabled]);

  // Base props
  const getBaseProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      ref: domRef,
      className: slots.base({class: classNames?.base}),
      tabIndex: isDisabled || isLoading ? -1 : 0,
      onKeyDown: handleKeyDown,
      role: "switch",
      "aria-checked": isSelected,
      "aria-disabled": isDisabled || isLoading,
      "aria-label": typeof labelContent === "string" ? labelContent : undefined,
      ...otherProps,
    }),
    [
      domRef,
      slots,
      classNames?.base,
      isDisabled,
      isLoading,
      handleKeyDown,
      isSelected,
      labelContent,
      otherProps,
    ],
  );

  // Input props
  const getInputProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      ref: inputDomRef,
      type: "checkbox",
      checked: isSelected,
      onChange: handleChange,
      disabled: isDisabled || isLoading,
      className: slots.input(),
    }),
    [inputDomRef, isSelected, handleChange, isDisabled, isLoading, slots],
  );

  // Track props
  const getTrackProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      className: slots.track({class: classNames?.track}),
      style: {
        backgroundColor: getTrackBgColor(),
      },
    }),
    [slots, classNames?.track, getTrackBgColor],
  );

  // Thumb props
  const getThumbProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      className: slots.thumb({class: classNames?.thumb}),
      style: {
        backgroundColor: getThumbBgColor(),
        boxShadow: getThumbShadow(),
      },
    }),
    [slots, classNames?.thumb, getThumbBgColor, getThumbShadow],
  );

  // Content props
  const getContentProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      className: slots.content(),
    }),
    [slots],
  );

  // Label props
  const getLabelProps: PropGetter = useCallback(
    (props = {}) => ({
      ...props,
      className: slots.label({class: classNames?.label}),
      style: {
        color: isDisabled
          ? "var(--cloudstack-colors-default-400)"
          : "var(--cloudstack-colors-default-900)",
      },
    }),
    [slots, classNames?.label, isDisabled],
  );

  return {
    Component,
    domRef,
    inputDomRef,
    slots,
    classNames,
    isSelected,
    isDisabled,
    isLoading,
    labelContent,
    trackContent,
    getBaseProps,
    getInputProps,
    getTrackProps,
    getThumbProps,
    getContentProps,
    getLabelProps,
  };
}

export type UseSwitchReturn = ReturnType<typeof useSwitch>;
