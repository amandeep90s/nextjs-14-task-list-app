"use client";
import React, { useState } from "react";

const Client = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="mb-4 font-bold text-7xl">{count}</h1>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

export default Client;
