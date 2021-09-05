import NextDocument, { Html, Head, Main, NextScript } from "next/document";

class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    return await NextDocument.getInitialProps(ctx);
  }
  render() {
    const { locale } = this.props.__NEXT_DATA__;

    const dir = locale === "ar" ? "rtl" : "ltr";
    return (
      <Html dir={dir} lang={locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default Document;
