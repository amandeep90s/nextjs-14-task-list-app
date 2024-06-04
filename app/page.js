import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <h1 className="mb-8 text-5xl font-bold">NextJs Tutorial</h1>
      <Link href="/client" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
