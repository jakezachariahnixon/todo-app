import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Grayscale
      gray50: "#F9FAFB",
      gray100: "#F3F4F6",
      gray200: "#E5E7EB",
      gray300: "#D1D5DB",
      gray400: "#9CA3AF",
      gray500: "#6B7280",
      gray600: "#4B5563",
      gray700: "#374151",
      gray800: "#1F2937",
      gray900: "#111827",
      // Blue
      blue50: "#EFF6FF",
      blue100: "#DBEAFE",
      blue200: "#BFDBFE",
      blue300: "#93C5FD",
      blue400: "#60A5FA",
      blue500: "#3B82F6",
      blue600: "#2563EB",
      blue700: "#1D4ED8",
      blue800: "#1E40AF",
      blue900: "#1E3A8A",
      // Green
      green50: "#ECFDF5",
      green100: "#D1FAE5",
      green200: "#A7F3D0",
      green300: "#6EE7B7",
      green400: "#34D399",
      green500: "#10B981",
      green600: "#059669",
      green700: "#047857",
      green800: "#065F46",
      green900: "#064E3B",
      // Red
      red50: "#FEF2F2",
      red100: "#FEE2E2",
      red200: "#FECACA",
      red300: "#FCA5A5",
      red400: "#F87171",
      red500: "#EF4444",
      red600: "#DC2626",
      red700: "#B91C1C",
      red800: "#991B1B",
      red900: "#7F1D1D",
    },
    space: {},
    fonts: {
      mainFont: '"IBM Plex Sans", sans-serif',
    },
    fontSizes: {},
    fontWeights: {
      light: "100",
      standard: "300",
      bold: "500",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      rounded: "5px",
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {},
  utils: {
    px: (value: any) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: any) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});

globalCss({
  "@font-face": {
    fontFamily: "IBM Plex Sans",
    src:
      "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap",
  },
  body: {
    margin: 0,
  },
});
