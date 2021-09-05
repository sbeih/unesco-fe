import Image from "next/image";
import { Flex, Stack, Text, Img } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
export const Logo: React.FC = () => {
    return (
        <Flex>
          <Img src="/images/logo.png" alt="logo" width={"80px"} height={"95px"} />
          <Stack my="auto" mx={2}>
            <Text fontWeight={"bold"} fontSize={"lg"}>
              <FormattedMessage id="common.nav.logo.title" />
            </Text>
            <Text fontWeight={"light"} fontSize={"lg"}>
              <FormattedMessage id="common.nav.logo.subtitle" />
            </Text>
          </Stack>
        </Flex>
    )
};