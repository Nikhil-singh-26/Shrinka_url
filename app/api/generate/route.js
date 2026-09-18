import clientPromise from "@/lib/mongodb";

const RESERVED_SLUGS = new Set([
  "shorten",
  "about",
  "contact",
  "api",
  "github",
  "favicon.ico",
  "favicon.svg",
  "icon.svg",
  "robots.txt",
  "sitemap.xml",
]);

export async function POST(request) {
  try {
    const body = await request.json();
    const rawUrl = body?.url?.trim();
    const rawShortUrl = body?.shorturl?.trim();

    if (!rawUrl || !rawShortUrl) {
      return Response.json(
        { success: false, error: true, message: "Please provide both the original URL and a short name." },
        { status: 400 }
      );
    }

    // Slug validation: alphanumeric, dash, underscore only
    const cleanShortUrl = rawShortUrl.toLowerCase();
    if (!/^[a-z0-9_-]+$/i.test(cleanShortUrl)) {
      return Response.json(
        { success: false, error: true, message: "Short name can only contain letters, numbers, hyphens, and underscores." },
        { status: 400 }
      );
    }

    if (RESERVED_SLUGS.has(cleanShortUrl)) {
      return Response.json(
        { success: false, error: true, message: `The short name '${cleanShortUrl}' is reserved. Please choose another.` },
        { status: 400 }
      );
    }

    // Ensure valid target URL format
    let targetUrl = rawUrl;
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = `https://${targetUrl}`;
    }

    try {
      new URL(targetUrl);
    } catch {
      return Response.json(
        { success: false, error: true, message: "Please enter a valid URL." },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("shrinka");
    const collection = db.collection("url");

    // Check if the short url exists
    const doc = await collection.findOne({ shorturl: cleanShortUrl });
    if (doc) {
      return Response.json(
        { success: false, error: true, message: "This short URL already exists! Please pick a different name." },
        { status: 409 }
      );
    }

    await collection.insertOne({
      url: targetUrl,
      shorturl: cleanShortUrl,
      createdAt: new Date(),
    });

    return Response.json(
      {
        success: true,
        error: false,
        message: "URL generated successfully!",
        shorturl: cleanShortUrl,
        url: targetUrl,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error generating short URL:", error);
    return Response.json(
      { success: false, error: true, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
