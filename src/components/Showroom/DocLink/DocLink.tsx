import { Icon } from "../../UIkit/atoms/Icon/Icon";
import styles from "./DocLink.module.scss";

type DocLinkProps = {
  url: string;
};
const DocLink = ({ url }: DocLinkProps) => {
  return (
    <a href={url} target="_blank">
      <div className={styles.container}>
        <Icon icon="description" size="small" />
        <p>Docs</p>
      </div>
    </a>
  );
};

export default DocLink;
