import Tooltip from "../../atoms/Tooltip/Tooltip";
import styles from "./ImageLink.module.scss";

export type Format = "square" | "toast" | "banner";

type ImageLinkProps = {
  image: string;
  format: Format;
  linkedTo: string;
  alt: string;
};

const ImageLink = ({ image, format, linkedTo, alt }: ImageLinkProps) => {
  return (
    <Tooltip text={alt}>
      <a href={linkedTo} target="_blank">
        <img src={image} alt={alt} className={`${styles.image} ${styles[format]}`} />
      </a>
    </Tooltip>
  );
};

export default ImageLink;
