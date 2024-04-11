// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';
import Navbar from './components/navbar';
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Prefetch the font */}
          <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Navbar></Navbar>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
