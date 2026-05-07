import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Target Vercel instead of the default Cloudflare Workers preset.
export default defineConfig({
  cloudflare: false,
  tanstackStart: { target: "vercel" },
});
