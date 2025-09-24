import type { AffixVariants } from "./variants";

export interface AffixProps {
  /**
   * 子元素
   */
  children: React.ReactNode;
  /**
   * 距离窗口顶部达到指定偏移量后触发
   */
  offsetTop?: number;
  /**
   * 距离窗口底部达到指定偏移量后触发
   */
  offsetBottom?: number;
  /**
   * 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数
   */
  target?: () => Window | HTMLElement | null;
  /**
   * 固定状态改变时触发的回调函数
   */
  onChange?: (affixed: boolean) => void;
  /**
   * 额外的类名
   */
  className?: string;
  /**
   * 额外的样式
   */
  style?: React.CSSProperties;
  /**
   * 自定义渲染容器
   */
  as?: React.ElementType;
  /**
   * z-index 层级
   */
  zIndex?: number;
  /**
   * 固定时的样式变体
   */
  variant?: AffixVariants["variant"];
  /**
   * 是否显示阴影
   */
  shadow?: boolean;
  /**
   * 是否显示边框
   */
  bordered?: boolean;
  /**
   * 固定位置
   */
  position?: "top" | "bottom";
}

export interface AffixState {
  /**
   * 是否处于固定状态
   */
  affixed: boolean;
  /**
   * 固定的位置类型
   */
  affixedType: "top" | "bottom" | null;
  /**
   * 原始样式
   */
  originalStyle: React.CSSProperties;
  /**
   * 占位元素的尺寸
   */
  placeholderSize: {
    width: number;
    height: number;
  };
}
