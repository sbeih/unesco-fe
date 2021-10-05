import type { AxiosClient } from "../axiosClient";
import { TAGS_API } from "../endpoints";
import { ITag } from "../schemas";

export const getTag = async (
  axiosClient: AxiosClient,
  tagNumber: string
): Promise<ITag | undefined> => {
  try {
    const res = await axiosClient.get<ITag>(`${TAGS_API}/${tagNumber}`);
    return res.data;
  } catch (err) {
    console.error(`Tag ${tagNumber} fetch failed:`, { err });
  }
};
