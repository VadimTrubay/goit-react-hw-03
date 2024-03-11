import { BsPersonFill } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={styles.contact}>
      <div>
        <p>
          <BsPersonFill className={styles.name} />
          <span>{name}</span>
        </p>
        <p>
          <BsTelephoneFill className={styles.number} />
          <span>{number}</span>
        </p>
      </div>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
