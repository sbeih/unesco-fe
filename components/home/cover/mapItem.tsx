import * as React from "react";
import { Box, Link, Flex, Text } from "@chakra-ui/react";
import { Vector } from "@/icons/index";
import { FormattedMessage } from "react-intl";

interface IMapItemProps {
  cityResourceString: string;
  top: string;
  left: string;
  href: string;
}

export const MapItem: React.FC<IMapItemProps> = ({
  cityResourceString,
  top,
  left,
  href,
}) => {
  const [hovered, SetHovered] = React.useState(false);
  return (
    <Box left={left} position="absolute" top={top}>
      <Link href={href}>
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
          <Text fontSize="md" marginTop={"18px"}>
            <FormattedMessage id={cityResourceString} />
          </Text>
        </Flex>
      </Link>
    </Box>
  );
};
