import type { QueryClient } from "@tanstack/react-query";
import { fetcher } from "../utils/fetcher";

export type Content = {
  response: {
    status: string;
    userTier: string;
    total: number;
    startIndex: number;
    pageSize: number;
    currentPage: number;
    pages: number;
    orderBy: string;
    results: {
      id: string;
      type: string;
      sectionId: string;
      sectionName: string;
      webPublicationDate: string;
      webTitle: string;
      webUrl: string;
      apiUrl: string;
      fields: {
        headline: string;
        trailText: string;
        thumbnail: string;
      };
      isHosted: boolean;
      pillarId: string;
      pillarName: string;
    }[];
  };
};

export async function contentList() {
  let pageSize = 8;

  const url = `https://content.guardianapis.com/search?api-key=${
    import.meta.env.VITE_API_KEY
  }&show-fields=thumbnail,headline,trailText&page-size=${pageSize}`;

  const top: Content = await fetcher({
    url,
  });

  const sections = {
    sport: "sport",
  };

  pageSize = 3;

  const sports: Content = await fetcher({
    url: `${url}&section=${sections.sport}`,
  });

  return { top, sports };
}

export function contentListQuery() {
  return {
    queryKey: ["content", "list", "all"],
    queryFn: () => contentList(),
  };
}

export const loader = (queryClient: QueryClient) => async () => {
  if (!queryClient.getQueryData(contentListQuery().queryKey)) {
    await queryClient.fetchQuery(contentListQuery());
  }

  const query = contentListQuery();

  return (
    queryClient.getQueryData(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
