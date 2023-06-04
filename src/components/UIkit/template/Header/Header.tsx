import Button from "../../atoms/Button/Button";
import { Icon } from "../../atoms/Icon/Icon";
import Logo from "../../atoms/Logo/Logo";
import SearchInput from "../../mollecules/SearchInput/SearchInput";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.container}>
      <div>
        <Logo size="small" />
        <Button label="Menu" iconName="menu" size="small" />
      </div>
      <SearchInput />
      <div className={styles.icon_container}>
        <Icon icon="contact_support" isClickable action={() => alert("clicked")} />
        <Icon icon="fact_check" isClickable action={() => alert("clicked")} />
        <Icon icon="person" isClickable action={() => alert("clicked")} />
      </div>
      <Button label="Panier" iconName="shopping_cart" size="small" rounded />
    </header>
  );
};

export default Header;
