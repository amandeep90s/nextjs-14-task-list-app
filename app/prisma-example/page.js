import prisma from "@/utils/db";
import React from "react";

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: "Hello World",
  //   },
  // });

  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return tasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();

  if (tasks.length === 0) {
    return <h2 className="mt-8 text-lg font-medium">No Tasks to show...</h2>;
  }

  return (
    <>
      <h1 className="text-7xl">PrismaExample</h1>
      {tasks.map((task) => (
        <h2 key={task.id} className="py-2 text-xl">
          {task.content}
        </h2>
      ))}
    </>
  );
};

export default PrismaExample;
