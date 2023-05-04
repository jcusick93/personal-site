import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

type GlobalThemeProps = {
  theme: Theme;
};

export interface Theme extends DefaultTheme {
  // backgrounds
  backgroundNeutral: string;
  backgroundPrimary: string;

  // foregrounds
  color: string;
  foregroundPrimary: string;
  foregroundNeutral: string;
}

export const GlobalStyles = createGlobalStyle<GlobalThemeProps>`
  body {
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundNeutral};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export const lightTheme: Theme = {
  backgroundPrimary: "red",
  foregroundPrimary: "red",
  backgroundNeutral: "white",
  foregroundNeutral: "#0d1117",
  color: "#121620",
};

export const darkTheme: Theme = {
  backgroundPrimary: "red",
  foregroundPrimary: "red",
  backgroundNeutral: "#0d1117",
  foregroundNeutral: "white",
  color: "#f1f1f1",
};
