import { IPublication } from "../schemas";
import { ITopicPageProps } from "../../pages/publication/[id]";
import { IFormattedTag, IFormattedTagValue } from "../schemas/publications";
import { TAG_PAGE } from "@/common/routes";

export const publicationTransformer = (pub: IPublication): ITopicPageProps => {
  return {
    title: pub.title,
    firstParagraph: paragraphLinks(
      pub.body.replace(/(?:\r\n|\r|\n)/g, "<br />"),
      pub.formattedTags
    ),
    image1Src: pub.media?.[0]?.formats?.medium?.url,
    image2Src: pub.media?.[1]?.formats?.medium?.url,
  };
};

const paragraphLinks = (body: string, formattedTags: IFormattedTag): string => {
  if (!formattedTags) return body;
  Object.values(formattedTags).map((tag: IFormattedTagValue[]) => {
    return (body = body.replaceAll(
      tag[0].label.trim(),
      `<a style="cursor: pointer; color: blue" href=${TAG_PAGE}/${tag[0].value}>${tag[0].label}</a>`
    ));
  });
  return body;
};
