import { Box, Text } from "@chakra-ui/react";
import { ITopicType } from "../../mocks/topic";
import { FormattedMessage } from "react-intl";
import { CardList } from "@/components/common/CardList";

interface ILeftProps {
  cards: ITopicType[];
}

export const Left: React.FC<ILeftProps> = ({ cards }) => (
  <Box width="100%">
    <Text fontSize="3xl" fontWeight="normal" my="50px">
      <FormattedMessage id="topic.related-topics" />
    </Text>
    <CardList cards={cards} columns={1} />
  </Box>
);
