import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link href="/about" className="text-5xl text-red-700">
        About Page
      </Link>
      <Link href="/contact" className="text-5xl text-green-500">
        Contact Page
      </Link>
    </div>
  );
};

export default Home;
