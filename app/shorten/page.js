"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
    const [generated, setgenerated] = useState(false)

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": "url",
            "shorturl": "shorturl"
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                seturl("")
                setshorturl("")
                setgenerated(`${process.env.NEXT_PULBLIC_HOST}`)
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }

    return (
        <div className="mx-auto my-16 w-full max-w-xl px-4 bg-linear-to-br from-purple-50 via-red-300 to-fuchsia-50">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-8">
                <div className="mb-7">
                    <p className="mb-2 text-sm font-semibold text-purple-600">
                        URL Shortener
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                        Generate your short URL
                    </h1>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Paste a long URL and give it a short, memorable name.
                    </p>
                </div>

                <div className="flex flex-col gap-5">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Your URL
                        </label>

                        <input
                            type="text"
                            value={url}
                            className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-purple-500 focus:bg-white focus:ring-2 focus:ring-purple-100"
                            placeholder="https://example.com/your-long-url"
                            onChange={(e) => {
                                seturl(e.target.value);
                            }}
                        />
                    </div>

                    <div>
                        <label className="mb-2 block text-sm font-medium text-slate-700">
                            Custom short name
                        </label>

                        <div className="flex items-center rounded-lg border border-slate-200 bg-slate-50 transition focus-within:border-purple-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-purple-100">
                            <span className="pl-4 text-sm text-slate-400">
                                shrinka/
                            </span>

                            <input
                                type="text"
                                value={shorturl}
                                className="min-w-0 flex-1 bg-transparent px-2 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
                                placeholder="my-link"
                                onChange={(e) => {
                                    setshorturl(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <button onClick={generate} className="mt-1 rounded-lg bg-purple-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-purple-700 active:scale-[0.99]">
                        Generate Short URL
                    </button>
                </div>

                {generated && (
                    <div className="mt-7 rounded-xl border border-purple-100 bg-purple-50 p-4">
                        <p className="mb-2 text-sm font-semibold text-slate-700">
                            Your shortened link
                        </p>

                        <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2.5">
                            <code className="min-w-0 flex-1 truncate text-sm text-purple-700">
                                <Link
                                    target="_blank"
                                    href={generated}
                                    className="hover:underline"
                                >
                                    {generated}
                                </Link>
                            </code>

                            <Link
                                target="_blank"
                                href={generated}
                                className="shrink-0 rounded-md bg-purple-100 px-3 py-1.5 text-xs font-semibold text-purple-700 transition hover:bg-purple-200"
                            >
                                Open
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Shorten;