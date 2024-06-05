import Link from "next/link";
import React from "react";
import { url } from "../page";

const getSinglePhoto = async (id) => {
  const response = await fetch(`${url}/${id}`);
  return await response.json();
};

const PhotoDetail = async ({ params }) => {
  const data = await getSinglePhoto(params.id);
  const { title, thumbnail } = data;

  return (
    <div>
      <Link href="/photos" className="mt-8 mb-12 btn btn-primary">
        Back to Photos
      </Link>

      <h1 className="mb-8 text-4xl">{title}</h1>
    </div>
  );
};

export default PhotoDetail;
