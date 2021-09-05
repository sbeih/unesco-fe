import type { NextPage } from "next";
import { VStack } from "@chakra-ui/layout";
import { HomeCover } from "@/components/home/";
import { CardList } from "@/components/common/CardList";
import { categories, ICategory } from "../mocks/home";

interface IHomeProps {
  categories: ICategory[];
}

const Home: NextPage<IHomeProps> = ({ categories }) => {
  return (
    <div>
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
