import { Checkbox, CheckboxGroup } from "@/packages/components";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Data/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    label: "Checkbox",
  },
};

export const Indeterminate: StoryObj<typeof meta> = {
  args: {
    indeterminate: true,
    label: "Indeterminate Checkbox",
  },
};

const checkboxGroupMeta = {
  title: "Data/CheckboxGroup",
  component: CheckboxGroup,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CheckboxGroup>;

export const Group: StoryObj<typeof checkboxGroupMeta> = {
  argTypes: {
    defaultValue: {
      control: "object",
    },
    value: {
      control: "object",
    },
  },
  args: {
    defaultValue: ["1", "2"],
  },
  render: (args) => (
    <CheckboxGroup
      options={[
        { label: "Checkbox 1", value: "1" },
        { label: "Checkbox 2", value: "2" },
        { label: "Checkbox 3", value: "3" },
      ]}
      {...args}
    />
  ),
};
