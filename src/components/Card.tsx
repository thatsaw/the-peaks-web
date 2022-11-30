import {
  wrapper,
  overlaySmall,
  overlayLarge,
  titleLargeCx,
  titleSmallCx,
  subtitleCx,
  imageCx,
} from "./Card.css";

type Props = {
  title: string;
  subtitle?: string;
  image?: string;
  showImage?: boolean;
  showSubtitle?: boolean;
  index: number;
};

export function Card({
  title,
  subtitle,
  image,
  showImage,
  showSubtitle,
  index,
}: Props) {
  return (
    <div className={wrapper[index]}>
      {showImage && image && (
        <picture>
          <img className={imageCx} src={image} alt={title} />
        </picture>
      )}
      <div className={showImage ? overlaySmall : overlayLarge}>
        <div className={showSubtitle ? titleLargeCx : titleSmallCx}>
          {title}
        </div>
        {showSubtitle && subtitle && (
          <div className={subtitleCx}>{subtitle}</div>
        )}
      </div>
    </div>
  );
}
