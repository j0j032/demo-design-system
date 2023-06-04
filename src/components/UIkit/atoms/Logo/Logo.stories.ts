// src/components/atoms/Logo/Logo.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import Logo from "./Logo";

const meta = {
  title: "Atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    withLabel: { control: "boolean" },
  },
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "small",
    withLabel: false,
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    withLabel: false,
  },
};

export const Large: Story = {
  args: {
    size: "large",
    withLabel: false,
  },
};

export const SmallWithLabel: Story = {
  args: {
    size: "small",
    withLabel: true,
  },
};

export const MediumWithLabel: Story = {
  args: {
    size: "medium",
    withLabel: true,
  },
};

export const LargeWithLabel: Story = {
  args: {
    size: "large",
    withLabel: true,
  },
};
