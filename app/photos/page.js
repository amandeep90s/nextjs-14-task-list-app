import PhotosList from "@/components/PhotosList";
import React from "react";

const url = "https://dummyjson.com/products";

const fetchPhotos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return await response.json();
};

const Photos = async () => {
  const data = await fetchPhotos();

  return <PhotosList photos={data.products} />;
};

export default Photos;
