import { Box, VStack, Heading, Text, Img } from "@chakra-ui/react";
import { DataCountSection } from "./dataCount";

interface ICoverProps {
  cityName: string;
  cityDescription: string;
  photoCount: string;
  videoCount: string;
  articleCount: string;
  soundCount: string;
}

export const Cover: React.FC<ICoverProps> = ({
  cityName,
  cityDescription,
  photoCount,
  videoCount,
  articleCount,
  soundCount,
}) => {
  return (
    <Box height={["100%", "750px"]}>
      <Box
        zIndex={-1}
        position="absolute"
        width="100vw"
        height="100%"
        right={0}
        top={0}
      >
        <Box
          bgGradient="linear-gradient(264.72deg, #FFFFFF 12.7%, rgba(255, 255, 255, 0) 82.08%)"
          transform="rotate(-90deg)"
          opacity="0.4"
          position="absolute"
          width={"100vw"}
          height={"100vw"}
        />
        <Box
          bgGradient="linear-gradient(264.72deg, #F0F0ED 12.7%, rgba(240, 240, 237, 0) 82.08%)"
          position="absolute"
          opacity="0.4"
          transform="rotate(-90deg)"
          width={"100vw"}
          height={"100vw"}
        />
        <Img src="/images/citycover.png" zIndex={-2} width="100%" height="770px"/>
      </Box>
      <VStack
        spacing={"42px"}
        width="100%"
        height="100%"
        alignItems={["center", "flex-start"]}
        justifyContent="center"
      >
        <Heading as="h1" fontSize="3xl" fontWeight="normal">
          {cityName}
        </Heading>
        <Text
          fontSize="xl"
          fontWeight="light"
          width="68%"
          textAlign={["center", "start"]}
        >
          {cityDescription}
        </Text>
        <Box width="100%">
          <Box width="100%" mt="58px">
            <DataCountSection
              photoCount={photoCount}
              videoCount={videoCount}
              articleCount={articleCount}
              soundCount={soundCount}
            />
          </Box>
        </Box>
      </VStack>
    </Box>
  );
};
