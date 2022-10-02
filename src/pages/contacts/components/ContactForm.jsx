const ContactForm = ({alert}) => {
  return (
    <>
      <form className="card p-3">
        {alert != "" ? (
          <div className="alert-box px-3 py-1 bg-danger text-light mb-3 rounded-3">
            <small>{alert.msg}</small>
          </div>
        ) : (
          ""
        )}
        <h4 className="text-center">New Contact</h4>
        <div className="form-group m-3">
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="Full Name"
          />
        </div>
        <div className="form-group m-3">
          <input
            type="text"
            id="contact"
            className="form-control"
            placeholder="e.g. (+92)-XXX-XXXXXXXX"
          />
        </div>
        <div className="form-group m-3">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input "
              type="radio"
              name="gender"
              id="male"
              value="1"
            />
            <label className="form-check-label small" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input "
              type="radio"
              name="gender"
              id="female"
              value="2"
            />
            <label className="form-check-label small" htmlFor="female">
              Female
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input "
              type="radio"
              name="gender"
              id="private"
              value="0"
            />
            <label className="form-check-label small" htmlFor="private">
              Private
            </label>
          </div>
        </div>

        <div className="form-group m-3 text-center">
          <button className="btn btn-primary btn-block">Save</button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
