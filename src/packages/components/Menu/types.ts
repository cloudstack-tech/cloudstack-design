export type MenuItemProps = {
  /**
   * 菜单项的唯一标识
   */
  key: string;
  /**
   * 菜单项的标签
   */
  label: React.ReactNode;
  /**
   * 菜单项的链接
   */
  href?: string | string[];
  /**
   * 菜单项的值
   */
  value?: any;
  /**
   * 菜单项的提示信息
   */
  tooltip?: React.ReactNode;
  /**
   * 菜单项的图标
   */
  icon?: React.ReactNode;
  /**
   * 菜单项是否激活
   */
  active?: boolean;
  /**
   * 菜单项是否禁用
   */
  disabled?: boolean;
  /**
   * 菜单项点击事件
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  /**
   * 菜单项的子菜单
   */
  children?: MenuItemProps[];
  /**
   * 菜单项的类名
   */
  className?: string;
  /**
   * 菜单项的样式
   */
  style?: React.CSSProperties;
  /**
   * 菜单项是否为分割线
   */
  divider?: boolean;
  /**
   * 菜单项是否可折叠
   */
  collapsible?: boolean;
  /**
   * 菜单项的匹配模式
   */
  match?: "exact" | "prefix";
  /**
   * 菜单项的前缀
   */
  prefix?: React.ReactNode;
  /**
   * 菜单项的后缀
   */
  suffix?: React.ReactNode;

  /**
   * 菜单项的右侧图标
   */
  rightIcon?: React.ReactNode;
};

export type MenuProps = {
  /**
   * 菜单标题
   */
  title?: React.ReactNode;
  /**
   * 菜单标题的额外内容
   */
  titleExtra?: React.ReactNode;
  /**
   * 菜单标题的描述
   */
  titleDescription?: React.ReactNode;
  /**
   * 菜单项
   */
  items: MenuItemProps[];
  /**
   * 菜单的类名
   */
  className?: string;
  /**
   * 菜单的样式
   */
  style?: React.CSSProperties;
  /**
   * 菜单是否可折叠
   */
  collapsible?: boolean;
  /**
   * 菜单是否默认折叠
   */
  defaultCollapsed?: boolean;
  /**
   * 菜单是否折叠
   */
  collapsed?: boolean;
  /**
   * 菜单折叠状态改变时的事件
   */
  onCollapseChange?: (collapsed: boolean) => void;
  /**
   * 菜单是否多选
   */
  multiple?: boolean;
  /**
   * 菜单默认选中项
   */
  defaultSelectedKeys?: string[];
  /**
   * 菜单选中项
   */
  selectedKeys?: string[];
  /**
   * 菜单选中项改变时的事件
   */
  onSelectedKeysChange?: (selectedKeys: string[]) => void;
  /**
   * 菜单默认展开的项
   */
  defaultOpenKeys?: string[] | string | "all";
};
