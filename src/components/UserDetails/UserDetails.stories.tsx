import React from "react";
import { Story, Meta } from "@storybook/react";
import { UserDetails, UserDetailProps } from ".";

export default {
    component: UserDetails,
    title: "UserDetails",
} as Meta;

const TemplateDefault: Story<UserDetailProps> = (args) => (
    <UserDetails></UserDetails>
);

export const Default = TemplateDefault.bind({});