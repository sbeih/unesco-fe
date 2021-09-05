import { Flex, HStack, VStack, Text, Stack } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { VideoIcon, SoundIcon, PhotoIcon, ArticleIcon } from "@/icons/index";

interface IDataCountSectionProps {
  photoCount: string;
  videoCount: string;
  articleCount: string;
  soundCount: string;
}

export const DataCountSection: React.FC<IDataCountSectionProps> = ({
  photoCount,
  videoCount,
  articleCount,
  soundCount,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Stack
      direction={["column", "row"]}
      spacing={10}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      mt="58px"
    >
      <DataCount
        icon={PhotoIcon}
        title={formatMessage({ id: "city.cover.count.photo" })}
        count={photoCount}
      />
      <DataCount
        icon={ArticleIcon}
        title={formatMessage({ id: "city.cover.count.article" })}
        count={articleCount}
      />
      <DataCount
        icon={VideoIcon}
        title={formatMessage({ id: "city.cover.count.video" })}
        count={videoCount}
      />
      <DataCount
        icon={SoundIcon}
        title={formatMessage({ id: "city.cover.count.sound" })}
        count={soundCount}
      />
    </Stack>
  );
};

interface IDataCountProps {
  icon: React.FC;
  count: string;
  title: string;
}

const DataCount: React.FC<IDataCountProps> = ({ icon: Icon, count, title }) => {
  return (
    <HStack spacing="28px">
      <Icon />
      <VStack spacing={1} alignItems="flex-start">
        <Text fontSize="4xl" fontWeight="normal" lineHeight="none">
          {count}
        </Text>
        <Text fontSize="xl" fontWeight="light" lineHeight="none">
          {title}
        </Text>
      </VStack>
    </HStack>
  );
};
