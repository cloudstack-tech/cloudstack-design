import type {Meta} from "@storybook/nextjs-vite";

const meta = {
  title: "Core/Theme",
  parameters: {
    layout: "centered",
  },
} as Meta;

export default meta;

type Palette = {
  name: string;
  colors: Record<string, string>;
};

const palettes: Palette[] = [
  {
    name: "Primary",
    colors: {
      primary: "#000000",
    },
  },
];

export const Default = () => {
  return (
    <div>
      {palettes.map((palette) => (
        <div key={palette.name}>{palette.name}</div>
      ))}
    </div>
  );
};
