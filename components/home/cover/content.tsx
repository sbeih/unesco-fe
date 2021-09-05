import { Box, Flex, VStack, Heading, Button } from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";

export const Content: React.FC = () => {
  return (
    <Box width={["100%", "44%"]} zIndex={1} bgColor="brand.500">
      <Flex height={["700px", "835px"]} alignItems="center">
        <VStack spacing="42px" align={["center", "flex-start"]}>
          <Heading fontSize="3xl" as="h1" fontWeight="normal">
            <FormattedMessage id="home.cover.content.title" />
          </Heading>
          <Heading as="h2" fontSize="xl" fontWeight="light" lineHeight="59px">
            <FormattedMessage id="home.cover.content.description" />
          </Heading>
          <Button variant="primary" size="lg">
            <FormattedMessage id="home.cover.content.button" />
          </Button>
        </VStack>
      </Flex>
    </Box>
  );
};
