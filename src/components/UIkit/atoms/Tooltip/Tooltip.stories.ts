import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "A Tooltip component that renders the children and displays a tooltip with specified text when hovering over the children.",
      },
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Hello world",
    children: "👋 Hover me",
  },
};
