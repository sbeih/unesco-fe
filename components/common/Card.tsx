import { VStack, Box, Flex, Text, Img, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { LocationIcon } from "@/icons/index";

export interface ICardProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  cityName: string;
  href: string;
  citylink: string;
}

export const Card: React.FC<ICardProps> = ({
  imageSrc,
  title,
  subtitle,
  cityName,
  href,
  citylink,
}) => {
  return (
    <Link as={NextLink} href={href}>
      <Box>
        <VStack
          spacing={4}
          alignItems={["center", "flex-start"]}
          cursor="pointer"
        >
          <Box>
            <Img src={imageSrc} alt={title} height="328px" />
          </Box>
          <Text fontSize="xl" fontWeight="bold">
            {title}
          </Text>
          <Text
            fontSize="md"
            fontWeight="light"
            noOfLines={2}
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </VStack>
        <Link as={NextLink} href={citylink}>
          <Flex width="100%" justifyContent="flex-end" mt={14} cursor="pointer">
            <LocationIcon />
            <Text fontSize="sm" fontWeight="bold" ms={3}>
              {cityName}
            </Text>
          </Flex>
        </Link>
      </Box>
    </Link>
  );
};
