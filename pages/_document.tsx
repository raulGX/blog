import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "../components/theme/themeContext";

export default class MyDocument extends Document {
  render() {
    return (
      <Html className="antialiased" lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
