import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { postGetQuery } from "../api/post";
import { Spinner } from "../components/Spinner";
import styles from "./Post.module.css";

export type Params = {
  postId: string;
};

export function Post() {
  const params = useParams() as Params;
  const { data: post, isLoading } = useQuery(postGetQuery(params.postId));

  if (!post) {
    return <div>Not found</div>;
  }

  const { lastModified, headline, trailText, body, thumbnail } =
    post.post.response.content.fields;

  console.log({ id: params.postId, post });

  return isLoading ? (
    <Spinner />
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.article}>
        <button>Add bookmark</button>
        <div className={styles.datetime}>
          {new Date(lastModified).toDateString()}
        </div>
        <h2 className={styles.headline}>{headline}</h2>
        <div className={styles.trailText}>{trailText}</div>
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
      </div>
      <div className={styles.media}>
        <figure className={styles.figure}>
          <img
            className={styles.image}
            src={thumbnail}
            alt={headline}
            width="100%"
            height="auto"
          />
          <figcaption>{headline}</figcaption>
        </figure>
      </div>
    </div>
  );
}
