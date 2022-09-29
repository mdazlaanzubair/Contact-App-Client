import { Link } from "react-router-dom";
import LoginImg from "../../../asset/imgs/login.png";

const Login = () => {
  return (
    <>
      <section className="my-5">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-8 d-flex align-items-center justify-content-center">
              <img
                src={LoginImg}
                class="img-fluid rounded shadow-lg"
                alt="Login image"
                width="500"
              />
            </div>
            <div className="col-4 d-flex align-items-center">
              <form>
                <h1 className="display-4 fw-bolder">Login</h1>
                <hr className="hr" />
                {/* <!-- Email input --> */}
                <div class=" mb-4">
                  <label class="form-label" for="email">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    class="form-control bg-light"
                    placeholder="e.g. abc@example.com"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div class="mb-4">
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
                  Don't have an account yet? <Link to="/signup">Register</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
