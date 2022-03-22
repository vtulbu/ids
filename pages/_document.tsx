import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/MercuryG2.otf"
            as="font"
            crossOrigin=""
            type="font/otf"
          />
          <link
            rel="preload"
            href="/fonts/IdealSans-Light-Pro.otf"
            as="font"
            crossOrigin=""
            type="font/otf"
          />
          <link
            rel="preload"
            href="/fonts/IdealSans-LightItalic-Pro.otf"
            as="font"
            crossOrigin=""
            type="font/otf"
          />
          <link
            rel="preload"
            href="/fonts/IdealSans-Book-Pro.otf"
            as="font"
            crossOrigin=""
            type="font/otf"
          />
          <link
            rel="preload"
            href="/fonts/IdealSans-BookItalic-Pro.otf"
            as="font"
            crossOrigin=""
            type="font/otf"
          />
          <link
            rel="preload"
            href="/fonts/IdealSans-Medium-Pro.otf"
            as="font"
            crossOrigin=""
            type="font/otf"
          />
          <link
            rel="preload"
            href="/fonts/IdealSans-MediumItalic-Pro.otf"
            as="font"
            crossOrigin=""
            type="font/otf"
          />
          <link
            rel="preload"
            href="/fonts/IdealSans-Semibold-Pro.otf"
            as="font"
            crossOrigin=""
            type="font/otf"
          />
          <link
            rel="preload"
            href="/fonts/IdealSans-Bold-Pro.otf"
            as="font"
            crossOrigin=""
            type="font/otf"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
