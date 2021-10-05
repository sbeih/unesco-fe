import type { AxiosClient } from "../axiosClient";
import { PUBLICATIONS_API } from "../endpoints";
import { IPublication } from "../schemas";

export const getPublications = async (
  axiosClient: AxiosClient
): Promise<IPublication[] | undefined> => {
  try {
    const res = await axiosClient.get<IPublication[]>(PUBLICATIONS_API);
    return res.data;
  } catch (err) {
    console.error("Publications fetch failed:", { err });
  }
};
