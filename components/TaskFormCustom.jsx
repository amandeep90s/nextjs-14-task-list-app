"use client";
import { createTaskCustom } from "@/utils/actions";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

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

const initialState = { message: null };

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);

  return (
    <form action={formAction}>
      {state.message && <p className="mb-2">{state.message}</p>}
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
