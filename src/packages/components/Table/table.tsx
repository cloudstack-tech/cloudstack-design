"use client";

import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React, { useImperativeHandle, useMemo, useRef } from "react";
import { TableProps, TableRef } from "./type";

function InternalTable<TData, TValue = unknown>(
  props: TableProps<TData, TValue>,
  ref: React.Ref<TableRef<TData>>
) {
  const tableRef = useRef<HTMLTableElement>(null);
  const { columns, data, className = "" } = props;
  const coreRowModel = getCoreRowModel<TData>();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: coreRowModel,
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      pagination: {
        pageIndex: 0,
        pageSize: 5,
      },
    },
  });

  useImperativeHandle(
    ref,
    () => {
      return {
        tableElement: tableRef,
        table,
      };
    },
    [table, tableRef]
  );

  const { bottomActions: bottomActionsProp } = props;

  const bottomActions = useMemo(
    () => bottomActionsProp?.(table) || null,
    [bottomActionsProp, table, table.getState()]
  );

  return (
    <>
      <div className="relative w-full overflow-x-auto">
        <table
          ref={tableRef}
          className={`min-w-full table-auto caption-bottom text-xs ${className}`}
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="">
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-default bg-table-header-cell-bg border-table-header-cell-border h-9 min-h-9 border-b p-2 text-left align-middle font-medium whitespace-nowrap"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="border-table-body-cell-border h-10 min-h-10 border-b p-2 align-middle"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={columns.length} className="h-56 text-center">
                  {props.empty || "暂无数据"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {bottomActions}
    </>
  );
}

export const Table = React.forwardRef(InternalTable) as <
  TData,
  TValue = unknown
>(
  props: TableProps<TData, TValue> & {
    ref?: React.Ref<TableRef<TData>>;
  }
) => React.ReactElement;

(
  Table as React.ForwardRefExoticComponent<
    TableProps<unknown> & React.RefAttributes<TableRef>
  >
).displayName = "Table";
