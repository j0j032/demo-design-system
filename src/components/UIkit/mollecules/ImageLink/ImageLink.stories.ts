import type { Meta, StoryObj } from "@storybook/react";
import ImageLink from "./ImageLink";
import { imgLinks } from "../../../../__mocks__/imgLinks.mock";

const meta = {
  title: "Molecules/ImageLink",
  component: ImageLink,
  tags: ["autodocs"],
  argTypes: {
    image: { control: "text" },
    format: {
      control: { type: "select", options: ["square", "toast", "banner"] },
    },
    linkedTo: { control: "text" },
    alt: { control: "text" },
  },
} satisfies Meta<typeof ImageLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SquareFormat: Story = {
  args: {
    image: imgLinks[1].src,
    format: imgLinks[1].format,
    linkedTo: imgLinks[1].linkedTo,
    alt: imgLinks[1].alt,
  },
};

export const ToastFormat: Story = {
  args: {
    image: imgLinks[2].src,
    format: imgLinks[2].format,
    linkedTo: imgLinks[2].linkedTo,
    alt: imgLinks[2].alt,
  },
};

export const BannerFormat: Story = {
  args: {
    image: imgLinks[0].src,
    format: imgLinks[0].format,
    linkedTo: imgLinks[0].linkedTo,
    alt: imgLinks[0].alt,
  },
};
