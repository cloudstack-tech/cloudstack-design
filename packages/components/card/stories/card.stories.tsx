import type {Meta, StoryObj} from "@storybook/react";

import {Card} from "../src";

const meta = {
  title: "Data Display 数据展示/Card 卡片",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["cube", "flat"],
    },
    hoverable: {
      control: "boolean",
    },
    collapsible: {
      control: "boolean",
    },
  },
  args: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a card content",
  },
};

export const WithTitle: Story = {
  args: {
    title: "Card Title",
    children: "This is a card with a title",
  },
};

export const Hoverable: Story = {
  args: {
    title: "Hoverable Card",
    children: "Hover over this card to see the shadow effect",
    hoverable: true,
  },
};

export const Collapsible: Story = {
  args: {
    title: "Collapsible Card",
    children: (
      <div>
        <p>This card can be collapsed by clicking the title area.</p>
        <p>Click the chevron icon to toggle the content.</p>
      </div>
    ),
    collapsible: true,
  },
};

export const FlatVariant: Story = {
  args: {
    title: "Flat Card",
    children: "This is a flat style card",
    variant: "flat",
  },
};

export const CubeVariant: Story = {
  args: {
    title: "Cube Card",
    children: "This is a cube style card (default)",
    variant: "cube",
  },
};

export const LongContent: Story = {
  args: {
    title: "Card with Long Content",
    children: (
      <div className="space-y-2 max-w-md">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur.
        </p>
      </div>
    ),
    collapsible: true,
  },
};

export const Gallery: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 max-w-4xl">
      <Card>Simple Card</Card>
      <Card title="With Title">Card with title</Card>
      <Card title="Collapsible" collapsible>
        Collapsible content
      </Card>
      <Card title="Flat Style" variant="flat">
        Flat variant card
      </Card>
    </div>
  ),
};
