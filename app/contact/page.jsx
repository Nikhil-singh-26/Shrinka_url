import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-linear-to-br from-purple-50 via-red-300 to-fuchsia-50 text-slate-900">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 lg:px-8">
        <div>
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            Get in touch
          </span>

          <h1 className="mt-6 max-w-xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Have something to
            <span className="text-purple-600"> say?</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Found a problem, have a suggestion, or simply want to say hello?
            We would love to hear from you.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 text-2xl">✉</div>
              <h3 className="font-semibold">Email</h3>
              <p className="mt-1 text-sm text-slate-500">
                hello@shrinka.dev
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 p-5">
              <div className="mb-3 text-2xl">💬</div>
              <h3 className="font-semibold">Feedback</h3>
              <p className="mt-1 text-sm text-slate-500">
                Suggestions are always welcome.
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-87.5 overflow-hidden rounded-2xl bg-purple-50">
          <Image
            src="/contact.jpg"
            alt="Contact Shrinka"
            fill
            priority
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-20 min-h-screen bg-linear-to-br from-purple-50 via-red-300 to-fuchsia-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold text-purple-600">
              Send us a message
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              Let's talk.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Fill out the form and tell us what is on your mind. Whether it
              is feedback or a question, every message is appreciated.
            </p>
          </div>

          <form className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="How can we help?"
                  className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
                />
              </div>

              <button
                type="submit"
                className="rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white transition hover:bg-purple-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold text-purple-600">
            Quick answers
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Frequently asked questions
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200">
          <details className="group p-5">
            <summary className="cursor-pointer list-none font-semibold">
              Is Shrinka free to use?
              <span className="float-right text-slate-400">+</span>
            </summary>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Shrinka is designed to keep URL shortening simple and
              accessible.
            </p>
          </details>

          <details className="group p-5">
            <summary className="cursor-pointer list-none font-semibold">
              Can I create custom short URLs?
              <span className="float-right text-slate-400">+</span>
            </summary>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Yes. You can enter your preferred short name when creating a
              link, as long as it is available.
            </p>
          </details>

          <details className="group p-5">
            <summary className="cursor-pointer list-none font-semibold">
              Can I report a problem?
              <span className="float-right text-slate-400">+</span>
            </summary>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Absolutely. Send us a message using the form above and describe
              the issue.
            </p>
          </details>

          <details className="group p-5">
            <summary className="cursor-pointer list-none font-semibold">
              Where can I find the project?
              <span className="float-right text-slate-400">+</span>
            </summary>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              You can visit the GitHub page from the navigation bar.
            </p>
          </details>
        </div>
      </section>

    </main>
  );
}
