import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face {
    font-family: 'Mercury G2';
    src: url("/fonts/MercuryG2.otf");
  }

  @font-face {
    font-family: 'Ideal Sans';
    font-weight: 400;
    font-style: normal;
    src: url("/fonts/IdealSans-Light-Pro.otf")
  }

  @font-face {
    font-family: 'Ideal Sans';
    font-weight: 400;
    font-style: italic;
    src: url("/fonts/IdealSans-LightItalic-Pro.otf")
  }

  @font-face {
    font-family: 'Ideal Sans';
    font-weight: 500;
    font-style: normal;
    src: url("/fonts/IdealSans-Book-Pro.otf")
  }

  @font-face {
    font-family: 'Ideal Sans';
    font-weight: 500;
    font-style: italic;
    src: url("/fonts/IdealSans-BookItalic-Pro.otf")
  }

  @font-face {
    font-family: 'Ideal Sans';
    font-weight: 600;
    font-style: normal;
    src: url("/fonts/IdealSans-Medium-Pro.otf")
  }

  @font-face {
    font-family: 'Ideal Sans';
    font-weight: 600;
    font-style: italic;
    src: url("/fonts/IdealSans-MediumItalic-Pro.otf")
  }

  @font-face {
    font-family: 'Ideal Sans';
    font-weight: 700;
    font-style: normal;
    src: url("/fonts/IdealSans-Semibold-Pro.otf")
  }

  @font-face {
    font-family: 'Ideal Sans';
    font-weight: 800;
    font-style: normal;
    src: url("/fonts/IdealSans-Bold-Pro.otf")
  }

  *,
  &::before,
  &::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Ideal Sans", sans-serif;
    font-weight: 500;
  }

  a{
    text-decoration: none;
  }
`;
