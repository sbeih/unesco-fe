import type { NextPage } from "next";
import { PageSEO } from "@/components/common/PageSEO";
import { Box, Heading } from "@chakra-ui/react";
import {
  PublicationPageLayout,
  Left,
  Right,
  Top,
} from "@/components/publication";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
      <PublicationPageLayout
        top={<Top images={[image1Src, image1Src]} />}
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
