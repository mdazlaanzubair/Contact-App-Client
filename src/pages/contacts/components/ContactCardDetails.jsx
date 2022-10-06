const ContactCardDetails = ({ contact }) => {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item m-0 p-0 border-0">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target={`#collapse_${contact._id}`}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              View details
            </button>
          </h2>
          <div
            id={`collapse_${contact._id}`}
            className="accordion-collapse collapse hide"
            aria-labelledby="headingOne"
            data-mdb-parent="#accordionExample"
          >
            <div className="accordion-body">
              <h6>Bio</h6>
              <p className="small mb-3">
                {" "}
                {contact.about != 0 ? (
                  contact.about
                ) : (
                  <a href="http://">
                    Add something about {contact.fname}{" "}
                    <i className="far fa-edit ms-2"></i>
                  </a>
                )}
              </p>
              <h6>Contact Details</h6>
              <ul className="list-group list-group-light small">
                <li className="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                  <div className="label">First Name</div>
                  <div className="value">{contact.fname}</div>
                </li>
                <li className="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                  <div className="label">Last Name</div>
                  <div className="value">
                    {contact.lname !== null ? (
                      contact.lname
                    ) : (
                      <a href="http://">
                        Add last name <i className="far fa-edit ms-2"></i>
                      </a>
                    )}
                  </div>
                </li>
                <li className="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                  <div className="label">Contact</div>
                  <div className="value">{contact.contact}</div>
                </li>
                <li className="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                  <div className="label">Relation</div>
                  <div className="value">{contact.relation}</div>
                </li>
                <li className="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                  <div className="label">E-mail</div>
                  <div className="value">
                    {contact.email !== null ? (
                      contact.email
                    ) : (
                      <a href="http://">
                        Add email <i className="far fa-edit ms-2"></i>
                      </a>
                    )}
                  </div>
                </li>
                <li className="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                  <div className="label">
                    Gender
                    <i
                      className={`fas fa-${
                        contact.gender === "Private"
                          ? "mercury"
                          : contact.gender === "Female"
                          ? "venus"
                          : contact.gender === "Male"
                          ? "mars"
                          : ""
                      } ms-2`}
                    ></i>
                  </div>
                  <div className="value">{contact.gender}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactCardDetails;
