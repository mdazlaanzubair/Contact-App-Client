import moment from "moment";

const ContactCard = ({ contact }) => {
  return (
    <>
      <div className="col-md-6 my-3">
        <small className="badge badge-primary my-3 shadow-sm">
          {contact.relation}
        </small>
        <div className="card shadow-sm py-4">
          <div className="card-header border-0 text-center">
            <img
              src={`https://ui-avatars.com/api/?name=${contact.fname}+${contact?.lname}&&background=random`}
              width="60"
              alt="avatar"
              className="rounded-circle img-fluid mx-auto shadow-sm mb-3"
            />
            <h6 className="mb-0">{contact.fname}</h6>
            <small className="mb-3">{contact.contact}</small>
          </div>
          <div className="card-body">
            <h6>Bio</h6>
            <p className="small mb-3">
              {" "}
              {contact.about !== null ? (
                contact.about
              ) : (
                <a href="http://">
                  Add something about {contact.fname}{" "}
                  <i class="far fa-edit ms-2"></i>
                </a>
              )}
            </p>
            <h6>Contact Details</h6>
            <ul class="list-group list-group-light small">
              <li class="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                <div className="label">First Name</div>
                <div className="value">{contact.fname}</div>
              </li>
              <li class="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                <div className="label">Last Name</div>
                <div className="value">
                  {contact.lname !== null ? (
                    contact.lname
                  ) : (
                    <a href="http://">
                      Add last name <i class="far fa-edit ms-2"></i>
                    </a>
                  )}
                </div>
              </li>
              <li class="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                <div className="label">Contact</div>
                <div className="value">{contact.contact}</div>
              </li>
              <li class="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                <div className="label">Relation</div>
                <div className="value">{contact.relation}</div>
              </li>
              <li class="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
                <div className="label">E-mail</div>
                <div className="value">
                  {contact.email !== null ? (
                    contact.email
                  ) : (
                    <a href="http://">
                      Add email <i class="far fa-edit ms-2"></i>
                    </a>
                  )}
                </div>
              </li>
              <li class="list-group-item px-0 py-1 d-flex justify-content-between align-items-start border-0">
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
          <div className="card-footer text-end d-flex justify-content-between align-items-center">
            <a href="http://" className="btn btn-link">
              Edit <i class="far fa-edit ms-2"></i>
            </a>
            <a href="http://" className="btn btn-danger btn-floating">
              <i class="far fa-trash-alt"></i>
            </a>
          </div>
        </div>

        <p className="small my-2 text-end">
          <span className="badge badge-light">
            Added {moment(contact.updatedAt, "YYYYMMDD").fromNow()}
          </span>
        </p>
      </div>
    </>
  );
};

export default ContactCard;
