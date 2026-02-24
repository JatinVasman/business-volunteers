const INDEXNOW_KEY = "233fc25a070e49a7b5f6b778e7210be7";
const INDEXNOW_HOST = "businessvolunteers.online";
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";
const KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`;

/**
 * Submit one or more URLs to IndexNow for instant indexing by
 * Bing, Yandex, Seznam, and Naver.
 *
 * @param urls - Array of full URLs to submit
 * @returns Response status and body from the IndexNow API
 */
export async function submitToIndexNow(urls: string[]): Promise<{
  ok: boolean;
  status: number;
  body: string;
}> {
  if (urls.length === 0) {
    return { ok: true, status: 200, body: "No URLs to submit" };
  }

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(payload),
    });

    const body = await res.text();
    return { ok: res.ok, status: res.status, body };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return { ok: false, status: 0, body: `Fetch error: ${message}` };
  }
}

/**
 * Submit all known site URLs (homepage, blog, faq, all blog posts).
 * Useful after a full deploy or content update.
 */
export async function submitAllUrls() {
  // Dynamic import to avoid circular deps at build time
  const { blogPosts } = await import("@/data/blogs");

  const urls = [
    `https://${INDEXNOW_HOST}/`,
    `https://${INDEXNOW_HOST}/blog`,
    `https://${INDEXNOW_HOST}/faq`,
    ...blogPosts.map((post) => `https://${INDEXNOW_HOST}/blog/${post.slug}`),
  ];

  return submitToIndexNow(urls);
}
