/* eslint-disable react-refresh/only-export-components */

import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "./Separator";

const meta = {
  title: "Atoms/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select", options: ["horizontal", "vertical"] },
    },
    customColor: { control: "color" },
    customMargin: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "A simple component that renders a separator line in either a horizontal or vertical direction.",
      },
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  args: {
    direction: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "100px", width: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomColor: Story = {
  args: {
    direction: "horizontal",
    customColor: "blue",
  },
};

export const CustomMargin: Story = {
  args: {
    direction: "horizontal",
    customMargin: "10px",
  },
};
