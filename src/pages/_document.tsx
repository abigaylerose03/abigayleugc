// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-ab-page">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
