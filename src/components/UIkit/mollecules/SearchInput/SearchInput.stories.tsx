import { Meta, Story } from "@storybook/react";
import SearchInput from "./SearchInput";

export default {
  title: "Molecules/SearchInput",
  tags: ["autodocs"],
  component: SearchInput,
} as Meta;

const Template: Story = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
