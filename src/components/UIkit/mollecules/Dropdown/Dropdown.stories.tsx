/* eslint-disable react-refresh/only-export-components */

import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from "./Dropdown";

const meta = {
  title: "Molecules/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    backgroundColor: { control: "color" },
    separatorColor: { control: "color" },
    icon: { control: "text" },
    borderRadius: { control: "text" },
    color: { control: "color" },
    hideSeparator: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: "This is a Dropdown component. You can control the title, background color, separator color, icon, border radius, text color and whether the separator is hidden or not.",
      },
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Dropdown",
    backgroundColor: "#fffefc",
    separatorColor: "lightgray",
    icon: "arrow_forward_ios",
    borderRadius: "0",
    color: "#000",
    hideSeparator: false,
    children: (
      <div>
        <p>Some content here...</p>
      </div>
    ),
  },
};

export const Custom: Story = {
  args: {
    title: "Dropdown",
    separatorColor: "#ff6f6f",
    icon: "shopping_cart",
    color: "#fff",
    borderRadius: "4px",
    backgroundColor: "var(--Secondary)",
    children: (
      <div>
        <p style={{ color: "pink" }}>Some content here...</p>
      </div>
    ),
  },
};

export const WithCustomIcon: Story = {
  args: {
    title: "Dropdown",
    backgroundColor: "#fffefc",
    separatorColor: "lightgray",
    icon: "star", // replace 'star' with the name of one of your icons
    borderRadius: "0",
    color: "#000",
    hideSeparator: false,
    children: (
      <div>
        <p>Some content here...</p>
      </div>
    ),
  },
};

export const WithoutSeparator: Story = {
  args: {
    title: "Dropdown",
    backgroundColor: "#fffefc",
    separatorColor: "lightgray",
    icon: "arrow_forward_ios",
    borderRadius: "0",
    color: "#000",
    hideSeparator: true,
    children: (
      <div>
        <p>Some content here...</p>
      </div>
    ),
  },
};
