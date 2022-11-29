import { logger } from "./logger";

type Params = {
  url: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  body?: object;
};

export async function fetcher({ url, method = "GET", body }: Params) {
  try {
    const response = await fetch(url, {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    return await response.json();
  } catch (error) {
    logger.error(error);
  }
}
