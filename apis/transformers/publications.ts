import { IPublication } from "../schemas";
import { PUBLICATION_PAGE, TAG_PAGE } from "@/common/routes";
import { ICategory } from "@/common/types";

export const pubsToCategories = (pubs: IPublication[]): ICategory[] => {
  // get all categories ids
  const cats = pubs?.reduce<number[]>((acc, pub) => {
    if (pub.category?.id) {
      acc.findIndex((i) => pub.category?.id == i) == -1 &&
        acc.push(pub.category.id);
    }
    return acc;
  }, []);

  // assemble categories
  const categories = cats?.reduce<ICategory[]>((acc, cat) => {
    const catPubs = pubs?.filter((pub) => pub.category?.id === cat);
    if (catPubs?.length) {
      acc.push({
        id: cat,
        name: catPubs[0].category.name,
        description: catPubs[0].category.description,
        pubs: catPubs.map((pub) => ({
          title: pub.title,
          subtitle: pub.body, // .replace(/(?:\r\n|\r|\n)/g, "<br />"),
          cityName: pub.areas[0]?.name,
          imageSrc: pub.cover?.previewUrl,
          href: `${PUBLICATION_PAGE}/${pub.id}`,
          citylink: `${TAG_PAGE}/${pub.areas[0]?.id}`,
        })),
      });
    }
    return acc;
  }, []);

  return categories;
};
