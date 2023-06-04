import { Meta, Story } from "@storybook/react";
import Header from "./Header";

export default {
  title: "Templates/Header",
  component: Header,
} as Meta;

const Template: Story = (args) => <Header {...args} />;

export const Default = Template.bind({});
