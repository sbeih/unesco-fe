import { Box, Flex, VStack, Heading, Button, Img } from "@chakra-ui/react";
import Draggable from "react-draggable";
import { FormattedMessage } from "react-intl";

export const Cover: React.FC = () => {
  return (
    <Flex width="100%">
      <Content />
      <GradiantDivider />
      {/* <MapImage /> */}
    </Flex>
  );
};

const Content: React.FC = () => {
  return (
    <Box width="38%" zIndex={1} bgColor="brand.500">
      <Flex height="835px" alignItems="center">
        <VStack spacing={"42px"} align="flex-start">
          <Heading fontSize="3xl" as="h1" fontWeight="normal">
            <FormattedMessage id="home.cover.content.title" />
          </Heading>
          <Heading as="h2" fontSize="xl" fontWeight="light">
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

const GradiantDivider: React.FC = () => {
  return (
    <Box
      bgGradient="linear-gradient(264.72deg, #F0F0ED 12.7%, rgba(240, 240, 237, 0) 82.08%)"
      height="1080px"
      width="20%"
      zIndex={1}
    ></Box>
  );
};

const MapImage: React.FC = () => {
  return (
    <Box width={"2340px"} position="absolute">
      <Draggable axis="x" bounds="parent">
        <Box left="-250px">
          <Img
            src="/images/map.png"
            width="2040px"
            height="1115px"
            alt="map"
          />
        </Box>
      </Draggable>
    </Box>
  );
};
