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
        thumbnail: string;
      };
      isHosted: boolean;
      pillarId: string;
      pillarName: string;
    }[];
  };
};

export async function contentList(q?: string) {
  let pageSize = 8;

  const top: Content = await fetcher({
    url: `https://content.guardianapis.com/search?q=${q}&api-key=${
      import.meta.env.VITE_API_KEY
    }&show-fields=thumbnail&page-size=${pageSize}`,
  });

  q = "sports";
  pageSize = 3;

  const sports: Content = await fetcher({
    url: `https://content.guardianapis.com/search?q=${q}&api-key=${
      import.meta.env.VITE_API_KEY
    }&show-fields=thumbnail&page-size=${pageSize}`,
  });

  return { top, sports };
}

export function contentListQuery(q?: string) {
  return {
    queryKey: ["content", "list", q ?? "all"],
    queryFn: () => contentList(q),
  };
}

export const loader =
  (queryClient: QueryClient) =>
  // TODO: Replace any with a type
  async ({ request }: any) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");

    if (q && !queryClient.getQueryData(contentListQuery(q).queryKey)) {
      await queryClient.fetchQuery(contentListQuery(q));
    }

    return { q };
  };
