import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// On Vercel the app is served by the Node bridge in `api/index.mjs`
// (dist/client + dist/server), so the Nitro deploy plugin is skipped there.
const isVercel = Boolean(process.env["VERCEL"]);

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  ...(isVercel ? { nitro: false as const } : {}),
});
