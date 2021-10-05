import type { AxiosClient } from "../axiosClient";
import { PUBLICATIONS_API } from "../endpoints";
import { IPublication } from "../schemas";

export const getPublication = async (
  axiosClient: AxiosClient,
  publicationNumber: string
): Promise<IPublication | undefined> => {
  try {
    const res = await axiosClient.get<IPublication>(
      `${PUBLICATIONS_API}/${publicationNumber}`
    );
    return res.data;
  } catch (err) {
    console.error(`Publication ${publicationNumber} fetch failed:`, { err });
  }
};
