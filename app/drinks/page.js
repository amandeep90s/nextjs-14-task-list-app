import React from "react";

const url = "https://jsonplaceholder.typicode.com/photos";

const Drinks = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  return <div>Drinks page</div>;
};

export default Drinks;
