import type { NextPage } from "next";
import { PageSEO } from "@/components/common/PageSEO";
import { Box, Heading } from "@chakra-ui/react";
import { TopicLayout, Left, Right } from "@/components/topic";

import {
  title,
  firstParagraph,
  secondaryTitle,
  secondParagraph,
  relatedTopics,
  image1Src,
  image2Src,
  ITopicType,
} from "mocks/topic";

interface ITopicPageProps {
  title: string;
  firstParagraph: string;
  secondaryTitle: string;
  secondParagraph: string;
  image1Src: string;
  image2Src: string;
  relatedTopics: ITopicType[];
}

const TopicPage: NextPage<ITopicPageProps> = ({
  title,
  firstParagraph,
  secondaryTitle,
  secondParagraph,
  relatedTopics,
  image1Src,
  image2Src,
}) => {
  return (
    <Box width="100%">
      <PageSEO title={title} description={title} />
      <Heading
        as="h1"
        fontSize="3xl"
        fontWeight="normal"
        my="48px"
        w="fit-content"
      >
        {title}
      </Heading>
      <TopicLayout
        left={<Left cards={relatedTopics} imageSrc={image2Src} />}
        right={
          <Right
            imageSrc={image1Src}
            firstParagraph={firstParagraph}
            secondaryTitle={secondaryTitle}
            secondParagraph={secondParagraph}
          />
        }
      />
    </Box>
  );
};

// TODO: when integrating with BE, use getStaticProps with getStaticPaths
export const getServerSideProps = async () => {
  return {
    props: {
      // -- mocked -- //
      title,
      firstParagraph,
      secondaryTitle,
      secondParagraph,
      relatedTopics,
      image1Src,
      image2Src,
    },
  };
};

export default TopicPage;
