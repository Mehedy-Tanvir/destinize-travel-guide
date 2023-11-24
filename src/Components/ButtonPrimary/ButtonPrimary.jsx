import PropTypes from "prop-types";
const ButtonPrimary = ({ children }) => {
  return (
    <button className="btn bg-[#4475F2] text-white text-lg hover:bg-[#7398f5]">
      {children}
    </button>
  );
};
ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ButtonPrimary;
