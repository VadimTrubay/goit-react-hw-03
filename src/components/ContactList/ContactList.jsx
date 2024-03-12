import Contact from "../../components/Contact/Contact";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.contact_list}>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <Contact id={id} name={name} number={number} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
