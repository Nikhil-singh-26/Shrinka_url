import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">

        <Link href="/" className="flex items-center gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="h-9 w-9"
          >
            <rect width="512" height="512" rx="100" fill="#1769FF" />

            <g
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="48"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M192 160
                   C225 120 287 120 320 160
                   L352 192
                   C382 222 382 258 352 288
                   L320 320"
              />

              <path
                d="M320 352
                   C287 392 225 392 192 352
                   L160 320
                   C130 290 130 254 160 224
                   L192 192"
              />
            </g>

            <path
              d="M208 304 L304 208"
              fill="none"
              stroke="#FF9900"
              strokeWidth="48"
              strokeLinecap="round"
            />
          </svg>

          <span className="text-2xl font-bold tracking-tight text-slate-900">
            Shrinka
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          <li>
            <Link
              href="/"
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              href="/shorten"
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Shorten
            </Link>
          </li>

          <li>
            <Link
              href="/contact"
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Contact
            </Link>
          </li>

          <li className="ml-2 border-l border-slate-200 pl-3">
            <Link
              href="/github"
              className="rounded-md px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              GitHub
            </Link>
          </li>

          <li className="ml-2">
            <Link
              href="/shorten"
              className="rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Try Now
            </Link>
          </li>
        </ul>

        <button
          className="rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Open menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
