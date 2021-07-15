import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
        font-family: 'Mulish', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.ELBlue};
    border: 3px solid ${props => props.theme.ELBlue};
  }
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.ELBlue} transparent;
  crollbar-track: hidden;
    }
`;

export const defaultTheme = {
  // Colors
  ELBlue: "#006293",
  ELGreen: "#016C1F",
  ELWhite: "#FFFFFF",
  AccentGray: "#C5C5C5",
  BackgroundLightGrey: "#F5F5F5",
  TableBlue: "#659FD3",
  SlightlyBlack: "#474747",
  BorderColor: "#BDBDBD",
  InputFieldColor: "#EAEAEA",

  

  // Linear Gradients

  // Box Shadows
  BoxShadowWidget: "4px 4px 4px rgba(105, 105, 105, 0.25)",
  // Sizes

  // Text Size
  textSizeL: "36px",
  textSizeSecondTitle: "28px",
  textSizeStandardInput: "22px",
  textSizeM: "20px",
  textSizePostName: "18px",
  textSizeDefault: "16px",
  textSizeS: "14px",
  textSizeXS: "12px",

  // Text Weight
  textWeightThin: "300",
  textWeightRegular: "400",
  textWeightMedium: "500",
  textWeightBold: "700",
};
