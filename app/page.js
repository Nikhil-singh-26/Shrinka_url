import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-5rem)] bg-linear-to-br from-purple-50 via-red-300 to-fuchsia-50">
      <section className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-12 md:grid-cols-2 lg:px-8">

        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <div className="mb-5 rounded-full border border-purple-200 bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Simple. Fast. Reliable.
          </div>

          <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Shorten your links.
            <span className="block bg-linear-to-r from-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
              Keep it simple.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
            Shrinka makes long URLs short, clean, and easy to share. No
            unnecessary complications, no endless forms, just a simple way
            to get the link you need.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              href="/shorten"
              className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-600/25 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-purple-600/40"
            >
              Shorten a URL →
            </Link>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-purple-200 hover:text-purple-600"
            >
              View on GitHub
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-slate-500">
            <span>✓ No complicated setup</span>
            <span>✓ Quick & easy</span>
          </div>
        </div>

        <div className="relative flex h-87.5 items-center justify-center md:h-87.5">
          <div className="absolute h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />

          <div className="relative h-full w-full max-w-lg overflow-hidden rounded-3xl border border-white/60 bg-white/40 shadow-2xl shadow-purple-200/50 backdrop-blur-sm">
            <Image
              src="/vector.jpg"
              alt="Shrinka URL shortener illustration"
              fill
              priority
              className="object-contain p-6 mix-blend-multiply"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

