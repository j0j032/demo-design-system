import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta = {
  title: "Molecules/Toast",
  tags: ["autodocs"],
  component: Toast,
  argTypes: {
    category: {
      options: ["info", "success", "warning", "error"],
      control: { type: "radio" },
    },
    text: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "A Toast component that takes a category and text as props and displays a styled toast message based on the category.",
      },
    },
  },
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    category: "info",
    text: "This is an informational message.",
  },
};

export const Success: Story = {
  args: {
    category: "success",
    text: "This is a success message.",
  },
};

export const Warning: Story = {
  args: {
    category: "warning",
    text: "This is a warning message.",
  },
};

export const Error: Story = {
  args: {
    category: "error",
    text: "This is an error message.",
  },
};
