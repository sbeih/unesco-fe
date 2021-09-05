import type { NextPage } from "next";
import { VStack } from "@chakra-ui/layout";
import { HomeCover } from "@/components/home/";
import { CardList } from "@/components/common/CardList";
import {
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
} from "../mocks/home";

interface IHomeProps {
  section1: any[];
  section2: any[];
  section3: any[];
  section4: any[];
  section5: any[];
  section6: any[];
}

const Home: NextPage<IHomeProps> = ({
  section1,
  section2,
  section3,
  section4,
  section5,
  section6,
}) => {
  return (
    <div>
      <HomeCover />
      <VStack spacing={16}>
        <CardList
          cards={section1}
          title="التطريز"
          subtitle="الفن الشعبي التراثي المتألق"
        />
        <CardList
          cards={section2}
          title="الدبكة"
          subtitle="يصطف الراقصون إما على شكل صف أو على شكل قوس او دائرة. يكون الراقصون من الذكور و الاناث,"
        />
        <CardList
          cards={section3}
          title="الألعاب الحركية"
          subtitle="الألعاب الشعبية الفلسطينية أحد المظار الثقافية الفلسطينية"
        />
        <CardList
          cards={section4}
          title="الزيتون"
          subtitle="موسم قطف الزيتون"
        />
        <CardList
          cards={section5}
          title="المسخن"
          subtitle="من اكثر الاطباق أطباق فلسطين الشعبية شهرة المسخن مع الدجاج"
        />
        <CardList
          cards={section6}
          title="النقش على المعادن"
          subtitle="الفن الشعبي التراثي المتألق"
        />
      </VStack>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      section1,
      section2,
      section3,
      section4,
      section5,
      section6,
    },
  };
};

export default Home;
