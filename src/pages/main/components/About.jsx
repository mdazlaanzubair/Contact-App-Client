import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="my-5">
        {/* <!-- Jumbotron --> */}
        <div className="container p-5 bg-light card">
          <h4 className="mb-3 fw-light">ABOUT CONTAPP</h4>
          <h1 className="display-1 mb-3 fw-bold">
            We Help You Build Better Relationships
          </h1>
          <hr className="hr hr-blurry" />
          <p>
            We know how important it is to have access to up-to-date contact
            information anytime, anywhere. That’s why we’ve made our app
            available on Web so you can always stay connected. We know the power
            lies in helping you keep in touch with the connections that matter
            most so we created an intuitive contact management app for
            professionals, teams, and small businesses. Easily manage your
            relationships with CONTAPP.
          </p>
          <Link className="btn btn-primary mt-3 col-3" to="/login">
            Login
          </Link>
        </div>
        {/* <!-- Jumbotron --> */}
      </section>
    </>
  );
};

export default About;
