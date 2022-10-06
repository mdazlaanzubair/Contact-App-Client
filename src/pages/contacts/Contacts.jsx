import { useEffect, useState } from "react";
import ContactCard from "./components/ContactCard";
import ContactFilters from "./components/ContactFilters";
import ContactForm from "./components/ContactForm";

const Contact = () => {
  // contacts list
  const [contactsList, setContactList] = useState([]);
  const [alert, setAlert] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const res = await fetch(
        "https://calm-jade-sheep.cyclic.app/api/contact/index"
      );

      // if API throws error status
      if (res.status === 204)
        return setAlert({ ...alert, msg: "No contacts." });
      if (res.status === 500)
        return setAlert({ ...alert, msg: "Internal server error." });

      // convert "res" into "json" - and return back with data
      const data = await res.json();
      setContactList(data.contacts);
      return;
    };

    getContacts();
  }, []);

  return (
    <>
      <section className="my-5">
        <div className="container p-4">
          <div className="row justify-content-between">
            <div className="col-md-4 p-4">
              <ContactForm errors="" />
            </div>
            <div className="col-md-8 p-4">
              {contactsList.length > 0 ? (
                <ContactFilters contacts={contactsList} alert={alert} />
              ) : (
                ""
              )}
              <div className="row justify-content-start">
                {contactsList &&
                  contactsList.map((contact, index) => (
                    <ContactCard contact={contact} key={index} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
