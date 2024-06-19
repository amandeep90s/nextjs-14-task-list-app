"use client";
import { createTaskCustom } from "@/utils/actions";
import React from "react";
import { useFormStatus } from "react-dom";

const SubmitHandler = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Please wait..." : "Create Task"}
    </button>
  );
};

const TaskFormCustom = () => {
  return (
    <form action={createTaskCustom}>
      <div className="w-full join">
        <input
          type="text"
          className="w-full input input-bordered join-item"
          placeholder="Type here..."
          name="content"
          required
        />
        <SubmitHandler />
      </div>
    </form>
  );
};

export default TaskFormCustom;
