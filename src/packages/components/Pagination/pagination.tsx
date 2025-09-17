// import { Button } from "@/packages/components/Button";
// import { Text } from "@/packages/components/Typography";
// import { Select } from "@/packages/components/Select";
// import { Table } from "@tanstack/react-table";
// import { cn } from "@/packages/utils";
// import { useEffect } from "react";

// export type PageSizeOption = {
//   label: string;
//   value: number;
// };

// export type PageSizeOptions = PageSizeOption[];

// export const defaultPageSizeOptions = [
//   { label: "5 条", value: 5 },
//   { label: "10 条", value: 10 },
//   { label: "20 条", value: 20 },
//   { label: "50 条", value: 50 },
// ];

// export type PaginationProps<T> = {
//   table: Table<T>;
//   pageSizeOptions?: PageSizeOptions;
//   defaultPageSize?: number;
// };

// export function Pagination<T>({
//   table,
//   pageSizeOptions = defaultPageSizeOptions,
//   defaultPageSize = 10,
// }: PaginationProps<T>) {
//   useEffect(() => {
//     table.setPageSize(defaultPageSize);
//   }, [table, defaultPageSize]);

//   return (
//     <div className="flex flex-wrap items-center gap-2">
//       <div className="flex items-center gap-2">
//         <Text>每页显示：</Text>
//         <Select
//           options={pageSizeOptions}
//           value={table.getState().pagination.pageSize ?? defaultPageSize}
//           onChange={(value) => {
//             table.setPageSize(value);
//           }}
//         />
//       </div>
//       <Button
//         color="default"
//         onClick={() => table.firstPage()}
//         disabled={!table.getCanPreviousPage()}
//       >
//         首页
//       </Button>
//       <Button
//         color="default"
//         onClick={() => table.previousPage()}
//         disabled={!table.getCanPreviousPage()}
//       >
//         上一页
//       </Button>
//       {/* 动态分页按钮展示 */}
//       {Array.from({ length: table.getPageCount() }, (_, idx) => (
//         <Button
//           key={idx}
//           variant={"outline"}
//           shape="square"
//           className={cn(
//             "h-8 w-8",
//             table.getState().pagination.pageIndex !== idx &&
//               "!border-border-primary"
//           )}
//           onClick={() => table.setPageIndex(idx)}
//           disabled={table.getState().pagination.pageIndex === idx}
//         >
//           {idx + 1}
//         </Button>
//       ))}
//       <Button
//         color="default"
//         onClick={() => table.nextPage()}
//         disabled={!table.getCanNextPage()}
//       >
//         下一页
//       </Button>
//       <Button
//         color="default"
//         onClick={() => table.lastPage()}
//         disabled={!table.getCanNextPage()}
//       >
//         尾页
//       </Button>
//     </div>
//   );
// }
