import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const LanguageSwitcher: React.FC = () => {
  const { locale, asPath } = useRouter();
  return (
    <NextLink href={asPath} locale={locale === "ar" ? "en" : "ar"}>
      <Button variant="white" size="md" color="brand.100">
        {locale === "ar" ? "English" : "عربي"}
      </Button>
    </NextLink>
  );
};
