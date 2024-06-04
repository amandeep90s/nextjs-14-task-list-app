import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-7xl">About page</h1>
      <Link href="/" className="text-5xl text-blue-500">
        Home Page
      </Link>
      <Link href="/about/info" className="text-5xl text-blue-500">
        About Info Page
      </Link>
      <Link href="/contact" className="text-5xl text-blue-500">
        Contact Page
      </Link>
    </div>
  );
};

export default About;
