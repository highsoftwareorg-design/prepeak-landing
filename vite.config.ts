import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Disable the Cloudflare adapter so the build output works on generic Node hosts (Vercel).
export default defineConfig({
  cloudflare: false,
});
