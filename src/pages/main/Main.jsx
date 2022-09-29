import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "../contacts/Contacts";
import Signup from "../auth/signup/Signup";
import Login from "../auth/login/Login";
import Profile from "../profile/Profile";
import Footer from "./components/Footer";

const Main = () => {
  return (
    <>
      {/* header */}
      <Navbar />

      {/* components */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/contacts" element={<Contacts />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/profile" element={<Profile />} />
      </Routes>

      {/* footer */}
      <Footer />
    </>
  );
};

export default Main;
