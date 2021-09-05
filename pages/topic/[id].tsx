import type { NextPage } from "next";
import { Box, Heading, Img, Text, VStack } from "@chakra-ui/react";
import { TopicLayout } from "@/components/topic";
import { CardList } from "@/components/common/CardList";
import { FormattedMessage } from "react-intl";
import {
  title,
  firstParagraph,
  secondaryTitle,
  secondParagraph,
  relatedTopics,
} from "mocks/topic";

// TODO: next Image as chakra Img
// TODO: images links as mocks, not in public folder
interface ITopicPageProps {
  title: string;
  firstParagraph: string;
  secondaryTitle: string;
  secondParagraph: string;
  relatedTopics: any; //TODO: better mocks (any)
}

const TopicPage: NextPage<ITopicPageProps> = ({
  title,
  firstParagraph,
  secondaryTitle,
  secondParagraph,
  relatedTopics,
}) => {
  return (
    <Box width="100%">
      <Heading as="h1" fontSize="3xl" fontWeight="normal" my="48px">
        {title}
      </Heading>
      <TopicLayout
        left={<Left cards={relatedTopics} />}
        right={
          <Right
            firstParagraph={firstParagraph}
            secondaryTitle={secondaryTitle}
            secondParagraph={secondParagraph}
          />
        }
      />
    </Box>
  );
};

//TODO: no any - better props
const Left: React.FC<any> = ({ cards }) => (
  <Box width="100%">
    <Img src="/images/topic2.png" height="679px" />
    <Text fontSize="3xl" fontWeight="normal" mt="50px">
      <FormattedMessage id="topic.related-topics" />
    </Text>
    <CardList cards={cards} columns={1} />
  </Box>
);

const Right: React.FC<any> = ({
  firstParagraph,
  secondaryTitle,
  secondParagraph,
}) => (
  <VStack width="100%" spacing="70px" alignItems="flex-start">
    <Img src="/images/topic1.png" height="679px" />
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

export const getServerSideProps = async () => {
  return {
    props: {
      // -- mocked -- //
      title,
      firstParagraph,
      secondaryTitle,
      secondParagraph,
      relatedTopics,
    },
  };
};

export default TopicPage;
