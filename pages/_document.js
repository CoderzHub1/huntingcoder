import { Html, Head, Main, NextScript } from "next/document";
import useThemeDetector from "./api/themeDetector";

export default function Document() {
  const faviconDirectory = `favicon.ico`
  return (
    <Html lang="en">
      <Head><link rel="shortcut icon" href={`/${faviconDirectory}`} type="image/x-icon" /></Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
