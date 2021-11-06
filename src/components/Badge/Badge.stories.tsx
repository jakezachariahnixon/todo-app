import React from "react";
import { Story, Meta } from "@storybook/react";
import { Badge, BadgeProps } from "./index";

export default {
  component: Badge,
  title: "Badge",
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const TemplateDefault: Story<BadgeProps> = (args) => (
  <Badge {...args}>4 tasks</Badge>
);

// eslint-disable-next-line react/jsx-props-no-spreading
const TemplateGreen: Story<BadgeProps> = (args) => (
  <Badge {...args}>2 updates</Badge>
);

// eslint-disable-next-line react/jsx-props-no-spreading
const TemplateRed: Story<BadgeProps> = (args) => (
  <Badge {...args}>1 overdue</Badge>
);

// eslint-disable-next-line react/jsx-props-no-spreading
const TemplateBlue: Story<BadgeProps> = (args) => (
  <Badge {...args}>4 tasks</Badge>
);

export const Default = TemplateDefault.bind({});
Default.args = {};

export const Green = TemplateGreen.bind({});
Green.args = { color: "green" };

export const Red = TemplateRed.bind({});
Red.args = { color: "red" };

export const Blue = TemplateBlue.bind({});
Blue.args = { color: "blue" };
