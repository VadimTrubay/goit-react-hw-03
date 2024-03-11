import { nanoid } from "nanoid";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = ({ addContact }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .required("required")
      .min(3, "min 3 characters")
      .max(50, "max 50 characters"),
    number: Yup.string()
      .required("required")
      .min(3, "min 3 characters")
      .max(50, "max 50 characters"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    addContact(newContact);
    resetForm();
  };

  return (
    <div className={styles.contact_form}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className={styles.field}>
            <p>
              <label htmlFor="name">Name</label>
            </p>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          <div className={styles.field}>
            <p>
              <label htmlFor="number">Number</label>
            </p>
            <Field type="text" id="number" name="number" />
            <ErrorMessage name="number" component="div" />
          </div>
          <div className={styles.button}>
            <button type="submit">Add contact</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
