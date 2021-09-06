import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "components/common/layout/";
import { IntlProvider } from "react-intl";
import { useRouter } from "next/router";
import customTheme from "@/styles/theme";
import messages_ar from "@/translations/ar.json";
import messages_en from "@/translations/en.json";
import messages_fr from "@/translations/en.json";
import "@fontsource/almarai/300.css";
import "@fontsource/almarai/400.css";
import "@fontsource/almarai/700.css";

const messages: any = {
  ar: messages_ar,
  en: messages_en,
  fr: messages_fr,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  return (
    <ChakraProvider theme={customTheme(locale!)}>
      <IntlProvider locale={locale!} messages={messages[locale!]}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </IntlProvider>
    </ChakraProvider>
  );
}
export default MyApp;
