
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-linear-to-br from-purple-50 via-red-300 to-fuchsia-50 text-slate-900">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-8">
        <div>
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            About Shrinka
          </span>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Small links.
            <span className="text-purple-600"> Big convenience.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Shrinka was built with one simple idea: shortening a URL should
            not feel complicated. Paste your long link, choose a short name,
            and you are ready to share.
          </p>

          <p className="mt-4 max-w-xl leading-7 text-slate-500">
            Whether you are sharing a project, sending a link to a friend, or
            putting a URL on a document, Shrinka keeps the process quick and
            straightforward.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/shorten"
              className="rounded-lg bg-purple-600 px-6 py-3 font-semibold text-white transition hover:bg-purple-700"
            >
              Shorten a URL
            </Link>

            <Link
              href="/contact"
              className="rounded-lg border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="relative h-87.5 overflow-hidden rounded-2xl bg-purple-50">
          <Image
            src="/about.jpg"
            alt="Working with Shrinka"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y bg-linear-to-br from-purple-50 via-red-300 to-fuchsia-50 border-slate-100 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-purple-600">
              Our approach
            </p>

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Built around the things that matter.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We do not think a URL shortener needs dozens of complicated
              screens. Shrinka focuses on doing one job well and keeping the
              experience easy to understand.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-purple-100 text-xl">
                ⚡
              </div>

              <h3 className="text-lg font-semibold">Quick to use</h3>

              <p className="mt-2 leading-6 text-slate-500">
                No unnecessary steps. Add your URL, choose a name, and create
                your short link.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-xl">
                🔗
              </div>

              <h3 className="text-lg font-semibold">Easy to share</h3>

              <p className="mt-2 leading-6 text-slate-500">
                Short, readable links are easier to remember, type, and share
                with other people.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-orange-100 text-xl">
                ♡
              </div>

              <h3 className="text-lg font-semibold">Made with care</h3>

              <p className="mt-2 leading-6 text-slate-500">
                Shrinka is designed to stay simple, useful, and pleasant to
                use every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 text-center">
        <p className="text-sm font-semibold text-purple-600">Why Shrinka?</p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          One simple tool for your links.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
          From personal projects to everyday sharing, Shrinka gives you a
          cleaner way to deal with long URLs.
        </p>

        <Link
          href="/shorten"
          className="mt-8 inline-block rounded-lg bg-purple-600 px-7 py-3 font-semibold text-white transition hover:bg-purple-700"
        >
          Try Shrinka
        </Link>
      </section>

    </main>
  );
}
