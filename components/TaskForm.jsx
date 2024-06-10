import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";
import React from "react";

const createTask = async (formData) => {
  "use server";
  const content = formData.get("content");
  await prisma.task.create({
    data: { content },
  });
  revalidatePath("/tasks");
};

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
