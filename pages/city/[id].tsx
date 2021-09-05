import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import { CityCover } from "@/components/city";
import { section1 } from "../../mocks/city";
import { CardList } from "@/components/common/CardList";

interface ICityPageProps {
  cityName: string;
  cityDescription: string;
  photoCount: string;
  videoCount: string;
  articleCount: string;
  soundCount: string;
  section1: any; // TODO: better mocks
}

const CityPage: NextPage<ICityPageProps> = ({
  cityName,
  cityDescription,
  photoCount,
  videoCount,
  articleCount,
  soundCount,
}) => {
  console.log({
    cityName,
    cityDescription,
    photoCount,
    videoCount,
    articleCount,
    soundCount,
  });
  return (
    <Box>
      <CityCover
        cityName={cityName}
        cityDescription={cityDescription}
        photoCount={photoCount}
        videoCount={videoCount}
        articleCount={articleCount}
        soundCount={soundCount}
      />
      <CardList
          cards={section1}
          title="التطريز"
          subtitle="الفن الشعبي التراثي المتألق"
        />
      <CardList
          cards={section1}
          title="التطريز"
          subtitle="الفن الشعبي التراثي المتألق"
        />
      <CardList
          cards={section1}
          title="التطريز"
          subtitle="الفن الشعبي التراثي المتألق"
        />
      <CardList
          cards={section1}
          title="التطريز"
          subtitle="الفن الشعبي التراثي المتألق"
        />
      <CardList
          cards={section1}
          title="التطريز"
          subtitle="الفن الشعبي التراثي المتألق"
        />
      <CardList
          cards={section1}
          title="التطريز"
          subtitle="الفن الشعبي التراثي المتألق"
        />
    </Box>
  );
};

export const getServerSideProps = async (ctx: any) => {
  return {
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
      section1
    },
  };
};

export default CityPage;
