import { Box, Img, Text } from "@chakra-ui/react";
import { ITopicType } from "../../mocks/topic";
import { FormattedMessage } from "react-intl";
import { CardList } from "@/components/common/CardList";

interface ILeftProps {
  cards: ITopicType[];
  imageSrc: string;
}

export const Left: React.FC<ILeftProps> = ({ cards, imageSrc }) => (
  <Box width="100%">
    <Img src={imageSrc} height="679px" />
    <Text fontSize="3xl" fontWeight="normal" my="50px">
      <FormattedMessage id="topic.related-topics" />
    </Text>
    <CardList cards={cards} columns={1} />
  </Box>
);
