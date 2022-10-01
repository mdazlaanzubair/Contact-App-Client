import moment from "moment";

const Contact = () => {
  const contacts = ["one", "two", "three", "four"];
  return (
    <>
      <section className="my-5">
        <div className="container p-4">
          <div className="row justify-content-between">
            <div className="col-md-4 p-4">
              <div className="card p-3">
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
                    <label className="form-check-label small" for="male">
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
                    <label className="form-check-label small" for="female">
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
                    <label className="form-check-label small" for="private">
                      Private
                    </label>
                  </div>
                </div>

                <div className="form-group m-3 text-center">
                  <button className="btn btn-primary btn-block">Save</button>
                </div>
              </div>
            </div>
            <div className="col-md-8 p-4">
              <div className="row justify-content-center action-center">
                <div className="col-md my-3">
                  Contacts Count:{" "}
                  <span className="mx-2 female text-danger">
                    {" "}
                    <i class="fas fa-venus"></i> 12
                  </span>
                  <span className="mx-2 male text-primary">
                    {" "}
                    <i class="fas fa-mars"></i> 14
                  </span>
                  <span className="mx-2 male text-muted">
                    {" "}
                    <i class="fas fa-mercury"></i> 14
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
              <div className="row justify-content-center">
                {contacts.map((contact, index) => (
                  <div className="col-md-4 my-3" key={index} value={contact}>
                    <div className="card text-center shadow-sm p-4">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        width="30"
                        alt="avatar"
                        className="rounded-circle img-fluid mx-auto shadow-sm mb-3"
                      />
                      <h6 className="mb-0">Muhammad Azlaan Zubair</h6>
                      <small className="mb-1">(+92)-XXX-XXXXXXXX</small>
                      <small className="text-muted">
                        Last Updated:{" "}
                        {moment(
                          "2022-09-24T18:26:54.445Z",
                          "YYYYMMDD"
                        ).fromNow()}
                      </small>
                    </div>
                  </div>
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
