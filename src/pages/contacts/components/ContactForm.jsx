import { useState } from "react";
import formValidator from "./form_functions/formValidator";

const ContactForm = ({ errors }) => {
  const genders = ["Private", "Male", "Female"];
  const relations = ["Friend", "Family", "Neighbor", "Colleague", "Stranger"];
  const [formData, setFormData] = useState({});

  const formSubmitted = async (e) => {
    e.preventDefault();

    // creating object for the database
    const new_contact = {
      fname,
      lname,
      about,
      contact,
      email,
      gender: "",
      relation: "",
    };

    // sending object to the database
    const res = await fetch(
      "https://calm-jade-sheep.cyclic.app/api/contact/create",
      {
        method: "POST",
        body: new_contact,
        headers: { "Content-Type": "application/json" },
      }
    );

    const result = await res.json();
    console.log(result);
  };
  return (
    <>
      <form className="card p-3" onSubmit={formSubmitted}>
        {errors != "" ? (
          <div className="alert-box px-3 py-1 bg-danger text-light mb-3 rounded-3">
            <small>{errors.msg}</small>
          </div>
        ) : (
          ""
        )}
        <h4 className="text-center">New Contact</h4>
        {/* First Name Field */}
        <div className="form-group m-3">
          <input
            type="text"
            id="fname"
            className="form-control"
            placeholder="First Name"
          />
        </div>
        {/* Last Name Field */}
        <div className="form-group m-3">
          <input
            type="text"
            id="lname"
            className="form-control"
            placeholder="Last Name"
          />
        </div>
        {/* Contact Field */}
        <div className="form-group m-3">
          <input
            type="text"
            id="contact"
            className="form-control"
            placeholder="Contact"
          />
        </div>
        {/* Email Field */}
        <div className="form-group m-3">
          <input
            type="email"
            id="email"
            className="form-control"
            placeholder="E-mail Address"
          />
        </div>
        {/* Gender Field */}
        <div className="form-group m-3">
          <select className="form-select" id="gender" defaultValue={"Private"}>
            {genders.map((gender, index) => (
              <option key={"gender-" + index} value={gender}>
                {gender}
              </option>
            ))}
          </select>
        </div>
        {/* Relation Field */}
        <div className="form-group m-3">
          <select
            className="form-select"
            id="relation"
            defaultValue={"Stranger"}
          >
            {relations.map((relation, index) => (
              <option key={"relation-" + index} value={relation}>
                {relation}
              </option>
            ))}
          </select>
        </div>
        {/* Fist Name Field */}
        <div className="form-group m-3">
          <textarea
            type="text"
            id="about"
            rows="3"
            className="form-control"
            placeholder="Something about your new contact..."
          />
        </div>

        <div className="form-group m-3 text-center">
          <button type="submit" className="btn btn-primary btn-block">
            <i className="far fa-save me-2"></i>Save
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
