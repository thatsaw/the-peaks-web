import { Link, useLoaderData } from "react-router-dom";
import { useQuery, useIsFetching } from "@tanstack/react-query";
import { Heading } from "../components/Heading";
import { Card } from "../components/Card";
import { Spinner } from "../components/Spinner";
import { searchListQuery } from "../api/search";
import styles from "./Search.module.css";

type LoaderData = {
  q?: string;
};

export function Search() {
  const { q } = useLoaderData() as LoaderData;
  const { data: search, isLoading } = useQuery(searchListQuery(q));
  const searching = useIsFetching(["search", "list"]) > 0;

  return isLoading ? (
    <div className={styles.plain}>
      <Spinner />
    </div>
  ) : (
    <div className={styles.wrapper}>
      <Heading text={`Search result${searching ? "..." : ""}`} />
      {search?.search.response.results.length ? (
        <ul className={styles.container}>
          {search.search.response.results.map((result) => (
            <li key={result.id}>
              <Link to={`/p/${encodeURIComponent(result.id)}`}>
                <Card {...result.fields} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>
          <i>No results</i>
        </p>
      )}
    </div>
  );
}
