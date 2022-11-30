import { wrapper, container, titleCx, subtitleCx, imageCx } from "./Card.css";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
};

export function Card({ title, subtitle, image }: Props) {
  return (
    <div className={wrapper}>
      <div>
        {image && (
          <img
            className={imageCx}
            src={image}
            alt={title}
            width={600}
            height={400}
          />
        )}
      </div>
      <div className={container}>
        <div className={titleCx}>{title}</div>
        {subtitle && <div className={subtitleCx}>{subtitle}</div>}
      </div>
    </div>
  );
}
