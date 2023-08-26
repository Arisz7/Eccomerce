import PropTypes from "prop-types";
import "./Products.css";

function Products({ result }) {
  return (
    <>
      <section className="card-container">{result}</section>
    </>
  );
}

Products.propTypes = {
  result: PropTypes.node.isRequired,
};

export default Products;
