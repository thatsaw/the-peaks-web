import type { QueryClient } from "@tanstack/react-query";
import type { LoaderFunctionArgs } from "react-router-dom";
import { fetcher } from "../utils/fetcher";

export type Content = {
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
    byline: string;
    body: string;
    publication: string;
    lastModified: Date;
    standfirst: string;
  };
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
};

export type Post = {
  response: {
    status: string;
    userTier: string;
    total: number;
    content: Content;
  };
};

export async function postGet(id: string) {
  const post: Post = await fetcher({
    url: `https://content.guardianapis.com/${id}?api-key=${
      import.meta.env.VITE_API_KEY
    }&show-fields=thumbnail,headline,trailText,byline,body,publication,lastModified,standfirst`,
  });

  return { post };
}

export function postGetQuery(id: string) {
  return {
    queryKey: ["post", "get", id],
    queryFn: () => postGet(id),
  };
}

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    if (!params.postId) throw new Error("Required postId");

    const query = postGetQuery(params.postId);

    return (
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query))
    );
  };
