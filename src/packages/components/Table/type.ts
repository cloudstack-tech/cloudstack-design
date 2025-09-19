import { ColumnDef, Table as TanStackTable } from "@tanstack/react-table";

export type TableProps<TData, TValue = unknown> = {
  /**
   * 列定义
   */
  columns: ColumnDef<TData, TValue>[];
  /**
   * 数据
   */
  data: TData[];
  /**
   * 类名
   */
  className?: string;
  /**
   * 类名
   */
  classNames?: {
    /**
     * 表格类名
     */
    table?: string;
    /**
     * 头部类名
     */
    header?: string;
    /**
     * 主体类名
     */
    body?: string;
    /**
     * 行类名
     */
    row?: string;
    /**
     * 单元格类名
     */
    cell?: string;
    /**
     * 底部操作类名
     */
    bottomActions?: string;
  };
  /**
   * 空状态
   */
  empty?: React.ReactNode;
  /**
   * 底部操作
   */
  bottomActions?: (table: TanStackTable<TData>) => React.ReactNode;
};

export type TableRef<TData = unknown> = {
  /**
   * 表格元素
   */
  tableElement: React.RefObject<HTMLTableElement | null>;
  /**
   * 表格
   */
  table: TanStackTable<TData>;
};
