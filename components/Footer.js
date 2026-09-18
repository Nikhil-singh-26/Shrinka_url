import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-700 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl lg:px-2">
        <div className="flex flex-col justify-between gap-10 md:flex-row">

          <div>
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

              <span className="text-2xl font-bold">Shrinka</span>
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400">
              Shorter links, simpler web. Built to make sharing links quick
              and easy.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">
                Explore
              </h3>

              <div className="flex flex-col gap-3 text-sm text-slate-400">
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>

                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>

                <Link href="/shorten" className="transition hover:text-white">
                  Shorten URL
                </Link>

                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">
                Connect
              </h3>

              <div className="flex flex-col gap-3 text-sm text-slate-400">
                <Link href="/github" className="transition hover:text-white">
                  GitHub
                </Link>

                <a
                  href="mailto:nids@shrinka.dev"
                  className="transition hover:text-white"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 border-t border-slate-800 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Shrinka. All rights reserved.</p>
          <p> Made with <span className="text-red-400">♥</span> for a simpler web.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
