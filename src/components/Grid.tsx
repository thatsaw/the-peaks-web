import { Card } from "../components/Card";
import { grid } from "./Grid.css";

type Props = {
  data: any[];
};

export function Grid({ data }: Props) {
  return (
    <div className={grid}>
      {data.map((post, index) => {
        return (
          <div
            key={post.title}
            style={{
              gridArea: `area${index + 1}`,
            }}
          >
            <Card
              {...post}
              index={index}
              showImage={index < 3}
              showSubtitle={index === 0}
            />
          </div>
        );
      })}
    </div>
  );
}
