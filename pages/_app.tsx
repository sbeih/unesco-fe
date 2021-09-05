import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "components/common/layout/";
import { IntlProvider } from "react-intl";
import messages_ar from "@/translations/ar.json";
import messages_en from "@/translations/en.json";
import { useRouter } from "next/router";
import customTheme from '@/styles/theme'

const messages: any = {
  ar: messages_ar,
  en: messages_en
}

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
