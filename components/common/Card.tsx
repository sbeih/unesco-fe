import { VStack, Box, Flex, Text, Img } from "@chakra-ui/react";
import { LocationIcon } from "@/icons/index";

export interface ICardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  cityName: string;
}

export const Card: React.FC<ICardProps> = ({
  imageSrc,
  title,
  subtitle,
  cityName,
}) => {
  return (
    <Box>
      <VStack spacing={4} alignItems="flex-start">
        <Box>
          <Img src={imageSrc} alt={title} />
        </Box>
        <Text fontSize="xl" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="md" fontWeight="light">
          {subtitle}
        </Text>
      </VStack>
      <Flex width="100%" justifyContent="flex-end" mt={14}>
        <LocationIcon />
        <Text fontSize="sm" fontWeight="bold" mr={3}>
          {cityName}
        </Text>
      </Flex>
    </Box>
  );
};
