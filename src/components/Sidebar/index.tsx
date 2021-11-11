import React from "react";
import { styled } from "../../styles/stitches.config";

/* eslint-disable-next-line */
export interface SidebarProps {}

const StyledSidebar = styled("div", {
    height: "100%",
    width: "260px",
    backgroundColor: "$gray800",
});

export function Sidebar() {
  return <StyledSidebar>
  </StyledSidebar>;
}
