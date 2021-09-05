import type { NextPage } from "next";
import { VStack } from "@chakra-ui/layout";
import { HomeCover } from "@/components/home/";
import { CardList } from "@/components/common/CardList";
import { categories, ICategory } from "../mocks/home";
import { PageSEO } from "@/components/common/PageSEO";
import { useIntl } from "react-intl";

interface IHomeProps {
  categories: ICategory[];
}

const Home: NextPage<IHomeProps> = ({ categories }) => {
  const { formatMessage } = useIntl();
  return (
    <div>
      <PageSEO
        title={formatMessage({ id: "common.nav.logo.subtitle" })}
        description={formatMessage({ id: "home.cover.content.title" })}
      />
      <HomeCover />
      <VStack spacing={16}>
        {categories.map((cat, i) => (
          <CardList
            key={i}
            cards={cat.topics}
            title={cat.title}
            subtitle={cat.subtitle}
          />
        ))}
      </VStack>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      // -- mocked -- //
      categories,
    },
  };
};

export default Home;
