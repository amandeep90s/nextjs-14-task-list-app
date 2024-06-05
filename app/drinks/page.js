import React from "react";

const url = "https://jsonplaceholder.typicode.com/photos";

const fetchPhotos = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  return await response.json();
};

const Drinks = async () => {
  const data = await fetchPhotos();
  console.log(data);

  return <div>Drinks page</div>;
};

export default Drinks;
