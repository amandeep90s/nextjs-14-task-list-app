"use client";
import { createTaskCustom } from "@/utils/actions";
import React, { useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
import toast from "react-hot-toast";

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

  useEffect(() => {
    if (state.message === "error") {
      toast.error("There was an error creating the task");
      return;
    }

    if (state.message) {
      toast.success("Task created successfully");
    }
  }, [state]);

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
