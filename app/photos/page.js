import React from "react";

const url = "https://jsonplaceholder.typicode.com/photos";

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
  console.log(data);

  return <div>Photos page</div>;
};

export default Photos;
