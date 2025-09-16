// 导出所有组件
export { Button } from "./components/Button";

// 导出类型定义
export type {
  ButtonProps,
  ButtonColor,
  ButtonVariant,
} from "./components/Button/type";

// 导出工具函数
export { cn } from "./utils";

// 导出样式文件路径，供使用者导入
export const styles = {
  // 主题样式文件路径
  theme: "cloudstack-design/styles",
} as const;
