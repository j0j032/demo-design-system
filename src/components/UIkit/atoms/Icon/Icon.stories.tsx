import { Story, Meta } from "@storybook/react";
import { Icon, IconProps } from "./Icon";

const meta: Meta = {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    icon: { control: "text" },
    isClickable: { control: "boolean" },
    action: { action: "clicked" },
    color: { control: "color" },
  },
};

export default meta;

const Template: Story<IconProps> = (args: IconProps) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: "add",
};

export const Clickable = Template.bind({});
Clickable.args = {
  icon: "add",
  isClickable: true,
  action: () => console.log("Icon clicked!"),
};

export const Small = Template.bind({});
Small.args = {
  icon: "add",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  icon: "add",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  icon: "add",
  size: "large",
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  icon: "add",
  color: "red",
};
