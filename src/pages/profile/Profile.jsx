import moment from "moment";

const Profile = () => {
  return (
    <>
      <section className="my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="card text-center shadow-6 p-4">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  width="80"
                  alt="avatar"
                  className="rounded-circle img-fluid mx-auto shadow-sm"
                />
                <h5 className="my-3">Muhammad Azlaan Zubair</h5>
                <p className="text-muted mb-4">
                  Last Updated:{" "}
                  {moment("2022-09-24T18:26:54.445Z", "YYYYMMDD").fromNow()}
                </p>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card shadow-6 p-4">
                <div className="form-group m-3">
                  <div className="row justify-content-center">
                    <div className="col">
                      <input
                        type="text"
                        id="fname"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        id="lname"
                        className="form-control"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group m-3">
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="E-mail address"
                  />
                </div>
                <div className="form-group m-3">
                  <input
                    type="text"
                    id="contact"
                    className="form-control"
                    placeholder="Contact e.g. (+92)-XXX-XXXXXXXX"
                  />
                </div>
                <div className="form-group m-3">
                  Gender
                  <div className="form-check form-check-inline mx-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="male"
                      value="1"
                    />
                    <label className="form-check-label" htmlFor="male">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline mx-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="female"
                      value="2"
                    />
                    <label className="form-check-label" htmlFor="female">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check-inline mx-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      id="private"
                      value="0"
                    />
                    <label className="form-check-label" htmlFor="private">
                      Private
                    </label>
                  </div>
                </div>
                <div className="form-group m-3">
                  <textarea
                    type="text"
                    rows="3"
                    id="bio"
                    className="form-control"
                    placeholder="Write something about yourself..."
                  />
                </div>
                <div className="form-group m-3">
                  <button className="btn btn-primary float-end">
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
