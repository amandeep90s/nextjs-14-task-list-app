import PropTypes from "prop-types";
import React from "react";

const EditForm = ({ task }) => {
  console.log(task);
  return <div>EditForm</div>;
};

EditForm.propTypes = {
  task: PropTypes.object.isRequired,
};

export default EditForm;
