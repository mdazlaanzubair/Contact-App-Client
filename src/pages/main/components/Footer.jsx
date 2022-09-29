import React from "react";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer --> */}
      <footer className="text-center text-lg-start bg-light">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex align-items-center justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 small">
            Find source code here
            <a
              className="mx-2"
              target="_blank"
              href="https://github.com/mdazlaanzubair/Contact-App-Client"
            >
              Frontend
            </a>{" "}
            |
            <a
              className="mx-2"
              target="_blank"
              href="https://github.com/mdazlaanzubair/Contact-App-API"
            >
              Backend
            </a>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div className="text-center">
            <small className="mx-2 fw-bold">Follow me</small>
            <hr className="my-0 mb-2 hr hr-blurry" />
            <div className="d-flex align-items-center justify-content-end">
              <a
                href="https://www.facebook.com/mdazlaanzubair/about_details"
                target="_blank"
                className="btn btn-light btn-floating mx-1"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/mdazlaanzubair"
                target="_blank"
                className="btn btn-light btn-floating mx-1"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/mdazlaanzubair/"
                target="_blank"
                className="btn btn-light btn-floating mx-1"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mdazlaanzubair/"
                target="_blank"
                className="btn btn-light btn-floating mx-1"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/mdazlaanzubair"
                target="_blank"
                className="btn btn-light btn-floating mx-1"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-4">
          Made with{" "}
          <a href="https://reactjs.org/" target="_blank" className="fw-bolder text-danger">
            <i className="fab fa-react"></i>
          </a>{" "}
          by
          <a className="text-secondary mx-2 " href="https://github.com/mdazlaanzubair">
            MD Azlaan Zubair
          </a>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
      {/* <!-- Footer -->  */}
    </>
  );
};

export default Footer;
