import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Table } from "@/packages/components";
import { SelectColumn } from "@/packages/components/Table/select-column";

const meta = {
  title: "Display 展示/Table 表格",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: [
      SelectColumn(),
      {
        header: "Email",
        accessorKey: "email",
      },
      {
        header: "Age",
        accessorKey: "age",
      },
      {
        header: "Gender",
        accessorKey: "gender",
      },
    ],
    data: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        age: 30,
        gender: "Male",
      },
      {
        name: "Jane Doe",
        email: "jane.doe@example.com",
        age: 25,
        gender: "Female",
      },
      {
        name: "Jim Doe",
        email: "jim.doe@example.com",
        age: 20,
      },
      {
        name: "Jill Doe",
        email: "jill.doe@example.com",
        age: 20,
        gender: "Female",
      },
    ],
  },
};
