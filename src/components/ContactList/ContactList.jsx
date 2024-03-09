import Contact from './Contact/Contact'
import styles from './ContactList.module.css'

const ContactList = () => {
  return (
    <div className={styles.contact_list}>
      <Contact />
      <Contact />
      <Contact />
      <Contact />
    </div>
  )
}

export default ContactList
