import PropTypes from "prop-types";
import Category from "./category/Category";
import Price from "./price/Price";
import Color from "./colors/Colors";
import "./Sidebar.css";
import { DiCodeigniter } from "react-icons/di";

function Sidebar({ handleChange }) {
  return (
    <section className="sidebar">
      <div className="logo-container">
        <DiCodeigniter size={40} />
      </div>
      <Category handleChange={handleChange} />
      <Price handleChange={handleChange} />
      <Color handleChange={handleChange} />
    </section>
  );
}

Sidebar.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Sidebar;
