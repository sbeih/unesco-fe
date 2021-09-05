import { Flex, Stack, Text, Img, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FormattedMessage } from "react-intl";

export const Logo: React.FC<{ inverted?: boolean }> = ({ inverted }) => {
  return (
    <Flex>
      <Link as={NextLink} href={"/"}>
        <Img
          src={inverted ? "/images/logo2.png" : "/images/logo.png"}
          alt="logo"
          htmlWidth={"80px"}
          htmlHeight={"95px"}
          cursor="pointer"
        />
      </Link>
      <Stack my="auto" mx={2}>
        <Text fontWeight="bold" fontSize="lg">
          <FormattedMessage id="common.nav.logo.title" />
        </Text>
        <Text fontWeight="light" fontSize="lg">
          <FormattedMessage id="common.nav.logo.subtitle" />
        </Text>
      </Stack>
    </Flex>
  );
};
