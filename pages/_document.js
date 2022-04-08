import { Html, Head, Main, NextScript } from "next/document";

const GAPI_KEY = "AIzaSyA00OVCytOS2w9Zl3K7uZZFGAYUPJqXVVQ";

export default function Document() {
  return (
    <Html>
      <Head>
        <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
