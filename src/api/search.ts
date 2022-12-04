import type { QueryClient } from "@tanstack/react-query";
import type { LoaderFunctionArgs } from "react-router-dom";
import type { Content } from "./content";
import { fetcher } from "../utils/fetcher";

export async function searchList(q?: string) {
  const pageSize = 15;

  const search: Content = await fetcher({
    url: `https://content.guardianapis.com/search?q=${q}&api-key=${
      import.meta.env.VITE_API_KEY
    }&show-fields=thumbnail,headline,trailText&page-size=${pageSize}`,
  });

  return { search };
}

export function searchListQuery(q?: string) {
  return {
    queryKey: ["search", "list", q ?? "all"],
    queryFn: () => searchList(q),
  };
}

export const loader =
  (queryClient: QueryClient) =>
  async ({ request }: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");

    if (q && !queryClient.getQueryData(searchListQuery(q).queryKey)) {
      await queryClient.fetchQuery(searchListQuery(q));
    }

    return { q };
  };
