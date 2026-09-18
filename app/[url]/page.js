import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const rawUrlParam = resolvedParams?.url;

  if (!rawUrlParam) {
    redirect("/");
  }

  const shorturl = decodeURIComponent(rawUrlParam).toLowerCase();

  const client = await clientPromise;
  const db = client.db("shrinka");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl: shorturl });

  if (doc && doc.url) {
    let targetUrl = doc.url.trim();
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = `https://${targetUrl}`;
    }
    redirect(targetUrl);
  } else {
    redirect("/");
  }

  return null;
}