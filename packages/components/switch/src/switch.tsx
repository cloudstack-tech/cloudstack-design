"use client";

import {forwardRef} from "@cloudstack-design/system";

import {UseSwitchProps, useSwitch} from "./use-switch";

export interface SwitchProps extends UseSwitchProps {}

/**
 * Switch 开关组件
 *
 * 用于切换单个设置的开/关状态。
 * 提供流畅的动画效果和完整的无障碍支持。
 *
 * @example
 * ```tsx
 * // 基础用法
 * <Switch defaultSelected label="接收通知" />
 *
 * // 受控模式
 * <Switch isSelected={checked} onChange={setChecked} />
 *
 * // 带内容
 * <Switch checkedChildren="开" unCheckedChildren="关" />
 *
 * // 不同尺寸
 * <Switch size="sm" />
 * <Switch size="md" />
 * <Switch size="lg" />
 *
 * // Loading 状态
 * <Switch isLoading />
 * ```
 */
const Switch = forwardRef<"label", SwitchProps>((props, ref) => {
  const {
    Component,
    slots,
    isLoading,
    labelContent,
    trackContent,
    getBaseProps,
    getInputProps,
    getTrackProps,
    getThumbProps,
    getContentProps,
    getLabelProps,
  } = useSwitch({...props, ref});

  // 渲染 loading 图标
  const renderLoadingIcon = () => {
    if (!isLoading) return null;

    return (
      <div {...getContentProps()} className={slots.loadingWrapper()}>
        <div className={slots.loadingIcon()} />
      </div>
    );
  };

  // 渲染轨道内容（选中/未选中文本）
  const renderTrackContent = () => {
    if (!trackContent) return null;

    return <div {...getContentProps()}>{trackContent}</div>;
  };

  return (
    <Component {...getBaseProps()}>
      {/* 隐藏的原生 input */}
      <input {...getInputProps()} />

      {/* 轨道 */}
      <div {...getTrackProps()}>
        {/* 轨道内容 */}
        {renderTrackContent()}

        {/* 滑块 */}
        <div {...getThumbProps()}>
          {/* Loading 图标 */}
          {renderLoadingIcon()}
        </div>
      </div>

      {/* 标签 */}
      {labelContent && <span {...getLabelProps()}>{labelContent}</span>}
    </Component>
  );
});

Switch.displayName = "CloudStackDesign.Switch";

export default Switch;
