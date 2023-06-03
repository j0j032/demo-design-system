import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta = {
  title: "Atoms/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "boolean" },
    type: {
      control: { type: "select", options: ["text", "password", "email"] },
    },
    showRequired: { control: "boolean" },
    showPlaceholder: { control: "boolean" },
    specifyLabel: { control: "text" },
    inputName: { control: "text" },
  },
  parameters: {
    docs: {
      description: {
        component: "TextInput component can be used to render text input fields with different styles and states.",
      },
    },
  },
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: true,
    inputName: "Default Input",
  },
};

export const WithSpecifiedLabel: Story = {
  args: {
    ...Default.args,
    specifyLabel: "Specified label",
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...Default.args,
    showPlaceholder: true,
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    showRequired: true,
  },
};

export const NoLabel: Story = {
  args: {
    ...Default.args,
    label: false,
  },
};

export const Email: Story = {
  args: {
    ...Default.args,
    type: "email",
  },
};

export const Password: Story = {
  args: {
    ...Default.args,
    type: "password",
  },
};
