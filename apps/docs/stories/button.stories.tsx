import { Button, ButtonProps } from "@incubator/core/dist";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>Button</Button>
);

export const Primary = Template.bind({});
Primary.args = { variant: "primary" };

export const Secondary = Template.bind({});
Secondary.args = { variant: "secondary" };

export const Tertiary = Template.bind({});
Tertiary.args = { variant: "outlined" };
