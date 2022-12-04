import { HiBookmark } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { postGetQuery } from "../api/post";
import { Button } from "../components/Button";
import { Spinner } from "../components/Spinner";
import { useStore } from "../store";
import styles from "./Post.module.css";

export type Params = {
  postId: string;
};

export function Post() {
  const params = useParams() as Params;
  const { data: post, isLoading } = useQuery(postGetQuery(params.postId));
  const { bookmarks, addBookmark, removeBookmark } = useStore((state) => state);

  if (!post) {
    return <div>Not found</div>;
  }

  const { content } = post.post.response;
  const { lastModified, headline, trailText, body, thumbnail } = content.fields;
  const isBookmarked = bookmarks?.includes(content);

  return isLoading ? (
    <div className={styles.plain}>
      <Spinner />
    </div>
  ) : (
    <div className={styles.wrapper}>
      <div className={styles.article}>
        <Button
          text={isBookmarked ? "Remove bookmark" : "Add bookmark"}
          onClick={() =>
            isBookmarked ? removeBookmark(content) : addBookmark(content)
          }
        >
          <HiBookmark />
        </Button>
        <div className={styles.datetime}>
          {new Date(lastModified).toDateString()}
        </div>
        <h2 className={styles.headline}>{headline}</h2>
        <div
          className={styles.trailText}
          dangerouslySetInnerHTML={{
            __html: trailText,
          }}
        />
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
      </div>
      <div className={styles.media}>
        {thumbnail && (
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
        )}
      </div>
    </div>
  );
}
