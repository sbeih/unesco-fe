import { Box, Img, Text, VStack, Heading } from "@chakra-ui/react";

interface IRightProps {
  firstParagraph: string;
  secondaryTitle: string;
  secondParagraph: string;
  imageSrc: string;
}

export const Right: React.FC<IRightProps> = ({
  firstParagraph,
  secondaryTitle,
  secondParagraph,
  imageSrc,
}) => (
  <VStack width="100%" spacing="70px" alignItems="flex-start">
    <Img src={imageSrc} height={["400px", "679px"]} />
    <Text fontSize="xl" fontWeight="normal">
      {firstParagraph}
    </Text>
    <Box>
      <Heading as="h3" fontSize="2xl" fontWeight="normal" mb="37px">
        {secondaryTitle}
      </Heading>
      <Text fontSize="xl" fontWeight="normal">
        {secondParagraph}
      </Text>
    </Box>
  </VStack>
);
