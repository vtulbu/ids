import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@/utils/theme/theme";
import { GlobalStyle } from "@/utils/theme/GlobalStyle";
import "@/utils/theme/fonts.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
