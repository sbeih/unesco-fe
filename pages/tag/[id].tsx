import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { TagPageCover } from "@/components/tag";
import { categories, ICategory } from "../../mocks/city";
import { CardList } from "@/components/common/CardList";
import { PageSEO } from "@/components/common/PageSEO";
interface ICityPageProps {
  cityName: string;
  cityDescription: string;
  photoCount: string;
  videoCount: string;
  articleCount: string;
  soundCount: string;
  cityImage: string;
  categories: ICategory[];
}

const CityPage: NextPage<ICityPageProps> = ({
  cityName,
  cityDescription,
  photoCount,
  videoCount,
  articleCount,
  soundCount,
  categories,
}) => {
  return (
    <Box>
      <PageSEO title={cityName} description={cityDescription} />
      <TagPageCover
        cityName={cityName}
        cityDescription={cityDescription}
        photoCount={photoCount}
        videoCount={videoCount}
        articleCount={articleCount}
        soundCount={soundCount}
      />
      <Box mt={[12, 7]}>
        {categories.map((cat, i) => (
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

// TODO: when integrating with BE, use getStaticProps with getStaticPaths
export const getServerSideProps = async (ctx: any) => {
  return {
    // -- mocked -- //
    props: {
      cityName: "مدينة رام الله",
      cityDescription: `مدينة فلسطينية و مركز محافظة رام الله و البيرة. تقع في الضفة الغربية
      إلى الشمال من القدس بحوالي 15 كم,
      و ترتفع عن سطح البحر 880 متراً, و تبلغ مساحتها 5.16 كم2, كما بلغ عدد
      سكانها حوالي 998,38 نسمة`,
      photoCount: "12,039",
      videoCount: "12,039",
      articleCount: "12,039",
      soundCount: "12,039",
      categories,
      cityImage: "/images/citycover.png",
    },
  };
};

export default CityPage;
