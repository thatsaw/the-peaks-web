import type { QueryClient } from "@tanstack/react-query";
import { LoaderFunctionArgs } from "react-router-dom";
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

export type Params = {
  orderBy: "newest" | "oldest" | "relevance" | string;
};

export async function contentList({ orderBy }: Params) {
  const pageSize = 8;

  const sections = {
    news: "news",
    categories: "sport|culture|lifeandstyle",
  };

  const url = `https://content.guardianapis.com/search?api-key=${
    import.meta.env.VITE_API_KEY
  }&show-fields=thumbnail,headline,trailText&page-size=${pageSize}&order-by=${orderBy}`;

  const top: Content = await fetcher({
    url: `${url}&section=${sections.news}`,
  });

  const categories: Content = await fetcher({
    url: `${url}&section=${sections.categories}`,
  });

  return { top, categories };
}

export function contentListQuery(params: Params) {
  return {
    queryKey: ["content", "list", JSON.stringify(params) ?? "all"],
    queryFn: () => contentList(params),
  };
}

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const orderBy = url.searchParams.get("order-by");

    const params = {
      orderBy: orderBy || "newest",
    };

    if (!queryClient.getQueryData(contentListQuery(params).queryKey)) {
      await queryClient.fetchQuery(contentListQuery(params));
    }

    return { params };
  };
