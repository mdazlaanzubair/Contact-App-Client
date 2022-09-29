import { Link } from "react-router-dom";
import SignupImg from "../../../asset/imgs/signup.png";
const Signup = () => {
  return (
    <>
      <section className="my-5">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-4 d-flex align-items-center">
              <form>
                <h1 className="display-4 fw-bolder">Signup</h1>
                <hr className="hr" />
                <div className="form-group row">
                  {/* <!-- fname input --> */}
                  <div class="col-6 mb-4">
                    <label class="form-label" for="fname">
                      First Name
                    </label>
                    <input
                      type="fname"
                      id="fname"
                      class="form-control bg-light"
                      placeholder="e.g. John"
                    />
                  </div>
                  {/* <!-- lname input --> */}
                  <div class="col-6 mb-4">
                    <label class="form-label" for="lname">
                      Last Name
                    </label>
                    <input
                      type="lname"
                      id="lname"
                      class="form-control bg-light"
                      placeholder="e.g. Doe"
                    />
                  </div>
                </div>
                {/* <!-- Email input --> */}
                <div class="form-group mb-4">
                  <label class="form-label" for="email">
                    E-mail address
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="form-control bg-light"
                    placeholder="e.g. abc@example.com"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div class="form-group mb-4">
                  <label class="form-label" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    class="form-control bg-light"
                    placeholder="e.g. Secret"
                  />
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" class="btn btn-primary btn-block">
                  Lets get in!
                </button>
                <p className="mt-3">
                  Already have an account? <Link to="/login">Lets get in</Link>
                </p>
              </form>
            </div>
            <div className="col-8 d-flex align-items-center justify-content-center">
              <img
                src={SignupImg}
                class="img-fluid rounded shadow-lg"
                alt="Login image"
                width="500"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
