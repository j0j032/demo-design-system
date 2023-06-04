import styles from "./LeadCard.module.scss";
import { LeadType } from "../../../../Types/LeadSchema";
import Button from "../../atoms/Button/Button";

type LeadCardProps = {
  lead: LeadType;
};

const LeadCard = ({ lead }: LeadCardProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.text_container}>
        <div>
          <h1>{lead.title}</h1>
          <p>{lead.description}</p>
        </div>
        <Button label={lead.cta} category="primary" onClick={() => alert(`Navigate to ... ${lead.linkedTo}`)} />
      </div>
      <div className={styles.image_container}>
        <img src={lead.image} alt={lead.title} className={styles.image} />
      </div>
    </article>
  );
};

export default LeadCard;
