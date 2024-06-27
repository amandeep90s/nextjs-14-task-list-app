"use client";

import { deleteTask } from "@/utils/actions";
import PropTypes from "prop-types";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button className="uppercase btn btn-xs btn-error" disabled={pending}>
      {pending ? "Please wait..." : "Delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};

DeleteForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default DeleteForm;
