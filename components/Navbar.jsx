import Link from "next/link";
import React from "react";

const links = [
  { href: "/client", label: "client" },
  { href: "/drinks", label: "drinks" },
  { href: "/tasks", label: "tasks" },
  { href: "/query", label: "query" },
];

const Navbar = () => {
  return (
    <nav className="py-4 bg-base-300">
      <div className="flex-col max-w-6xl px-8 navbar max-auto sm:flex-row">
        <Link href="/" className="btn btn-primary">
          NextJs
        </Link>

        <ul className="menu menu-horizontal md:ml-8">
          {links.map(({ href, label }) => (
            <li key={label}>
              <Link href={href} className="capitalize">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
