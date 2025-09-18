import Card from "@/packages/components/Card";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ExampleTabCard from "./Example-Tab-Card";

const meta = {
  title: "Layout/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoTitleCard: Story = {
  args: {
    children: "NoTitleCard",
    hoverable: false,
  },
};

export const HoverableNoTitleCard: Story = {
  args: {
    children: "HoverableNoTitleCard",
    hoverable: true,
  },
};

export const HoverableTitleCard: Story = {
  args: {
    title: "HoverableTitleCard Title",
    children: "HoverableTitleCard Content",
    hoverable: true,
  },
};

export const CollapsibleTitleCard: Story = {
  args: {
    title: "CollapsibleTitleCard Title",
    children: "CollapsibleTitleCard Content",
    collapsible: true,
  },
};

export const TabCard: Story = {
  render: () => <ExampleTabCard />,
};
