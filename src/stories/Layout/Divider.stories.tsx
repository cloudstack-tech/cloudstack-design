import { Button, Divider } from "@/packages/components";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Layout/Divider",
  component: Divider,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    vertical: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  args: {
    vertical: true,
    width: 1,
    className: "h-24",
  },
};

export const Horizontal: Story = {
  args: {
    vertical: false,
    width: 1,
    className: "w-24",
  },
};

export const ButtonDivider: Story = {
  render: () => (
    <div className="flex gap-4">
      <Button variant="text">Button 1</Button>
      <Divider vertical />
      <Button variant="text">Button 2</Button>
      <Divider vertical />
      <Button variant="text">Button 3</Button>
    </div>
  ),
};
