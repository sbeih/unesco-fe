import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { TagPageCover } from "@/components/tag";
import { categories, ICategory } from "../../mocks/city";
import { CardList } from "@/components/common/CardList";
import { PageSEO } from "@/components/common/PageSEO";
import { useRouter } from "next/router";
import { getHydratedProps, useQuery } from "@/apis/common";
import { ITag } from "@/apis/schemas";
import { getTag } from "@/apis/queries";
import { tagTransformer } from "@/apis/transformers";
export interface ICityPageProps {
  cityName: string;
  cityDescription: string;
  photoCount: string;
  videoCount: string;
  articleCount: string;
  soundCount: string;
  cityImage: string;
  categories?: ICategory[];
}

const CityPage: NextPage<ICityPageProps> = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: tag, transformed } = useQuery<ITag>(
    ["tag", id],
    getTag,
    tagTransformer,
    id
  );

  return (
    <Box>
      <PageSEO
        title={transformed?.cityName}
        description={transformed?.cityDescription}
      />
      <TagPageCover
        cityName={transformed?.cityName}
        cityDescription={transformed?.cityDescription}
        photoCount={transformed?.photoCount}
        videoCount={transformed?.videoCount}
        articleCount={transformed?.articleCount}
        soundCount={transformed?.soundCount}
      />
      <Box mt={[12, 7]}>
        {categories?.map((cat, i) => (
          <CardList
            key={i}
            cards={cat.topics}
            title={cat.title}
            subtitle={cat.subtitle}
          />
        ))}
      </Box>
    </Box>
  );
};

export const getStaticProps = async () => {
  const props = await getHydratedProps("tag", getTag);
  return props;
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export default CityPage;
