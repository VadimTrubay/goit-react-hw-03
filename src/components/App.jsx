import { useState, useEffect } from "react";
import "modern-normalize";
import ContactForm from "./ContactForm/ContactForm";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import styles from "./App.module.css";

const initialContacts = () => {
  const savedContacts = localStorage.getItem("contacts");
  if (savedContacts !== null) {
    return JSON.parse(savedContacts);
  }
  return [];
};

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    for (const el of contacts) {
      if (el.name === contact.name) {
        return alert(`${el.name} is already in contacts.`);
      }
    }
    setContacts((prevState) => [...prevState, contact]);
  };

  const handleDelete = (cardId) => {
    setContacts((prevState) => prevState.filter((el) => el.id !== cardId));
  };

  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox
        filter={(value) => {
          setFilter(value);
        }}
      />
      <ContactList contacts={filterContacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
