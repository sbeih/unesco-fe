import type { NextPage } from "next";
import { VStack } from "@chakra-ui/layout";
import { HomeCover } from "@/components/home/";
import { CardList } from "@/components/common/CardList";
import { PageSEO } from "@/components/common/PageSEO";
import { getHydratedProps, useQuery } from "@/apis/common";
import { getPublications } from "@/apis/queries";
import { pubsToCategories } from "@/apis/transformers";
import { IPublication } from "@/apis/schemas";
import { ICategory } from "@/common/types";
import { useIntl } from "react-intl";

interface IHomeProps {}

const Home: NextPage<IHomeProps> = ({}) => {
  const { formatMessage } = useIntl();
  const { data: publications, transformed: categories } = useQuery<
    IPublication[],
    ICategory[]
  >("home-publications", getPublications, pubsToCategories);

  return (
    <div>
      <PageSEO
        title={formatMessage({ id: "common.nav.logo.subtitle" })}
        description={formatMessage({ id: "home.cover.content.title" })}
      />
      <HomeCover />
      <VStack spacing={16}>
        {categories?.map((cat, i) => (
          <CardList
            key={i}
            cards={cat.pubs}
            title={cat.name}
            subtitle={cat.description}
          />
        ))}
      </VStack>
    </div>
  );
};

export const getStaticProps = async () => {
  const props = await getHydratedProps("home-publications", getPublications);
  return props;
};

export default Home;
