// Vercel serverless entry — bridges Vercel's Node req/res to TanStack Start's Fetch handler.
import { Readable } from "node:stream";

export const config = { runtime: "nodejs" };

let serverHandlerPromise;

function getServerHandler() {
  serverHandlerPromise ??= import("../dist/server/server.js").then((mod) => mod.default ?? mod);
  return serverHandlerPromise;
}

function createRequest(req) {
  const protocol = req.headers["x-forwarded-proto"] ?? "https";
  const host = req.headers["x-forwarded-host"] ?? req.headers.host;
  const url = new URL(req.url ?? "/", `${protocol}://${host}`);
  const init = {
    method: req.method,
    headers: req.headers,
  };

  if (req.method !== "GET" && req.method !== "HEAD") {
    init.body = Readable.toWeb(req);
    init.duplex = "half";
  }

  return new Request(url, init);
}

async function sendResponse(res, response) {
  res.statusCode = response.status;
  res.statusMessage = response.statusText;

  response.headers.forEach((value, key) => {
    if (key.toLowerCase() !== "set-cookie") res.setHeader(key, value);
  });

  const setCookies = response.headers.getSetCookie?.();
  if (setCookies?.length) res.setHeader("set-cookie", setCookies);

  if (!response.body) {
    res.end();
    return;
  }

  Readable.fromWeb(response.body).pipe(res);
}

export default async function (req, res) {
  try {
    const handler = await getServerHandler();
    const response = await handler.fetch(createRequest(req));
    await sendResponse(res, response);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}
