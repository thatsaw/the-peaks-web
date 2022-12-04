import { useLoaderData, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Card } from "../components/Card";
import { Nav } from "../components/Nav";
import { Heading } from "../components/Heading";
import { Spinner } from "../components/Spinner";
import { contentListQuery } from "../api/content";
import styles from "./Home.module.css";

type LoaderData = {
  q?: string;
};

export function Home() {
  const { q } = useLoaderData() as LoaderData;
  const { data: content, isLoading } = useQuery(contentListQuery(q));

  const grid = content?.top.response.results.slice(0, 5);
  const flex = content?.top.response.results.slice(5, 8);
  const sports = content?.sports.response.results;

  return isLoading ? (
    <div className={styles.plain}>
      <Spinner />
    </div>
  ) : (
    <>
      <section>
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
      <section className={styles.section}>
        <Heading text="Sports" />
        <div className={styles.flexer} style={{}}>
          {sports?.slice(0, 3).map((post) => (
            <div key={post.webTitle}>
              <Link to={`p/${encodeURIComponent(post.id)}`}>
                <Card {...post.fields} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
