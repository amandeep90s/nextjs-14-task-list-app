import PhotosList from "@/components/PhotosList";
import React from "react";

export const url = "https://dummyjson.com/products";

const fetchPhotos = async () => {
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
