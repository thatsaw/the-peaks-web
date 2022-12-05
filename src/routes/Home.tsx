import { useQuery } from "@tanstack/react-query";
import { Link, useLoaderData } from "react-router-dom";
import type { Params } from "../api/content";
import { Card } from "../components/Card";
import { Nav } from "../components/Nav";
import { Heading } from "../components/Heading";
import { Spinner } from "../components/Spinner";
import { contentListQuery } from "../api/content";
import styles from "./Home.module.css";

type LoaderData = {
  params: Params;
};

export function Home() {
  const { params } = useLoaderData() as LoaderData;
  const { data: content, isLoading } = useQuery(contentListQuery(params));

  const grid = content?.top.response.results.slice(0, 5);
  const flex = content?.top.response.results.slice(5, 8);

  // Filter results by sectionId for category based news section
  const sports = content?.categories.response.results.filter(
    (result) => result.sectionId === "sport"
  );
  const cultures = content?.categories.response.results.filter(
    (result) => result.sectionId === "culture"
  );
  const lifeandstyles = content?.categories.response.results.filter(
    (result) => result.sectionId === "lifeandstyle"
  );

  const categories = [
    { name: "Sport", results: sports },
    { name: "Culture", results: cultures },
    { name: "Lifestyle", results: lifeandstyles },
  ];

  return isLoading ? (
    <div className={styles.plain}>
      <Spinner />
    </div>
  ) : (
    <>
      <section className={styles.section}>
        <Nav heading="Top stories" />
        <div className={styles.wrapper}>
          {grid?.map((post, index) => (
            <div
              key={post.id}
              className={styles.container}
              style={{
                gridArea: `area${index + 1}`,
              }}
            >
              <Link to={`p/${encodeURIComponent(post.id)}`}>
                <Card {...post.fields} />
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.flexer} style={{}}>
          {flex?.map((post) => (
            <div key={post.webTitle}>
              <Link to={`p/${encodeURIComponent(post.id)}`}>
                <Card {...post.fields} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      {categories.map(({ name, results }) => (
        <section key={name} className={styles.section}>
          <Heading text={name} />
          <div className={styles.flexer} style={{}}>
            {results?.slice(0, 3).map((post) => (
              <div key={post.webTitle}>
                <Link to={`p/${encodeURIComponent(post.id)}`}>
                  <Card {...post.fields} />
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
