import { Flex, Box } from "@chakra-ui/react";
import { MapImage } from "./mapImage";
import { Content } from "./content";
import { GradientDivider } from "./gradientDivider";

export const Cover: React.FC = () => {
  return (
    <Flex width="100%" height={["794px"]}>
      <Content />
      <GradientDivider />
      <MapImage />
    </Flex>
  );
};
