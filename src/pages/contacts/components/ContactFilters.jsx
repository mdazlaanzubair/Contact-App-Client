const ContactFilters = ({ alert, contacts }) => {
  // counting gender wise
  const female = contacts.filter((contact) =>
    contact.gender === "Female" ? true : false
  ).length;
  const male = contacts.filter((contact) =>
    contact.gender === "Male" ? true : false
  ).length;
  const others = contacts.filter((contact) =>
    contact.gender === "Private" ? true : false
  ).length;

  return (
    <>
      <div className="row justify-content-center action-center">
        {alert != "" ? (
          <div className="alert-box px-3 py-1 bg-warning text-light mb-3 rounded-3">
            <i className="fas fa-skull-crossbones me-2"></i>
            <small>{alert.msg}</small>
          </div>
        ) : (
          ""
        )}
        <div className="col-md my-3">
          Contacts Count:{" "}
          <span className="mx-2 female text-danger" title="Females">
            {" "}
            <i className="fas fa-venus"></i> {female}
          </span>
          <span className="mx-2 male text-primary" title="Males">
            {" "}
            <i className="fas fa-mars"></i> {male}
          </span>
          <span className="mx-2 male text-muted" title="Private">
            {" "}
            <i className="fas fa-mercury"></i> {others}
          </span>
          <span className="mx-2 male text-dark" title="All">
            {" "}
            <i className="fas fa-genderless"></i> {contacts.length}
          </span>
        </div>
        <div className="col-md-4 my-3">
          <div className="form-group">
            <input
              type="search"
              id="filter"
              className="form-control form-control-sm"
              placeholder="Search filter"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFilters;
