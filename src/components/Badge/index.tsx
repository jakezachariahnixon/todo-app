import React from "react";
import { styled } from "../../styles/stitches.config";

/* eslint-disable-next-line */
export interface BadgeProps {
  children: React.ReactNode;
  color?: "green" | "red" | "blue";
}

const StyledBadge = styled("div", {
  // Layout
  width: "fit-content",
  px: "10px",
  py: "5px",
  borderRadius: "$rounded",

  // Typography
  fontFamily: "$mainFont",
  fontWeight: "$standard",
  fontSize: "22px",
  lineHeight: "29px",
  textAlign: "center",

  variants: {
    color: {
      green: {
        backgroundColor: "$green50",
      },
      blue: {
        backgroundColor: "$blue50",
      },
      red: {
        backgroundColor: "$red50",
      },
    },
  },
  defaultVariants: {
    color: "blue",
  },
});

export function Badge({ children, color }: BadgeProps) {
  return <StyledBadge color={color}>{children}</StyledBadge>;
}
