import { NextResponse } from "next/server";
import { submitToIndexNow, submitAllUrls } from "@/lib/indexnow";

/**
 * POST /api/indexnow
 *
 * Manual trigger for IndexNow submission.
 *
 * Body options:
 *   { "urls": ["https://..."] }   → submit specific URLs
 *   { "all": true }               → submit all known site URLs
 *   (empty body)                   → submit all known site URLs
 *
 * Protected by a simple secret check via the INDEXNOW_SECRET env var.
 * If the env var is not set, the route is open (fine for non-public APIs).
 */
export async function POST(request: Request) {
  // Optional secret protection
  const secret = process.env.INDEXNOW_SECRET;
  if (secret) {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${secret}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
  }

  try {
    const body = await request.json().catch(() => ({}));

    let result;

    if (body.urls && Array.isArray(body.urls) && body.urls.length > 0) {
      result = await submitToIndexNow(body.urls);
    } else {
      result = await submitAllUrls();
    }

    return NextResponse.json(
      {
        success: result.ok,
        indexNowStatus: result.status,
        indexNowResponse: result.body,
      },
      { status: result.ok ? 200 : 502 },
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
