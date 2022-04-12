import "@material-ui/core/styles";

declare module "@material-ui/core/styles/createPalette" {
  interface Palette {
    orange?: Palette["primary"];
    textSecondary?: Palette["primary"];
  }
  interface PaletteOptions {
    orange?: PaletteOptions["primary"];
    textSecondary?: PaletteOptions["primary"];
  }
}
declare module "@material-ui/core/styles/createTypography" {
  interface TypographyOptions {
    color?:
      | "initial"
      | "inherit"
      | "primary"
      | "secondary"
      | "textPrimary"
      | "textSecondary"
      | "orange"
      | "error";
  }
  interface Typography {
    color?:
      | "initial"
      | "inherit"
      | "primary"
      | "secondary"
      | "textPrimary"
      | "textSecondary"
      | "orange"
      | "error";
  }
}
