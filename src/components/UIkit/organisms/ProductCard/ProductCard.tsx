import styles from "./ProductCard.module.scss";
import { ProductType } from "../../../../Types/ProductSchema";
import { Icon } from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";
import { Separator } from "../../atoms/Separator/Separator";
import Rating from "../../mollecules/Rating/Rating";

type ProductCardProps = {
  product: ProductType;
};
const ProductCard = ({ product }: ProductCardProps) => {
  console.log(product);

  return (
    <article className={styles.card}>
      <div className={styles.top_container}>
        <img src={product.image} alt={product.name} className={styles.image} />
        <div className={styles.overlay}>
          <Icon icon={product.isFavorite ? "favorite" : "favorite_border"} color="var(--Secondary-light)" />
        </div>
      </div>
      <div className={styles.middle_container}>
        <div>
          <h1 className={product.promo && styles.red}>{`${product.price} €`}</h1>
          <Button label="+" iconName="shopping_cart" category="primary" />
        </div>
        {product.promo ? (
          <div className={`${styles.promo} ${styles.promo_container}`}>
            <Icon icon="local_offer" color="var(--White)" />
            <h2>{`${product.promo}`}</h2>
          </div>
        ) : (
          <>
            <div className={styles.promo_container}>
              <Separator direction={"horizontal"} />
            </div>
          </>
        )}
      </div>
      <div className={styles.bottom_container}>
        <div>
          <h2>{product.name}</h2>
          <p>{product.description.heading}</p>
          <small>{product.brand}</small>
        </div>
        <div>
          <Separator direction={"horizontal"} />
          <Rating rating={product.rate} size="small" />
          <p className={styles.origin}>
            <span>{product.description.origin?.flag}</span>
            {product.description.origin?.country}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
