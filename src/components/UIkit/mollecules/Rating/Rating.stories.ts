import type { Meta, StoryObj } from "@storybook/react";
import Rating from "./Rating";

const meta = {
  title: "molecules/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: { type: "range", min: 0, max: 5, step: 1 },
      defaultValue: 3,
    },
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
      defaultValue: "medium",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A rating component that takes a rating number and size as props and displays a number of stars based on the rating.",
      },
    },
  },
} satisfies Meta<typeof Rating>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SmallRating: Story = {
  args: {
    rating: 3,
    size: "small",
  },
};

export const MediumRating: Story = {
  args: {
    rating: 3,
    size: "medium",
  },
};

export const LargeRating: Story = {
  args: {
    rating: 3,
    size: "large",
  },
};

export const FullRating: Story = {
  args: {
    rating: 5,
    size: "medium",
  },
};

export const NoRating: Story = {
  args: {
    rating: 0,
    size: "medium",
  },
};
