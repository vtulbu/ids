import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

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
