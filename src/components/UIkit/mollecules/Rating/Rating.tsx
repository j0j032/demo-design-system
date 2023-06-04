import { Icon } from "../../atoms/Icon/Icon";
import styles from "./Rating.module.scss";

type RatingProps = {
  rating: number;
  size?: "small" | "medium" | "large";
};

const Rating = ({ rating, size = "medium" }: RatingProps) => {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      {range.map((rangeElem) => (rating >= rangeElem ? <Icon icon="star" size={size} color="#fbb215" /> : <Icon icon="star_outline" size={size} color="#fbb215" />))}
    </div>
  );
};

export default Rating;
