import { Status, PubType, ITag, IMedia } from "./common";

export interface IPublication {
  id: number;
  title: string;
  body: string;
  status: Status;
  type: PubType;
  category: ITag;
  unIdentifier: string;
  formattedTags: ITag[];
  locale: string;
  created_at: string;
  updated_at: string;
  media: IMedia[];
  cover: IMedia;
  tags: ITag[];
  areas: ITag[];
  items: ITag[];
  localizations: ITag[];
}
