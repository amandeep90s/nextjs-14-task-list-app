import { createTask } from "@/utils/actions";
import React from "react";

const TaskForm = () => {
  return (
    <form action={createTask}>
      <div className="w-full join">
        <input
          type="text"
          className="w-full input input-bordered join-item"
          placeholder="Type here..."
          name="content"
          required
        />
        <button type="submit" className="btn btn-primary join-item">
          Create Task
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
