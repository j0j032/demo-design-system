import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta = {
  title: "Atoms/Button",
  tags: ["autodocs"],
  component: Button,
  argTypes: {
    label: { control: "text" },
    category: {
      control: { type: "select", options: ["primary", "primary-B", "secondary", "secondary-B", "neutral"] },
    },
    rounded: { control: "boolean" },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
    iconName: { control: "text" },
    iconPosition: {
      control: { type: "select", options: ["left", "right"] },
    },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: "This is a customizable button component. You can choose the label, category, size, rounded edges, icon, icon position, full width, and disabled state.",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Primary Button",
    category: "primary",
    rounded: false,
    size: "medium",
    fullWidth: false,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Button",
    category: "secondary",
    rounded: false,
    size: "medium",
    fullWidth: false,
    disabled: false,
  },
};

export const Rounded: Story = {
  args: {
    label: "Rounded Button",
    category: "neutral",
    rounded: true,
    size: "large",
    fullWidth: false,
    disabled: false,
  },
};

export const WithIcon: Story = {
  args: {
    label: "Button With Icon",
    category: "primary",
    iconName: "star", // replace 'star' with the name of one of your icons
    iconPosition: "left",
    rounded: false,
    size: "medium",
    fullWidth: false,
    disabled: false,
  },
};
