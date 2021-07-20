import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
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
    scrollbar-track: hidden;
  }
`;

export const defaultTheme = {
  // Colors
  ELBlue: "#006293",
  ELGreen: "#016C1F",
  ELWhite: "#FFFFFF",
  MBGreen: "#8bc34a",
  AccentGray: "#C5C5C5",
  BackgroundLightGrey: "#F5F5F5",
  TableBlue: "#659FD3",
  SlightlyBlack: "#474747",
  InputFieldColor: "#EAEAEA",

  // Card Styling
  CardBackColor: '#FFFFFF',
  BorderColor: "#BDBDBD",
  MainFontColor: '#006293',
  DataFontColor: 'black',
  AccentFontColor: '#C5C5C5',
  DataSVGColor: '#006293',
  BoxShadowWidget: "5px 5px 26px 1px rgba(0,0,0,0.06)",
  CardBorderRadius: '5px',
  CardWidthPercent: '85%',
  CardBorder: 'none',

  //Menu bar styling
  MBLinkColor: '#4DB7FE',
  MBLinkActiveColor: '#8bc34a',
  MBBackground: '#1a1a1a',

  //Header bar styling
  HeaderBackColor: '#006293',
  HeaderTextColor: '#FFFFFF',


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
