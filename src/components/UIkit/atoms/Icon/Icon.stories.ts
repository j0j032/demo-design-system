import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta = {
  title: "Atoms/Icon",
  tags: ["autodocs"],
  component: Icon,
  argTypes: {
    icon: { control: "text" },
    isClickable: { control: "boolean" },
    color: { control: "color" },
  },
  parameters: {
    docs: {
      description: {
        component: "All icon names come from the [Material Icons Library](https://fonts.google.com/icons?icon.platform=web&icon.set=Material+Icons&selected=Material+Icons+Outlined:description)",
      },
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "add",
  },
};

export const Small: Story = {
  args: {
    icon: "add",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    icon: "add",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    icon: "add",
    size: "large",
  },
};

export const CustomColor: Story = {
  args: {
    icon: "add",
    color: "red",
  },
};
