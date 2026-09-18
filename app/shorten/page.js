"use client";
import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
  const [url, seturl] = useState("");
  const [shorturl, setshorturl] = useState("");
  const [generated, setgenerated] = useState("");
  const [loading, setloading] = useState(false);
  const [errorMsg, seterrorMsg] = useState("");
  const [successMsg, setsuccessMsg] = useState("");
  const [copied, setcopied] = useState(false);

  const generate = async (e) => {
    if (e) e.preventDefault();
    seterrorMsg("");
    setsuccessMsg("");
    setcopied(false);

    const trimmedUrl = url.trim();
    const trimmedShortUrl = shorturl.trim();

    if (!trimmedUrl) {
      seterrorMsg("Please enter the URL you want to shorten.");
      return;
    }

    if (!trimmedShortUrl) {
      seterrorMsg("Please enter a custom short name.");
      return;
    }

    setloading(true);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: trimmedUrl,
          shorturl: trimmedShortUrl,
        }),
      });

      const data = await res.json();

      if (!res.ok || data.error) {
        seterrorMsg(data.message || "Failed to generate short URL.");
        setloading(false);
        return;
      }

      const host =
        process.env.NEXT_PUBLIC_HOST ||
        (typeof window !== "undefined" ? window.location.origin : "http://localhost:3000");

      const finalUrl = `${host}/${data.shorturl}`;
      setgenerated(finalUrl);
      setsuccessMsg("Short URL created successfully!");
      seturl("");
      setshorturl("");
    } catch (err) {
      console.error(err);
      seterrorMsg("An unexpected network error occurred. Please try again.");
    } finally {
      setloading(false);
    }
  };

  const copyToClipboard = () => {
    if (!generated) return;
    navigator.clipboard.writeText(generated);
    setcopied(true);
    setTimeout(() => setcopied(false), 2500);
  };

  return (
    <div className="flex-1 bg-linear-to-br from-purple-50 via-red-200/40 to-fuchsia-50 py-16 px-4">
      <div className="mx-auto w-full max-w-xl">
        <div className="rounded-3xl border border-purple-100/80 bg-white/95 p-6 shadow-xl shadow-purple-950/5 backdrop-blur-md sm:p-8">
          <div className="mb-7">
            <span className="inline-block rounded-full bg-purple-100 px-3.5 py-1 text-xs font-semibold text-purple-700">
              URL Shortener
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Generate your short URL
            </h1>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Paste your long destination URL and give it a clean, custom name.
            </p>
          </div>

          <form onSubmit={generate} className="flex flex-col gap-5">
            <div>
              <label htmlFor="long-url-input" className="mb-2 block text-sm font-medium text-slate-700">
                Destination URL
              </label>

              <input
                id="long-url-input"
                type="text"
                value={url}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:bg-white focus:ring-4 focus:ring-purple-500/10"
                placeholder="e.g. google.com or https://example.com/very-long-link"
                onChange={(e) => seturl(e.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="custom-slug-input" className="mb-2 block text-sm font-medium text-slate-700">
                Custom short name
              </label>

              <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 transition focus-within:border-purple-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-purple-500/10">
                <span className="pl-4 text-sm font-medium text-slate-400 select-none">
                  shrinka/
                </span>

                <input
                  id="custom-slug-input"
                  type="text"
                  value={shorturl}
                  className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  placeholder="my-link"
                  onChange={(e) => setshorturl(e.target.value)}
                  disabled={loading}
                />
              </div>
            </div>

            {errorMsg && (
              <div className="rounded-xl border border-red-200 bg-red-50 p-3.5 text-sm text-red-700 flex items-center gap-2">
                <span className="font-semibold">✕</span>
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="rounded-xl border border-green-200 bg-green-50 p-3.5 text-sm text-green-700 flex items-center gap-2">
                <span className="font-semibold">✓</span>
                <span>{successMsg}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex items-center justify-center rounded-xl bg-purple-600 px-5 py-3.5 text-sm font-semibold text-white shadow-md shadow-purple-600/20 transition hover:bg-purple-700 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Generating Short URL...
                </span>
              ) : (
                "Generate Short URL"
              )}
            </button>
          </form>

          {generated && (
            <div className="mt-8 rounded-2xl border border-purple-200 bg-purple-50/80 p-5">
              <p className="mb-2.5 text-xs font-bold uppercase tracking-wider text-purple-700">
                Your shortened link is ready:
              </p>

              <div className="flex flex-wrap items-center gap-2 rounded-xl bg-white p-2.5 shadow-sm border border-purple-100">
                <code className="min-w-0 flex-1 truncate px-2 text-sm font-semibold text-purple-800">
                  <Link
                    target="_blank"
                    href={generated}
                    className="hover:underline"
                  >
                    {generated}
                  </Link>
                </code>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    type="button"
                    onClick={copyToClipboard}
                    className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:bg-purple-100 hover:text-purple-700"
                  >
                    {copied ? "✓ Copied!" : "Copy"}
                  </button>

                  <Link
                    target="_blank"
                    href={generated}
                    className="rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-purple-700"
                  >
                    Open ↗
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shorten;