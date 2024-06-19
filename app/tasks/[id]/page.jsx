import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <div className="mb-16">
      <Link href="/tasks" className="capitalize btn btn-accent">
        back to tasks
      </Link>

      <EditForm task={task} />
    </div>
  );
};

SingleTaskPage.propTypes = {
  params: PropTypes.object.isRequired,
};

export default SingleTaskPage;
