import { Link } from "react-router-dom";
import LoginImg from "../../../asset/imgs/login.png";

const Login = () => {
  return (
    <>
      <section className="my-5">
        <div className="container p-4">
          <div className="row justify-content-center">
            <div className="col-md-8 d-flex align-items-center justify-content-center">
              <img
                src={LoginImg}
                className="img-fluid rounded shadow-lg"
                alt="Login image"
                width="500"
              />
            </div>
            <div className="col-md-4 d-flex align-items-center">
              <form>
                <h1 className="display-4 fw-bolder">Login</h1>
                <hr className="hr" />
                {/* <!-- Email input --> */}
                <div className=" mb-4">
                  <label className="form-label" for="email">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control bg-light"
                    placeholder="e.g. abc@example.com"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-4">
                  <label className="form-label" for="password">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control bg-light"
                    placeholder="e.g. Secret"
                  />
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-block">
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
