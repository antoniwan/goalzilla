import { createGlobalStyle } from "styled-components";
import typography from "../utils/typography";

const typographyCSS = typography.toString();

const GlobalStyles = createGlobalStyle`
  ${typographyCSS}
`;

export default GlobalStyles;
