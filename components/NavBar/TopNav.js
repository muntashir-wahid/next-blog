import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <header className="bg-gray-100 flex justify-between items-center px-6 py-4">
      <div>
        <Link className="text-xl font-medium" href="/">
          Next Blog
        </Link>
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link
              className="font-medium hover:underline hover:transition-all"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-medium hover:underline hover:transition-all"
              href="/"
            >
              Signup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default TopNav;
