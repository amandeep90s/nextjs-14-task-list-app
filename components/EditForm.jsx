import { editTask } from "@/utils/actions";
import PropTypes from "prop-types";
import React from "react";

const EditForm = ({ task }) => {
  const { id, content, completed } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border rounded-lg border-base-300"
    >
      <input type="hidden" name="id" value={id} />

      <input
        type="text"
        name="content"
        defaultValue={content}
        className="w-full input input-bordered"
        required
      />

      <div className="form-control">
        <label htmlFor="completed" className="cursor-pointer label">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            name="completed"
            id="completed"
            defaultChecked={completed}
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
      </div>

      <button type="submit" className="btn btn-primary btn-block btn-sm">
        Edit
      </button>
    </form>
  );
};

EditForm.propTypes = {
  task: PropTypes.object.isRequired,
};

export default EditForm;
