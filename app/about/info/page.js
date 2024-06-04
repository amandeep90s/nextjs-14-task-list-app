import Link from "next/link";
import React from "react";

const AboutInfo = () => {
  return (
    <div>
      <h1 className="text-7xl">About Info Page</h1>
      <Link href="/" className="text-5xl text-blue-500">
        Home Page
      </Link>
      <Link href="/about" className="text-5xl text-blue-500">
        About Page
      </Link>
    </div>
  );
};

export default AboutInfo;
