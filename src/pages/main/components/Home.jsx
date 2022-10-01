import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <header className="my-5">
        {/* <!-- Jumbotron --> */}
        <div className="container p-5 bg-light card">
          <h1 className="display-1 mb-3 fw-bold">Contapp</h1>
          <h4 className="mb-3 fw-light">
            Access and manage your contacts with new Contapp
          </h4>
          <hr className="hr" />
          <Link className="btn btn-primary mt-3 col-md-2" to="/about">
            Explore
          </Link>
        </div>
        {/* <!-- Jumbotron --> */}
      </header>
    </>
  );
};

export default Home;
