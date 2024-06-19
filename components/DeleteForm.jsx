import { deleteTask } from "@/utils/actions";
import PropTypes from "prop-types";
import React from "react";

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <button className="uppercase btn btn-xs btn-error">Delete</button>
    </form>
  );
};

DeleteForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteForm;
