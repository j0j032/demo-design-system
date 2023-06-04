import type { Meta, StoryObj } from "@storybook/react";
import LeadCard from "./LeadCard";
import { leads } from "../../../../__mocks__/lead.mock";

const meta = {
  title: "Organisms/LeadCard",
  tags: ["autodocs"],
  component: LeadCard,
} satisfies Meta<typeof LeadCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLeadCard: Story = {
  args: { lead: leads[1] },
};
