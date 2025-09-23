import { Card, FlatCard } from "@/packages/components";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import ExampleTabCard from "./Examples/Example-Tab-Card";
import ExampleStatusCard from "./Examples/Example-Status-Card";

const meta = {
  title: "Display 展示/Card 卡片",
  component: Card,
  subcomponents: {
    FlatCard,
  },
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

export const FlatCardStory: Story = {
  render: () => (
    <FlatCard title={"Flat Card Title"} collapsible>
      FlatCard, This is a flat card
    </FlatCard>
  ),
};

export const TabCard: Story = {
  render: () => <ExampleTabCard />,
};

export const StatusCard: Story = {
  render: () => (
    <div className="min-w-4xl">
      <ExampleStatusCard />
    </div>
  ),
};
