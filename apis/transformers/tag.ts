import { ITag } from "../schemas";
import { ICityPageProps } from "pages/tag/[id]";

export const tagTransformer = (tag: ITag): ICityPageProps => {
  return {
    cityName: tag.name,
    cityDescription: tag.description,
    photoCount: tag.images?.length.toString(),
    videoCount: tag.videos?.length.toString(),
    articleCount: tag.audios?.length.toString(),
    soundCount: tag.audios?.length.toString(),
    cityImage: tag.images?.[0],
  };
};
