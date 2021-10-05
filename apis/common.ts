import {
  QueryClient,
  useQuery as useReactQuery,
  UseQueryResult,
} from "react-query";
import { dehydrate } from "react-query/hydration";
import { useAxiosClient, getAxiosClient } from "./axiosClient";

type GetHydratedProps = (queryKey: any, callback: any, otherProps?: any) => any;

export const getHydratedProps: GetHydratedProps = async (
  queryKey,
  callback,
  otherProps = {}
) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(queryKey, () => callback(getAxiosClient()));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      ...otherProps,
    },
  };
};

type QueryResult<TData, TFData> = {
  transformed?: TFData;
} & UseQueryResult<TData>;

export const useQuery = <TData, TFData = any>(
  key: any,
  callback: any,
  transformer?: (data: TData) => TFData
) => {
  let results: QueryResult<TData, TFData>;

  const axiosClient = useAxiosClient();
  const queryFunction = () => callback(axiosClient);

  const queryResults = useReactQuery<any, any, TData>(key, queryFunction);
  results = { ...queryResults };

  if (transformer && results.data) {
    results.transformed = transformer(queryResults.data!);
  }
  return results;
};
