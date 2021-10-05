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
import { getPublication } from "@/apis/queries";
import { ITopicType } from "mocks/topic";
import { IPublication } from "@/apis/schemas";
import { getHydratedProps, useQuery } from "@/apis/common";
import { useRouter } from "next/router";
import { publicationTransformer } from "@/apis/transformers/publication";

export interface ITopicPageProps {
  title: string;
  firstParagraph: string;
  image1Src: string;
  image2Src?: string;
  relatedTopics?: ITopicType[];
  secondaryTitle?: string;
  secondParagraph?: string;
}

const TopicPage: NextPage<ITopicPageProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: publication, transformed } = useQuery<IPublication>(
    ["publication", id],
    getPublication,
    publicationTransformer,
    id
  );

  return (
    <Box width="100%">
      <PageSEO title={transformed?.title} description={transformed?.title} />
      <Heading
        as="h1"
        fontSize="3xl"
        fontWeight="normal"
        my="48px"
        w="fit-content"
      >
        {transformed?.title}
      </Heading>
      <PublicationPageLayout
        top={<Top images={[transformed?.image1Src, transformed?.image1Src]} />}
        left={
          transformed?.relatedTopics && (
            <Left cards={transformed?.relatedTopics} />
          )
        }
        right={
          <Right
            firstParagraph={transformed?.firstParagraph}
            // secondaryTitle={transformed?.secondaryTitle}
            // secondParagraph={transformed?.secondParagraph}
          />
        }
      />
    </Box>
  );
};

export const getStaticProps = async () => {
  const props = await getHydratedProps("publication", getPublication);
  return props;
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default TopicPage;
