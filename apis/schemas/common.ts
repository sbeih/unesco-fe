export enum Status {
  DRAFT = "DRAFT",
  PUBLISHED = "PUBLISHED",
  WIP = "WIP",
  DISABLED = "DISABLED",
}

export enum PubType {
  COLLECTIONS = "COLLECTIONS",
  NEWS = "NEWS",
  ITEMS = "ITEMS",
  SAVED_ITEMS = "SAVED_ITEMS",
  AGREEMENTS = "AGREEMENTS",
}

export enum TagType {
  KEYWORD = "KEYWORD",
  LOCATION = "LOCATION",
  TERM = "TERM",
  SINGULAR = "SINGULAR",
  CATEGORY = "CATEGORY",
}

export interface IMedia {
  id: string;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string;
  provider: string;
  provider_metadata: any;
  related: string;
  created_by: string;
  updated_by: string;
}

export interface ITag {
  id: number;
  name: string;
  description: string;
  images: string[];
  videos: string[];
  audios: string[];
  docs: string[];
  type: any;
  tags: string[];
  tag_parent: string[];
  parent_id: string;
  relatives: string[];
  localizations: string[];
  locale: string;
  published_at: string;
  created_by: string;
  updated_by: string;
}
