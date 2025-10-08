import {Button} from "../src";
import type {Meta} from "@storybook/nextjs-vite";

const meta = {
  title: "Components/Button",
  component: Button,
} as Meta<typeof Button>;

export default meta;

export const Default = () => <Button />;
