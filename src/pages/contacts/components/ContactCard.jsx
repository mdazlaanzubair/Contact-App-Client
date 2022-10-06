import moment from "moment";
import ContactCardDetails from "./ContactCardDetails";

const ContactCard = ({ contact }) => {
  return (
    <>
      <div className="col-md-6 my-3">
        <small className="badge badge-primary my-3 shadow-sm">
          {contact.relation}
        </small>
        <div className="card shadow">
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
          <div className="card-body my-0 py-0">
            <ContactCardDetails contact={contact} />
          </div>
          <div className="card-footer text-end d-flex justify-content-between align-items-center py-2 my-0">
            <a href="http://" className="btn btn-link">
              Edit <i className="far fa-edit ms-2"></i>
            </a>
            <a href="http://" className="btn btn-danger btn-floating btn-sm">
              <i className="far fa-trash-alt"></i>
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
