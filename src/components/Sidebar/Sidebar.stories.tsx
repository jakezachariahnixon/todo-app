import React from "react";
import { Story, Meta } from "@storybook/react";
import { Sidebar, SidebarProps } from "./index";

export default {
  component: Sidebar,
  title: "Sidebar",
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: Story<SidebarProps> = (args) => (
  <div style={{ height: "500px" }}>
    <Sidebar />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
