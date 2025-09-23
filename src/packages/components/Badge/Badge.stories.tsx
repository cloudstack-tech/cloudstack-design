import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "@/packages/components";

const meta = {
  title: "Display 展示/Badge 徽标",
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: "Badge",
  },
};
