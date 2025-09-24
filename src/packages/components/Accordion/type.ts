import type { VariantProps } from "class-variance-authority";

export interface AccordionVariants {
  size?: "sm" | "base" | "lg";
  variant?: "default" | "filled" | "bordered" | "shadow";
  bordered?: boolean;
}

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
   * 额外的属性
   */
  extra?: React.ReactNode;
}

export interface AccordionProps {
  /**
   * 手风琴面板数据
   */
  items: AccordionItemProps[];
  /**
   * 当前激活的面板key（受控）
   */
  activeKey?: string | string[];
  /**
   * 默认激活的面板key（非受控）
   */
  defaultActiveKey?: string | string[];
  /**
   * 是否允许多个面板同时展开
   */
  accordion?: boolean;
  /**
   * 面板切换回调
   */
  onChange?: (key: string | string[]) => void;
  /**
   * 手风琴尺寸
   */
  size?: AccordionVariants["size"];
  /**
   * 手风琴变体
   */
  variant?: AccordionVariants["variant"];
  /**
   * 是否显示边框
   */
  bordered?: boolean;
  /**
   * 是否显示展开图标
   */
  expandIconPosition?: "start" | "end";
  /**
   * 自定义展开图标
   */
  expandIcon?: (panelProps: {
    isActive: boolean;
    disabled?: boolean;
  }) => React.ReactNode;
  /**
   * 是否可折叠（当只有一个面板时是否可以全部折叠）
   */
  collapsible?: "header" | "icon" | "disabled";
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
}

export interface AccordionItemInternalProps
  extends Omit<AccordionItemProps, "key"> {
  /**
   * 面板的唯一标识符（内部使用）
   */
  itemKey: string;
  /**
   * 是否激活
   */
  isActive: boolean;
  /**
   * 点击回调
   */
  onToggle: (key: string) => void;
  /**
   * 手风琴配置
   */
  accordionProps: Pick<
    AccordionProps,
    | "size"
    | "variant"
    | "expandIconPosition"
    | "expandIcon"
    | "collapsible"
    | "bordered"
  >;
}
