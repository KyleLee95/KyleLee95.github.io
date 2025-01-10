/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      normFg: "#cccccc",
      normBg: "#1f1f1f",
      darkRed: "#D16969",
      orange: "#f9ae28",
      brown: "#CE9178",
      yellow: "#DCDCAA",
      yellowOrange: "#D7BA7D",
      green: "#6A9955",
      blueGreen: "#4EC9B0",
      lightGreen: "#B5CEA8",
      blue: "#4fc1ff",
      lightBlue: "#9CDCFE",
      darkBlue: "#569CD6",
      cornflowerBlue: "#6796E6",
      darkPink: "#C586C0",
      brightPink: "#f92672",
      purple: "#ae81ff",
      white: "#ffffff",
      offWhite: "#fffff2",
      gray: "#51504f", //StatuslineNC's fg,
      gray2: "#6e7681", //LineNr (editorLineNumber.foreground),
      gray3: "#808080",
      gray4: "#9d9d9d",
      lightGray: "#D3D3D3",
      black: "#2d2d2d", //TabLine,
      black2: "#252526",
      black3: "#282828", //CursorLine (editor.lineHighlightBorder). Or use #2a2d2e (list.hoverBackground) for a brighter color,
      black4: "#181818", //Statusline,
      errorRed: "#F14C4C",
      warnYellow: "#CCA700",
      infoBlue: "#3794ff",
      hintGray: "#B0B0B0",
      okGreen: "#89d185", // color for success, so I use notebookStatusSuccessIcon.foreground,

      selectedItemBg: "#04395e",
      matchedChars: "#2aaaff",
      foldedBlue: "#212d3a", //editor.foldBackground
      floatBorderFg: "#454545",
      indentGuideFg: "#404040",
      indentGuideScopeFg: "#707070",
      labelFg: "#c8c8c8",
      tabBorderFg: "#2b2b2b",
    },
    container: {
      center: true,
    },

    extend: {},
  },
  plugins: [typography],
};
