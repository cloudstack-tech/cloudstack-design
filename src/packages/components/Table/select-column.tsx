import { Checkbox } from "@/packages/components";
import { Row, Table } from "@tanstack/react-table";

export function SelectColumn<T>() {
  return {
    id: "select",
    header: ({ table }: { table: Table<T> }) => (
      <Checkbox
        className="px-1"
        value={table.getIsAllRowsSelected()}
        indeterminate={table.getIsSomeRowsSelected()}
        onChange={table.getToggleAllRowsSelectedHandler()}
      />
    ),
    cell: ({ row }: { row: Row<T> }) => {
      return (
        <Checkbox
          className="px-1"
          value={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          indeterminate={row.getIsSomeSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      );
    },
  };
}
