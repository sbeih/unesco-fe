import { Status, PubType, ITag, IMedia } from "./common";

export type IFormattedTagValue = {
  label: string;
  value: number;
};

export type IFormattedTag = {
  [key: string]: IFormattedTagValue[];
};

export interface IPublication {
  id: number;
  title: string;
  body: string;
  status: Status;
  type: PubType;
  category: ITag;
  unIdentifier: string;
  formattedTags: IFormattedTag;
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
