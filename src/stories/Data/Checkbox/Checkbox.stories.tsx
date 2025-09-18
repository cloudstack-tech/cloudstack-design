import { Checkbox, CheckboxGroup } from "@/packages/components";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ExampleCheckAll } from "./Example-CheckAll";

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

export const Disabled: StoryObj<typeof meta> = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Checkbox {...args} />
      <Checkbox {...args} indeterminate />
      <Checkbox {...args} value={true} />
    </div>
  ),
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

export const CheckAll: StoryObj<typeof checkboxGroupMeta> = {
  render: () => <ExampleCheckAll />,
};
