import {
  Box,
  Flex,
  VStack,
  Heading,
  Button,
  Text,
  Link,
  Image,
} from "@chakra-ui/react";
import { FormattedMessage } from "react-intl";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Vector } from "@/icons/index";
import { useState } from "react";

export const Cover: React.FC = () => {
  return (
    <Flex width="100%" height="794px">
      <Content />
      <GradiantDivider />
      <MapImage />
    </Flex>
  );
};

const Content: React.FC = () => {
  return (
    <Box width={{ lg: "44%", md: "100%" }} zIndex={1} bgColor="brand.500">
      <Flex height="835px" alignItems="center">
        <VStack spacing="42px" align={["center", "flex-start"]}>
          <Heading
            fontSize="3xl"
            as="h1"
            fontWeight="normal"
            textAlign={["center", "start"]}
          >
            <FormattedMessage id="home.cover.content.title" />
          </Heading>
          <Heading
            as="h2"
            fontSize="xl"
            fontWeight="light"
            lineHeight="59px"
            textAlign={["center", "start"]}
          >
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
      height="950px"
      width="20%"
      zIndex={1}
    ></Box>
  );
};

const MapImage: React.FC = () => {
  return (
    <Box
      width={"1246px"}
      position="absolute"
      left="-109px"
      height="774px"
      overflow="hidden"
      display={["none", "block"]}
    >
      <TransformWrapper
        velocityAnimation={{ disabled: true }}
        panning={{ velocityDisabled: true }}
        alignmentAnimation={{ disabled: true }}
      >
        <TransformComponent>
          <Box
            position="absolute"
            width="2040px"
            height="942px"
            left="-262px"
            top="60px"
            background="linear-gradient(180deg, rgba(240, 240, 237, 0) 0%, #F0F0ED 100%)"
          />
          <Image
            src="/images/map.png"
            width="2040px"
            height="1115px"
            alt="map"
          />
          <MapItem cityResourceString="map.Nablus" left="808px" top="140px" />
          <MapItem cityResourceString="map.Ramallah" left="682px" top="340px" />
          <MapItem
            cityResourceString="map.jerusalem"
            left="736px"
            top="445px"
          />
          <MapItem cityResourceString="map.hepron" left="618px" top="632px" />
          <MapItem cityResourceString="map.Gaza" left="101px" top="601px" />
          <MapItem cityResourceString="map.Khan" left="10px" top="775px" />
        </TransformComponent>
      </TransformWrapper>
    </Box>
  );
};

const MapItem = ({
  cityResourceString,
  top,
  left,
}: {
  cityResourceString: string;
  top: string;
  left: string;
}) => {
  const [hovered, SetHovered] = useState(false);
  return (
    <Box left={left} position="absolute" top={top}>
      <Link href="/city/1">
        <Flex
          position="relative"
          zIndex={1}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="64px"
          height="64px"
          onMouseEnter={() => {
            SetHovered(true);
          }}
          onMouseLeave={() => {
            SetHovered(false);
          }}
        >
          {hovered && (
            <Box
              width="64px"
              height="64px"
              zIndex="0"
              position="absolute"
              top="-20px"
              left="-3px"
              backgroundColor="black"
              borderRadius="32px"
            />
          )}
          <Flex zIndex={1}>
            <Vector color={hovered ? "white" : undefined} />
          </Flex>
          <Text fontSize="md" lineHeight="" marginTop={"18px"}>
            <FormattedMessage id={cityResourceString} />
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
