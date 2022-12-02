import { Card } from "../components/Card";
import styles from "./Grid.module.css";

type Props = {
  data: any[];
};

export function Grid({ data }: Props) {
  console.log(data);
  return (
    <div className={styles.board}>
      {data.map((post, index) => {
        return (
          <div
            key={post.title}
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "purple",
              gridArea: `area${index + 1}`,
            }}
          >
            <figure
              key={post.title}
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "yellow",
                padding: 0,
                margin: 0,
                display: "inline-block",
                position: "relative",
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                width="100%"
                height="auto"
                style={{
                  backgroundColor: "green",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  display: "block",
                  // width: "100%",
                }}
              />
              <figcaption
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: "30%",
                  color: "white",
                  padding: "10px",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <div
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    width: "100%",
                    backgroundColor: "maroon",
                  }}
                >
                  {post.title}
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    width: "100%",
                    backgroundColor: "magenta",
                  }}
                >
                  {post.subtitle}
                </div>
              </figcaption>
            </figure>
          </div>
        );
      })}
    </div>
  );
}
