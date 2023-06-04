import type { Meta, StoryObj } from "@storybook/react";
import SocialIcon from "./SocialIcon";
import { socialIcons } from "../../../../constants/socialicons";

const meta = {
  title: "Atoms/SocialIcon",
  tags: ["autodocs"],
  component: SocialIcon,
} satisfies Meta<typeof SocialIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Storybook: Story = {
  args: {
    iconSrc: socialIcons[0].src,
    href: "https://storybook.js.org/",
    name: "Storybook",
  },
};

export const Github: Story = {
  args: {
    iconSrc: socialIcons[1].src,
    href: "https://github.com",
    name: "Github",
  },
};

export const LinkedIn: Story = {
  args: {
    iconSrc: socialIcons[2].src,
    href: "https://linkedin.com",
    name: "Linkedin",
  },
};
